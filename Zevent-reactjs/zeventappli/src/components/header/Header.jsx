import React from "react";
import './header.css';


function Header(props) {
    
    const { pageName } = props
    
    return (
        <>
            <div className="lineTop">

                <nav className="navLineTop">
                    <ul>
                        <li><a href="">ACCUEIL</a></li>
                        <li><a href="">LES ASSOCIATIONS</a></li>
                        <li><a href="/">LES CLIPS</a></li>
                        <li><a href="">LES STATS</a></li>
                    </ul>
                </nav>

                <nav className="navLineTopIcones">
                    
                    <ul>
                        <li><a href=""><img src={process.env.PUBLIC_URL + "/images/icons8-page-d’accueil-64.png"}
                                    alt="logo accueil"></img></a></li>
                        <li><a href=""><img src={process.env.PUBLIC_URL + "/images/icons8-organisation-50.png"}
                                    alt="logo associations"></img></a></li>
                        <li><a href="/"><img src={process.env.PUBLIC_URL + "/images/icons8-film-24.png"}
                                     alt="logo clip"></img></a></li>
                        <li><a href=""><img src={process.env.PUBLIC_URL + "/images/icons8-nas-16.png"}
                                     alt="logo stats"></img></a></li>
                    </ul>

                </nav>

                {/* On affiche le panier uniquement sur la page boutique */}
                { pageName == "Boutique" &&
                    <div className="panier" id="monPanier">
                        <a href=""><img src={process.env.PUBLIC_URL + "/images/cart.svg"} alt="Logo panier"></img></a>
                    </div>
                }
    
                <div className="burgerContainer">
                    <button className="burgerIcon">
                       
                    </button>
                </div>
            </div>

            <div className ="logo">
                <img src={process.env.PUBLIC_URL + "/images/zevent-logo.webp"} alt="Logo ZEvent"></img>
            </div>
            
            <nav className="navLineBottom">
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


