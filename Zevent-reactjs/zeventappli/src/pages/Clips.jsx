import React from 'react'
import './clips.css'

import Header from '../components/header/Header'
import MouseFunctions from '../components/mouseFunctions/MouseFunctions'
import DisplayOneClip from '../components/displayOneClip/DisplayOneClip'
import BurgerHeader from '../components/burgerHeader/BurgerHeader'

function Clips() {  
// Traitement du menu Burger de la sidebar

if (document.querySelector('.burger2Container button')) 
// Si un <button> dans un <div class="burger2Container"> existe fait ce code
{
    // Sélectionne le <button> dans la <div class="burger2Container"> 
    const button2 = document.querySelector('.burger2Container button');

    // Sélectionne la <div class="sidebarContainer"> (le menu de la sidebar)
    const menuSidebar = document.querySelector('.sidebarContainer');

    button2.addEventListener('click', () => {

        /* 
            Au click, ajoute ou supprime la classe "active" de la liste.
            Si la classe "active" est présente, supprime la
            Si la classe "active" n'est pas là, ajoute la.
        */
        menuSidebar.classList.toggle('active');

        // Au click, ajoute ou supprime la classe "active" du bouton burger.
        // Si la classe "active" est présente (Icone fermeture)
        //    on la supprime pour afficher l'icone du burger
        // Si la classe "active" est absente (Icon burger affiché)
        //    on la supprime pour afficher l'icone de fermeture
        button2.classList.toggle('active');
    })
}

    return (
        <>
            <div className="container">
                <header>
                    <Header pageName="Clips"/>
                </header>

                <main>
                    <div className="sidebarContainer">
                        <div id="sidebarId" className="sidebar">
                            <nav className="sidebarLinks">
                                <ul>
                                    <li>
                                        <a href="" id="donate">
                                            <img id="donImage" src={process.env.PUBLIC_URL + "/images/icons8-hand-holding-heart-blanc.png"}
                                                alt="icône faire un don"></img>
                                            <p>Faire un don</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./boutique" id="shop">
                                            <img id="caddieImage" src={process.env.PUBLIC_URL + "/images/icons8-caddie-64-blanc.png"}
                                                alt="icône boutique"></img>
                                            <p>La boutique</p>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <nav className="sidebarButtons">
                                <ul>
                                    <li><button>Tops</button></li>
                                    <li><button>Best of</button></li>
                                    <li><button>Tops par streamers</button></li>
                                    <li><button>Récents</button></li>
                                    <li><button>Streamers</button></li>
                                    <li><button>Jeux</button></li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                    <section className="rightGlobalContainer">


                        <div className="daysButtonsContainer">

                            <div className="burger2Container">

                            </div>

                            <input type="radio" name="selectedDay" className="radioButton" id="weekEnd" checked></input>
                            <label for="weekEnd">Tout le week-end</label>

                            <input type="radio" name="selectedDay" className="radioButton" id="vendredi"></input>
                            <label for="vendredi">Vendredi</label>

                            <input type="radio" name="selectedDay" className="radioButton" id="samedi"></input>
                            <label for="samedi">Samedi</label>

                            <input type="radio" name="selectedDay" className="radioButton" id="dimanche"></input>
                            <label for="dimanche">Dimanche</label>

                        </div>

                        <h1>Les plus vues</h1>

                        <div className="nbPages">
                            <p>1</p>
                        </div>

                        <section className="containerAllClips">
                            <DisplayOneClip 
                                nbVues="1 000 000 Vues" 
                                dateHeure = "01/01/2022 à 01:00:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Bigard + alien = ALLAALLALALA (+flop d'étoiles)"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 2"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 3"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 4"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 5"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 6"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 7"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 8"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 9"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 10"
                            />
                            <DisplayOneClip
                                nbVues="2 000 000 Vues" 
                                dateHeure = "10/01/2022 à 01:30:00"
                                urlImg = "/images/mister-mv.webp"
                                videoTitle = "Titre Vidéo 11"
                            />
                        </section>
                    </section>

                </main>
            </div>
            <MouseFunctions />
            <BurgerHeader />
        </>
    )
}

export default Clips
