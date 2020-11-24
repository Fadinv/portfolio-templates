import React from 'react';
import ImageStuck from "./ImageStuck/ImageStuck";
import styles from './Top.module.css'

const Top = () => {
    return (
        <div className={styles.Top}>

            <div className={styles.WhiteBoxText}>
                <h2 className={styles.WhiteBoxTitle}>Duurzame materialen</h2>
                <p className={styles.WhiteBoxDescription}>Alle EcoCabins hebben een hoge isolatiewaarde,
                    worden geproduceerd met indien mogelijk
                    duurzame en/of natuurlijke materialen en
                    hebben als opvallende uiterlijke kenmerk
                    de ‘ronde hoeken’, mogelijk gemaakt door
                    het specifieke materiaalgebruik.
                    De voordelen van bouwen met hout zijn legio:
                    hout is licht, flexibel, isoleert goed
                    en bouwt snel en efficiënt. </p>
                <button className={styles.WhiteBoxButton}>Lees meer</button>
            </div>

            <div className={styles.EmptyWhiteBox}>
                <ImageStuck />

                <div className={styles.BackgroundWhite}>

                </div>

            </div>

        </div>
    );
};

export default Top;