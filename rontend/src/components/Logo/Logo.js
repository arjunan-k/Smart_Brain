import React from "react"
import Tilt from 'react-parallax-tilt';
import "./Logo.css"
import brain from "./brain.png"

const Logo = () => {
    return (
        <div className="ma4 mt0 tc">
            <Tilt className="Tilt br2 shadow-2 w4 tc">
                <div className="pa2" style={{ height: '120px', paddingTop: "10px"}}>
                <img src={brain} alt="logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;