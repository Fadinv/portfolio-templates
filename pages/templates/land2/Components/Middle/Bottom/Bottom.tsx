import React from 'react';
import styles from './Bottom.module.css'
import BottomText from "./BottomText/BottomText";

const Bottom = () => {
    return (
        <div className={styles.Bottom}>
            <div className={styles.ImageBox}>
                <img src={'/land2/C0283T01.png'} className={styles.Image}/>
            </div>
            <div className={styles.TextGrid}>

                <BottomText title={'Hout'}
                            text={'De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.'}/>
                <BottomText title={'Glaswol isolatie'}
                            text={'De combinatie van glaswol met een houtskelet constructie geeft een.'}/>
                <BottomText title={'Afwerking'}
                            text={'De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.'}/>
                <BottomText title={'Triple glas'}
                            text={'De combinatie van glaswol met een houtskelet constructie geeft een.'}/>
                <BottomText title={'Stalen onderstel'}
                            text={'Het stalen onderstel is sterk zijn en heeft de benodigde stijfheid die'}/>
                <BottomText title={'Infrarood vloer'}
                            text={'De vloer wordt opgewarmd middels opgewekte warmte uit eigen zonne-energie.'}/>

            </div>

        </div>
    );
};

export default Bottom;