import React, {useRef, useState} from 'react'
import styles from './ProductContainer.module.css'
import ProductContainerItemsWrapper from './ProductContainerItemsWrapper/ProductContainerItemsWrapper'

interface ProductContainerProps {
    children: React.ReactNode[]
    rows: 1 | 2
    columns: 2 | 3
}

const getGridTemplateColumnOrRow = (num) => {
    let str

    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            str = `1fr`
            continue
        }
        str += ` 1fr`
    }

    return str
}

const ProductContainer: React.FC<ProductContainerProps> = ({rows, columns, ...props}) => {
    const numInsideGrid = rows * columns

    const containerRef = useRef<HTMLDivElement>()
    const [state, setState] = useState({
        position: 0,
        scrollWidth: -1,
    })

    const body = []
    let i = -1

    if (!props.children) return
    if (!props.children.length) return

    try {

        for (let j = 0; j < props.children.length; j++) {
            if (j % numInsideGrid === 0) {
                i++
                body.push([])
            }
            body[i].push(props.children[j])
        }
    } catch (e) {
        console.log(e)
    }
    const movePosition = (event) => {
        const moveOn = event.target.dataset.set
        const elem = containerRef.current

        const width = 84
        let scrollWidth

        let div = document.createElement('div')
        div.style.overflowY = 'scroll'
        div.style.width = '50px'
        div.style.height = '50px'

        document.body.insertBefore(div, document.body.childNodes[0])
        scrollWidth = div.offsetWidth - div.clientWidth
        document.body.removeChild(div)

        setState({
            position: state.position,
            scrollWidth: scrollWidth,
        })

        if (moveOn === 'right' && state.position !== i) {
            elem.style.left = `calc(${+elem.style.left.slice(elem.style.left.indexOf('-'), elem.style.left.indexOf('vw')) - width + 'vw'} + ${scrollWidth * (state.position + 1)}px)`

            const lastElement = containerRef.current.children[state.position]
            const newElement = containerRef.current.children[state.position + 1]

            // @ts-ignore
            lastElement.style.opacity = '.5'
            // @ts-ignore
            newElement.style.opacity = '1'


            setState({
                position: state.position + 1,
                scrollWidth: scrollWidth,
            })
            return
        }

        if (moveOn === 'left' && state.position !== 0) {
            elem.style.left = `calc(${+elem.style.left.slice(elem.style.left.indexOf('-'), elem.style.left.indexOf('vw')) + width + 'vw'} + ${scrollWidth * (state.position - 1)}px)`

            const lastElement = containerRef.current.children[state.position]
            const newElement = containerRef.current.children[state.position - 1]

            // @ts-ignore
            lastElement.style.opacity = '.5'
            // @ts-ignore
            newElement.style.opacity = '1'

            setState({
                position: state.position - 1,
                scrollWidth: scrollWidth,
            })
        }
    }


    return (
        <div className={styles.ProductContainer} style={{}}>
            <div ref={containerRef} style={{
                left: '0vw',
            }} className={styles.ProductContainerItems}>
                {body.map((item, key) => <ProductContainerItemsWrapper variant={columns === 3 ? 'push' : 'none'}
                                                                       style={{
                                                                           ['--var-rows' as string]: getGridTemplateColumnOrRow(rows),
                                                                           ['--var-columns' as string]: getGridTemplateColumnOrRow(columns),
                                                                           opacity: key === 0 ? '1' : '.5',
                                                                       }} key={key}>
                    {item}
                </ProductContainerItemsWrapper>)}
            </div>
            <button onClick={movePosition} data-set={'left'} className={styles.Button + ' ' + styles.ButtonLeft}>
                <img data-set={'left'} className={styles.ImageButtonLeft} src={'/land3/Shape.svg'}/>
            </button>
            <button onClick={movePosition} data-set={'right'} className={styles.Button + ' ' + styles.ButtonRight}>
                <img data-set={'right'} className={styles.ImageButtonRight} src={'/land3/Shape.svg'}/>
            </button>
        </div>
    )
}

export default ProductContainer