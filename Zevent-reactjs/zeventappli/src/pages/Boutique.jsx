import React from 'react'
import './boutique.css'
import Header from '../components/header/Header'


function Boutique() {
  return (
    <>
    <div className="containerPageBoutique">
        <header>
            <div className="banner">
                <p>Nous vous invitons à faire attention à la taille que vous choisissez lors du passage de votre
                    commande</p>
            </div>

            <Header pageName="Boutique"/>
        </header>


        <main>
            
            <h1><img src={process.env.PUBLIC_URL + "/images/shop-banner.webp"} alt="ZEvent Achetez votre Tshirt"></img></h1>
           

            <section className="allArticlesContainer">

                <article>

                    <h2>Tee-shirt Bio - officiel ZEnd 2022</h2>

                    <div className="articleBloc1">

                        <div className="carousel">
                            <div className="slide slide1"><img src={process.env.PUBLIC_URL + "/images/tshirt.webp"}
                                    alt="Tshirt ZEvent photo1"></img></div>
                            <div className="slide slide2"><img src={process.env.PUBLIC_URL + "/images/tshirt-details.webp"}
                                    alt="Tshirt ZEvent photo2"></img></div>
                            <div className="slide slide1"><img src={process.env.PUBLIC_URL + "/images/tshirt.webp"}
                                    alt="Tshirt ZEvent photo1"></img></div>
                        </div>


                        <section className="articlePreOrder">

                            <h3>Précommande</h3>

                            <p>&euro; 26,00 taxes incluses</p>

                            <h3>Tailles</h3>

                            <section className="size">

                                <p>Sélectionnez une taille</p>

                                <div className="selectSize">
                                    <div className="inputSize">
                                        <input type="radio" name="selectedSize" className="radioButton" id="sizeXS"></input>
                                        <label className="labelSize" for="sizeXS">XS</label>
                                    </div>
                                    <div className="inputSize">
                                        <input type="radio" name="selectedSize" className="radioButton" id="sizeS"></input>
                                        <label className="labelSize" for="sizeS">S</label>
                                    </div>
                                    <div className="inputSize">
                                        <input type="radio" name="selectedSize" className="radioButton" id="sizeM"></input>
                                        <label className="labelSize" for="sizeM">M</label>
                                    </div>
                                    <div className="inputSize">
                                        <input type="radio" name="selectedSize" className="radioButton" id="sizeL"></input>
                                        <label className="labelSize" for="sizeL">L</label>
                                    </div>
                                    <div className="inputSize">
                                        <input type="radio" name="selectedSize" className="radioButton" id="sizeXL"></input>
                                        <label className="labelSize" for="sizeXL">XL</label>
                                    </div>
                                    <div className="inputSize">
                                        <input type="radio" name="selectedSize" className="radioButton" id="sizeXXL"></input>
                                        <label className="labelSize" for="sizeXXL">XXL</label>
                                    </div>
                                    <div className="inputSize">
                                        <input type="radio" name="selectedSize" className="radioButton" id="sizeXXXL"></input>
                                        <label className="labelSize" for="sizeXXXL">XXXL</label>
                                    </div>
                                </div>

                            </section>

                            <section className="quantityAndOrder">
                                <h3>Quantité</h3>
                                <div className="quantity quantity1">
                                    <button type="button" className="decrease"></button>
                                    <input type="number" className="quantityOrdered" value="1" readonly></input>
                                    <button type="button" className="increase"></button>
                                </div>
                                <button type="button" className="orderNow">Acheter maintenant</button>
                            </section>

                        </section>

                    </div>

                    <div className="dropDownContainer">

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/leaf.svg"} alt="logo composition et fabrication"></img>
                                <span>&nbsp;Composition et Fabrication</span>
                            </button>
                            <div className="detail item1">
                                <br></br>100% coton biologique - 170g<br></br><br></br>
                                Ce tee-shirt est certifié Oeko-Tex Standard 100, Fairwear, GOTS, PETA Approved
                                vegan<br></br><br></br>
                                Nous sommes convaincus, comme vous, qu'il est important d'avoir de la transparence et
                                une traçabilité sur les produits que nous achetons. Merci d'avoir cliqué pour en savoir
                                plus.<br></br><br></br>
                                Les t-shirts sont fabriqués en coton bio et ont reçu le label GOTS. Ils ont été montés
                                dans des usines labellisées FairWear au Bengladesh puis imprimés dans un atelier GOTS à
                                Bidart en France.<br></br><br></br>
                                Si vous voulez en savoir plus sur notre partenaire Stanley Stella qui produit nos
                                tee-shirts noirs, vous pouvez aller sur ce site : &nbsp;<a href=""
                                    className="link">stanleystalla.com</a> &nbsp;ou télécharger leur<br></br>
                                <a href="" className="link">Social Report 2021</a><br></br><br></br>
                                Pour en savoir plus sur le label GOTS :&nbsp; <a href=""
                                    className="link">labelinfo.be</a><br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/delivery.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Délais de livraison</span>
                            </button>
                            <div className="detail item2">
                                <br></br>Les t-shirt seront expédiés à partir du 3 Octobre.<br></br><br></br>
                                Le planning de production des produits de la boutique ZEvent est consultable &lt;<a
                                    href="" className="link">ici</a>&gt;<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/size.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Taille</span>
                            </button>
                            <div className="detail item3">
                                <br></br>Ce t-shirt est unisexe !<br></br><br></br>
                                Pour les hommes : prenez votre taille habituelle<br></br><br></br>
                                Pour les femmes : prenez une taille en dessous<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/wash.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Lavage</span>
                            </button>
                            <div className="detail item4">
                                <br></br>Laver à 30°C retourné. Ne pas mettre au sèche-linge. Repasser à l'envers.<br></br><br></br>
                            </div>
                        </div>

                    </div>

                    <div className="articleDetails">
                        <a href="" className="link">Afficher les détails&nbsp;</a>
                        <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="icône direction"></img>
                    </div>

                </article>

                <article>
                    <h2>ZEvent Place - Tirage sur Dibond</h2>

                    <div className="articleBloc1">

                        <div className="carousel">
                            <div className="slide slide1"><img src={process.env.PUBLIC_URL + "/images/zplace.webp"}
                                    alt="Tshirt ZEvent photo1"></img></div>
                            <div className="slide slide2"><img src={process.env.PUBLIC_URL + "/images/zplace-details.webp"}
                                    alt="Tshirt ZEvent photo2"></img></div>
                            <div className="slide slide1"><img src={process.env.PUBLIC_URL + "/images/zplace.webp"}
                                    alt="Tshirt ZEvent photo1"></img></div>
                        </div>


                        <section className="articlePreOrder">

                            <h3>Précommande</h3>

                            <p>Photo non contractuelle</p>

                            <p>&euro; 60,00 taxes incluses</p>

                            <div className="spaceBloc10px"></div>

                            <section className="quantityAndOrder">
                                <h3>Quantité</h3>
                                <div className="quantity quantity2">
                                    <button type="button" className="decrease"></button>
                                    <input type="number" className="quantityOrdered" value="1" readonly></input>
                                    <button type="button" className="increase"></button>
                                </div>
                                <button type="button" className="orderNow">Acheter maintenant</button>
                            </section>

                        </section>

                    </div>

                    <div className="dropDownContainer">

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/size.svg"} alt="logo composition et fabrication"></img>
                                <span>&nbsp;Dimension</span>
                            </button>
                            <div className="detail item1">
                                <br></br>Taille 50x50 cm<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/location.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Fabrication</span>
                            </button>
                            <div className="detail item2">
                                <br></br>Imprimé en France FR<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/print.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Impression</span>
                            </button>
                            <div className="detail item3">
                                <br></br>Impression à plat directement Dibond(fines plaques d'aluminium) avec des encres 100%
                                écologiques et
                                en haute définition. Cette oeuvre est fabriquée avec 2 accroches aux dos pour pouvoir
                                l'exposer
                                directement sur son mur.<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/padlock.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Design exclusif</span>
                            </button>
                            <div className="detail item4">
                                <br></br>Nous attendons la fin du ZEVENT PLACE pour réaliser l'impression de cette oeuvre
                                disponible
                                uniquement sur la boutique ZEvent.<br></br><br></br>
                            </div>
                        </div>

                    </div>

                    <div className="articleDetails">
                        <a href="" className="link">Afficher les détails&nbsp;</a>
                        <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="icône direction"></img>
                    </div>

                </article>

                <article>
                    <h2>Trophée numéroté ZEnd 2022</h2>

                    <div className="articleBloc1">

                        <div className="carousel">
                            <div className="slide slide1"><img src={process.env.PUBLIC_URL + "/images/plaque.webp"}
                                    alt="Tshirt ZEvent photo1"></img></div>
                            <div className="slide slide2"><img src={process.env.PUBLIC_URL + "/images/plaque-details.webp"}
                                    alt="Tshirt ZEvent photo2"></img></div>
                            <div className="slide slide1"><img src={process.env.PUBLIC_URL + "/images/plaque.webp"}
                                    alt="Tshirt ZEvent photo1"></img></div>
                        </div>


                        <section className="articlePreOrder">

                            <h3>ZEvent 2022</h3>

                            <p>&euro; 175,00 taxes incluses</p>

                            <div className="spaceBloc70px"></div>

                            <section className="quantityAndOrder">
                                <h3>Quantité</h3>
                                <div className="quantity quantity3">
                                    <button type="button" className="decrease"></button>
                                    <input type="number" className="quantityOrdered" value="1" readonly></input>
                                    <button type="button" className="increase"></button>
                                </div>
                                <button type="button" className="orderNow">Acheter maintenant</button>
                            </section>

                        </section>

                    </div>

                    <div className="dropDownContainer">

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/delivery.svg"} alt="logo composition et fabrication"></img>
                                <span>&nbsp;Délais de livraison</span>
                            </button>
                            <div className="detail item1">
                                <br></br>Début des expéditions prévu à partir du 28 septembre.<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/size.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Dimension</span>
                            </button>
                            <div className="detail item2">
                                <br></br>La plaque mesure 18 x 13 cm<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/label.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Mise en panier</span>
                            </button>
                            <div className="detail item3">
                                <br></br>Tirage numéroté et limité à 3 000 exemplaires (limité à 1 exemplaire par
                                commande)<br></br><br></br>
                            </div>
                        </div>

                        <div className="dropDownItem">
                            <button className="button">
                                <img src={process.env.PUBLIC_URL + "/images/location.svg"} alt="logo Délais de livraison"></img>
                                <span>&nbsp;Fabrication</span>
                            </button>
                            <div className="detail item4">
                                <br></br>Ce produit est fabriqué sur-mesure en Italie<br></br><br></br>
                            </div>
                        </div>

                    </div>

                    <div className="articleDetails">
                        <a href="" className="link">Afficher les détails&nbsp;</a>
                        <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="icône direction"></img>
                    </div>

                </article>

            </section>

            <div className="endPageContainer">

                <div className="associationCardContainer">

                    <section className="associationCard">

                        <div className="containerImg">
                            <img src={process.env.PUBLIC_URL + "/images/sea-sheperd.webp"} alt="sea Sheperd assosiation"></img>
                        </div>
                        <h3>Sea Sheperd</h3>

                        <div className="infosAss">

                            <p>Défend activement l'océan et toutes les formes de vie marines depuis 1977.</p>

                            <div className="infosPlus">
                                <a href="" className="link">En savoir plus</a>&nbsp;
                                <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="icône direction"></img>
                            </div>
                        </div>
                    </section>

                    <section className="associationCard">

                        <div className="containerImg">
                            <img src={process.env.PUBLIC_URL + "/images/lpo.webp"} alt="lpo assosiation"></img>
                        </div>
                        <h3>LPO</h3>

                        <div className="infosAss">

                            <p>La LPO oeuvre au quotidien pour la protection des oiseaux et de l'ensemble du vivant.</p>

                            <div className="infosPlus">
                                <a href="" className="link">En savoir plus</a>&nbsp;
                                <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="icône direction"></img>
                            </div>
                        </div>

                    </section>
                    <section className="associationCard">

                        <div className="containerImg">
                            <img src={process.env.PUBLIC_URL + "/images/wwf.webp"} alt="sea Sheperd assosiation"></img>
                        </div>

                        <h3>WWF</h3>

                        <div className="infosAss">

                            <p>Travaille dans plus de 100 pays pour protéger la planète, la nature et tous ses êtres
                                vivant.</p>

                            <div className="infosPlus">
                                <a href="" className="link">En savoir plus</a>&nbsp;
                                <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="icône direction"></img>
                            </div>
                        </div>
                    </section>

                    <section className="associationCard">

                        <div className="containerImg">
                            <img src={process.env.PUBLIC_URL + "/images/the-seacleaners.webp"} alt="sea Sheperd assosiation"></img>
                        </div>

                        <h3>Sea Cleaners</h3>

                        <div className="infosAss">

                            <p>Lutte contre la pollution plastique des océans grâce à des actions à terre et en mer</p>

                            <div className="infosPlus">
                                <a href="" className="link">En savoir plus</a>&nbsp;
                                <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="icône direction"></img>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="helpCardContainer">
                    <div className="helpCard">
                        <h3>Besoin d'aide ?</h3>
                        <div className="helpDetail">
                            <p>Consultez notre FAQ, la réponse à votre question s'y trouve certainement !</p>
                            <p>Pour toute autre question, contactez-nous via le chat situé en bas à droite :</p>
                            <a href="">Consultez la FAQ</a>
                        </div>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/images/help.webp"} alt="Help web"></img>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <section className="topFooter">

                <div className="lineOne">

                    <section className="shop">
                        <h3>Shop</h3>
                        <p>Mentions légales</p>
                        <p>Condition générales de ventes</p>
                        <p>Politique de confidentialité</p>
                    </section>

                    <section className="footerCenter">
                        <p>The SeaCleaners - Sea Shepherd - LPO - WWF</p>
                        <p>Votre générosité nous permet de soutenir et contribuer</p>
                        <p>aux actions de ces associations! Merci à vous
                            <img src={process.env.PUBLIC_URL + "/images/icons8-coeurs-24.png"} alt="logo coeur"></img>
                        </p>
                    </section>

                    <div className="ZeventLogo">
                        <img src={process.env.PUBLIC_URL + "/images/zevent-logo.webp"} alt="ZEvent logo"></img>
                    </div>
                </div>

                <div className="lineTwo">
                    <a href="">
                        <img src={process.env.PUBLIC_URL + "/images/square-twitter.svg"} alt="tweeter"></img>
                    </a>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + "/images/square-instagram.svg"} alt="instagram"></img>
                    </a>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + "/images/square-reddit.svg"} alt="reddit"></img>
                    </a>
                </div>

            </section>

            <section className="bottomFooter">

                <div className="creditCard">
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + "/images/american-express.svg"} alt="american express"></img>
                    </div>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + "/images/appel-pay.svg"} alt="apple pay"></img>
                    </div>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + "/images/mastercard.svg"} alt="mastercard"></img>
                    </div>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + "/images/visa.svg"} alt="visa"></img>
                    </div>
                </div>
                <div className="copyright">
                    <p>Zevent 2022</p>
                </div>

            </section>

        </footer>
    </div>
    <script src="../scripts/burgerMenu.js"></script>
    <script src="../scripts/boutique.js"></script>
    </>
   )                                                                                                                      
  }

export default Boutique
                        