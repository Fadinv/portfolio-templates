import React, {useRef} from 'react';
import References from "../../Components/GlobComp/References";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Header/NavBar/NavBar";
import Logo from "./Components/Header/NavBar/Logo/Logo";
import Menu from "./Components/Header/NavBar/Menu/Menu";
import HeaderContent from "./Components/Header/HeaderContent/HeaderContent";
import MidlContent from "./Components/MidlContent/MidlContent";
import FooterBar from "./Components/FooterBar/FooterBar";
import MenuCSS from "./Components/Header/NavBar/Menu/Menu.module.css";
import styles from "./index.module.css"

const Index = () => {

    const refMenu = useRef<HTMLUListElement>()

    const isClose = (event) => {

        const menu = refMenu.current

        if (!event.target.classList.contains(MenuCSS.button) && !event.target.parentNode.classList.contains(MenuCSS.li)) {
            menu.classList.remove(MenuCSS.isOpen)
        }

    }

    return (
        <div onClick={isClose} className={styles.index}>
            <Header>
                <NavBar>
                    <Logo/>
                    <Menu ref={refMenu}/>
                </NavBar>
                <HeaderContent/>
            </Header>

            <MidlContent/>

            <FooterBar/>

            <References/>
        </div>
    );
};

export default Index;