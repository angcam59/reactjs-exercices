import React from 'react'
import './clips.css'
import Header from '../components/header/Header'


function Clips() {
  return (
    <>
    <div class="container">
        <header>
            <Header />
        </header>
        <main>
            <div class="sidebarContainer">
                <div id="sidebarId" class="sidebar">
                    <nav class="sidebarLinks">
                        <ul>
                            <li>
                                <a href="" id="donate">
                                    <img id="donImage" src={process.env.PUBLIC_URL + "/images/icons8-hand-holding-heart-blanc.png"}
                                        alt="icône faire un don"></img>
                                    <p>Faire un don</p>
                                </a>
                            </li>
                            <li>
                                <a href="../pages/boutique.html" id="shop">
                                    <img id="caddieImage" src={process.env.PUBLIC_URL + "/images/icons8-caddie-64-blanc.png"}
                                        alt="icône boutique"></img>
                                    <p>La boutique</p>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <nav class="sidebarButtons">
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

             
            <section class="rightGlobalContainer">

                
                <div class="daysButtonsContainer">

                    <div class="burger2Container">
                        
                    </div>

                    <input type="radio" name="selectedDay" class="radioButton" id="weekEnd" checked></input>
                    <label for="weekEnd">Tout le week-end</label>

                    <input type="radio" name="selectedDay" class="radioButton" id="vendredi"></input>
                    <label for="vendredi">Vendredi</label>

                    <input type="radio" name="selectedDay" class="radioButton" id="samedi"></input>
                    <label for="samedi">Samedi</label>

                    <input type="radio" name="selectedDay" class="radioButton" id="dimanche"></input>
                    <label for="dimanche">Dimanche</label>
            
                </div>

                <h1>Les plus vues</h1>

                <div class="nbPages">
                    <p>1</p>
                </div>

                <section class="containerAllClips">

                </section>
            </section>
        </main>
    </div>
   
    </>
  )
}

export default Clips
