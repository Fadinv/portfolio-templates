import React from "react";
import Header from "./Components/Header/Header";
import MidlContent from "./Components/MidlContent/MidlContent";
import FooterBar from "./Components/FooterBar/FooterBar";
import NavBar from "./Components/Header/NavBar/NavBar";
import HeaderContent from "./Components/Header/HeaderContent/HeaderContent";

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header>
                <NavBar/>
                <HeaderContent />
            </Header>
            <MidlContent/>
            <FooterBar/>
        </div>
    )
}
