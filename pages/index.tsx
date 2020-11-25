import React from "react";
import styles from './index.module.css'
import TemplatesItem from "./Components/Templates/TemplatesItem/TemplatesItem";
import Templates from "./Components/Templates/Templates";

export default function Home() {

    return (
        <div className={styles.Index}>

            <div className={styles.Me}>
                <h1 className={styles.Hello}>Привет!</h1>

                <p className={styles.MeText}>
                    Выбери понравившуюся работу
                    или клацни по кнопке ниже
                </p>

                <a className={styles.RefStart} href={'/templates/land1'}>Начать</a>
            </div>

            <div className={styles.PortfolioStuck}>
                <h2>Шаблоны верстки</h2>

                <Templates>
                    <TemplatesItem src={'/land1.png'} land={1}/>
                    <TemplatesItem src={'/land2.png'} land={2}/>
                </Templates>

            </div>
        </div>
    )
}
