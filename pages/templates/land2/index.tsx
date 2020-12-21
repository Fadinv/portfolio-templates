import React, {RefObject} from 'react'
import styles from './index.module.css'
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
import Footer from './Components/Footer/Footer'
import HeaderCSS from './Components/Header/Header.module.css'
import References from '../../Components/GlobComp/References'

const Land2 = () => {

    const refMenu = React.createRef() as RefObject<any>

    const onClose = (event) => {
        if (event.target.className.includes('Header_Ref') || event.target.className.includes('Header_MenuButton')) {
            return
        }

        const menu = refMenu.current
        menu.classList.remove(HeaderCSS.Open)

    }


    return (
        <div onClick={onClose} className={styles.index}>
            <div className={styles.wrapper}>

                <Header ref={refMenu}/>

                <Middle/>

                <Footer/>

            </div>
            <References/>
        </div>
    )
}

export default Land2