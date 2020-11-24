import React, {RefObject} from 'react';
import styles from './Header.module.css'



const Header = React.forwardRef((props, ref: RefObject<HTMLUListElement>) => {
    const onOpen = () => {
        const menu = ref.current
        menu.classList.toggle(styles.Open)
    }

    const disReference = (event) => {
        event.preventDefault()
    }

    return (
        <div className={styles.Header}>

            <div className={styles.HeaderContainer}>

                <nav className={styles.HeaderNav}>
                    <img className={styles.Logo} src={'/land2/Logo horizontal.svg'}/>

                    <div className={styles.ReferenceBar}>

                        <button onClick={onOpen} className={styles.MenuButton}>Menu</button>

                        <ul ref={ref} className={styles.MenuList}>
                            <li><a className={styles.Ref} onClick={disReference} href="/templates/land2">Modelien</a></li>
                            <li><a className={styles.Ref} onClick={disReference} href="/templates/land2">Kopen</a></li>
                            <li><a className={styles.Ref} onClick={disReference} href="/templates/land2">Huren</a></li>
                            <li><a className={styles.Ref} onClick={disReference} href="/templates/land2">Nieuws</a></li>
                        </ul>

                        <button className={styles.Button}>Contact</button>

                    </div>
                </nav>

                <div className={styles.HeaderContent}>

                    <div className={styles.HeaderText}>
                        <h1 className={styles.TextTitle}>Duurzame tiny huisjes</h1>
                        <div className={styles.TextDescription}>
                            Een ecologisch tiny huisje is
                            zoveel mogelijk opgebouwd uit
                            duurzame natuurlijke materialen
                        </div>
                    </div>

                    <ul className={styles.RotatedList}>
                        <li><a href={'/templates/land2'}>Instagram</a></li>
                        <li><a href={'/templates/land2'}>Facebook</a></li>
                        <li><a href={'/templates/land2'}>Linkedin</a></li>
                    </ul>
                </div>
            </div>

            <img className={styles.image} src={'/land2/bitmap.png'}/>
        </div>
    )
})

export default Header;