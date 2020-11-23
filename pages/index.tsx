import React, {useRef, useState} from "react";
import Header from "./Components/Header/Header";
import MidlContent from "./Components/MidlContent/MidlContent";
import FooterBar from "./Components/FooterBar/FooterBar";
import NavBar from "./Components/Header/NavBar/NavBar";
import HeaderContent from "./Components/Header/HeaderContent/HeaderContent";
import Logo from "./Components/Header/NavBar/Logo/Logo";
import Menu from "./Components/Header/NavBar/Menu/Menu";

import MenuCSS from "./Components/Header/NavBar/Menu/Menu.module.css"

export default function Home() {

    const [state, setState] = useState({
        isOpen: true
    })

    const refMenu = useRef<HTMLUListElement>()

    const isClose = (event) => {

        const menu = refMenu.current
        console.log('123', event.target.parentNode.classList.contains(MenuCSS.li))
        console.log(!event.target.classList.contains(MenuCSS.button))


        if (!event.target.classList.contains(MenuCSS.button) && !event.target.parentNode.classList.contains(MenuCSS.li)) {
            menu.classList.remove(MenuCSS.isOpen)
        }

        console.log('from index', refMenu.current)
    }

    return (
        <div onClick={isClose} style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header>
                <NavBar>
                    <Logo/>
                    <Menu ref={refMenu}/>
                </NavBar>
                <HeaderContent />
            </Header>
            <MidlContent/>
            <FooterBar/>
        </div>
    )
}
