import React, {useRef, useState} from 'react';
import styles from './TabBarContainer.module.css'
import TabBarMinimalDescription from "../TabBarMinimalDescription/TabBarMinimalDescription";
import ButtonStuck from "../../Global/ButtonStuck/ButtonStuck";

const TabBarContainer = () => {

    const [state, setState] = useState({
        position: 0
    })

    const buttonStuckRef = useRef<HTMLDivElement>()

    const toggleButton = ({target}) => {
        console.log(target.dataset.set)
        if (target.dataset.set === state.position) {
            console.log('Вошли')
            return
        }
        const lastActiveItem = buttonStuckRef.current.children[state.position]
        lastActiveItem.classList.toggle(styles.active)
        console.log(lastActiveItem)
        target.classList.toggle(styles.active)

        setState({
            position: target.dataset.set
        })
    }

    return (
        <div className={styles.TabBarContainer}>

            <img src={'/land3/image123.png'} className={styles.TabBarImage}/>


            <div className={styles.TextBox}>
                <p className={styles.Price}>285.000</p>
                <p className={styles.Title}>Giftset "Cà phê phin Việt Nam"</p>
                <p className={styles.Text}>Món quà tuyệt vời dành cho người
                    sành cà phê. Hạt cà phê được Revo
                    cẩn trọng chọn lựa, rang xay theo
                    công nghệ và bí quyết học hỏi từ những
                    nghệ nhân nổi tiếng, cùng với tình yêu,
                    sự đam mê của người làm cà phê… tạo ra
                    những tách cà phê tinh khiết chỉ dành
                    riêng cho bạn.</p>

                <div className={styles.MinimalStuck}>

                    <TabBarMinimalDescription src={'/land3/coffee-beans.svg'} title={'Loại hạt'} text={'Fine Robusta Blend'} />
                    <TabBarMinimalDescription src={'/land3/mountain (1).svg'} title={'Độ cao'} text={'700 - 800m'} />

                </div>

                <ButtonStuck />
            </div>

            <div ref={buttonStuckRef} className={styles.ButtonStuck}>
                <div data-set={0} onClick={toggleButton} className={styles.active}>1</div>
                <div data-set={1} onClick={toggleButton}>2</div>
                <div data-set={2} onClick={toggleButton}>3</div>
            </div>

        </div>
    );
};

export default TabBarContainer;