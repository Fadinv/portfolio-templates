import React from 'react';
import styles from "./HeaderContent.module.css";
import InputBar from "./InputBar/InputBar";
import RefBar from "./RefBar/RefBar";

const HeaderContent = () => {
    return (
        <div className={styles.HeaderContent}>

            <div className={styles.sizeContainer}>

                <div className={styles.textContainer}>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <h1 className={styles.header}>ALPINE</h1>
                        <h2 className={styles.description}>SOCIAL MEDIA MARKETING PLATFORM</h2>
                    </div>

                    <span className={styles.text}>
                        The core systems of record for marketing that
                        provide a common way of orchestring the experiences
                        across channels and applications,
                        including operational managment and measurement,
                        with the ultimate goal of driving customer engagement.
                    </span>

                    <InputBar/>

                </div>


            </div>

            <RefBar/>

        </div>
    );
};

export default HeaderContent;