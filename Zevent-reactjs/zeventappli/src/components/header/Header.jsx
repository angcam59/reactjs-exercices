import React from "react";
import './header.css';

function Header() {
    return (
        <>
            <div class="lineTop">

                <nav class="navLineTop">
                    <ul>
                        <li><a href="">ACCUEIL</a></li>
                        <li><a href="">LES ASSOCIATIONS</a></li>
                        <li><a href="">LES CLIPS</a></li>
                        <li><a href="">LES STATS</a></li>
                    </ul>
                </nav>

                <nav class="navLineTopIcones">
                    
                    <ul>
                        <li><a href=""><img src={process.env.PUBLIC_URL + "/images/icons8-page-d’accueil-64.png"}
                                    alt="logo accueil"></img></a></li>
                        <li><a href=""><img src={process.env.PUBLIC_URL + "/images/icons8-organisation-50.png"}
                                    alt="logo associations"></img></a></li>
                        <li><a href=""><img src={process.env.PUBLIC_URL + "/images/icons8-film-24.png"}
                                     alt="logo clip"></img></a></li>
                        <li><a href=""><img src={process.env.PUBLIC_URL + "/images/icons8-nas-16.png"}
                                     alt="logo stats"></img></a></li>
                    </ul>

                </nav>


                <div class="burgerContainer">
                    <button class="burgerIcon">
                       
                    </button>
                </div>
            </div>

            <div class="logo">
                <img src={process.env.PUBLIC_URL + "/images/zevent-logo.webp"} alt="Logo ZEvent"></img>
            </div>
            <nav class="navLineBottom">
                <ul>
                    <li><a href=""><img src={process.env.PUBLIC_URL + "/images/square-twitter.svg"} 
                                alt="Logo twitter"></img></a></li>
                    <li><a href=""><img src={process.env.PUBLIC_URL + "/images/square-instagram.svg"}
                                alt="Logo instagram"></img></a></li>
                    <li><a href=""><img src={process.env.PUBLIC_URL + "/images/square-reddit.svg"}
                                alt="Logo reditt"></img></a></li>
                </ul>
            </nav>
        </>      
    )
}

export default Header


