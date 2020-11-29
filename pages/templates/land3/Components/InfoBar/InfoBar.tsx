import React from 'react';
import styles from './InfoBar.module.css'
import InfoBarItem from "./InfoBarItem/InfoBarItem";
import Title from "../Global/Title/Title";

const InfoBar = () => {
    return (
        <div className={styles.InfoBar}>

            <Title
                text={'COFFEE BUILD YOUR BASE'}
                description={'Your Personalized Coffee'}
            />

            <div className={styles.InfoBarStuck}>

                <InfoBarItem
                    src={'/land3/Group1.svg'}
                    title={'Nguồn gốc'}
                    description={'Những hạt cà phê Arabica, Robusta ' +
                    'đạt chất lượng theo tiêu chuẩn quốc tế.'}
                />

                <InfoBarItem
                    src={'/land3/Group2.svg'}
                    title={'Chất lượng'}
                    description={'Từng một hạt cà phê là cả một quá' +
                    ' trình tập trung cao độ của nghệ nhân cà phê.'}
                />

                <InfoBarItem
                    src={'/land3/Group3.svg'}
                    title={'Các loại hạt'}
                    description={'70% chất lượng tách cà phê đến ' +
                    'từ nguồn gốc và chất lượng green bean.'}
                />

                <InfoBarItem
                    src={'/land3/Group4.svg'}
                    title={'Pha chế'}
                    description={'Những hạt cà phê được lột xác qua' +
                    ' quá trình rang xay kỹ lưỡng và nghiêm ngặt.'}
                />

            </div>

        </div>
    );
};

export default InfoBar;