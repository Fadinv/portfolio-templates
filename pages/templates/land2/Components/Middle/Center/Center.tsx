import React from 'react';
import styles from './Center.module.css'

const Center = () => {
    return (
        <div className={styles.Center}>

            <h3 className={styles.Title}>
                Innovatie
            </h3>

            <div className={styles.TextBox}>

                <p>Wij hebben als doel om de EcoCabins voortdurend verder
                    te ontwikkelen en innoveren, zodat de EcoCabins
                    uiteindelijk 100% duurzaam en circulair zijn. Voorwaarde
                    hierbij is dat de EcoCabins betaalbaar blijven. Met
                    behulp van de zon, de wind en de beste isolatie
                    geniet u van.</p>

                <p>Alle EcoCabins hebben een hoge isolatiewaarde, worden
                    geproduceerd met indien mogelijk duurzame en/of
                    natuurlijke materialen en hebben als opvallende
                    uiterlijke kenmerk de ‘ronde hoeken’, mogelijk gemaakt
                    door het specifieke materiaalgebruik De voordelen
                    van bouwen.</p>

            </div>

        </div>
    );
};

export default Center;