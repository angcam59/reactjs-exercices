import React from 'react'
import './boutique.css'
import Header from '../components/header/Header'


function Boutique() {
  return (
    <>
    <div class="container">
        <header>
            <div class="banner">
                <p>Nous vous invitons à faire attention à la taille que vous choisissez lors du passage de votre
                    commande</p>
            </div>

            <Header />

                <div class="panier">
                    <a href="#"><img src="../ressources/images/cart.svg" alt="Logo panier"></img></a>
                </div>

                <div class="burgerContainer">
                    <button class="burgerIcon">
                        
                    </button>
                </div>
            

            <div class="logo">
                <img src="../ressources/images/zevent-logo.webp" alt="Logo ZEvent"></img>
            </div>
            <nav class="navLineBottom">
                <ul>
                    <li><a href=""><img src="../ressources/images/square-twitter.svg" alt="Logo twitter"></img></a></li>
                    <li><a href=""><img src="../ressources/images/square-instagram.svg" alt="Logo instagram"></img></a></li>
                    <li><a href=""><img src="../ressources/images/square-reddit.svg" alt="Logo reditt"></img></a></li>
                </ul>
            </nav>
        </header>


        <main>
            
            <h1><img src="../ressources/images/shop-banner.webp" alt="ZEvent Achetez votre Tshirt"></img></h1>
           

            <section class="allArticlesContainer">
                <article>
                    <h2>Tee-shirt Bio - officiel ZEnd 2022</h2>

                    <div class="articleBloc1">

                        <div class="carousel">
                            <div class="slide slide1"><img src="../ressources/images/tshirt.webp"
                                    alt="Tshirt ZEvent photo1"></img></div>
                            <div class="slide slide2"><img src="../ressources/images/tshirt-details.webp"
                                    alt="Tshirt ZEvent photo2"></img></div>
                            <div class="slide slide1"><img src="../ressources/images/tshirt.webp"
                                    alt="Tshirt ZEvent photo1"></img></div>
                        </div>


                        <section class="articlePreOrder">

                            <h3>Précommande</h3>

                            <p>&euro; 26,00 taxes incluses</p>

                            <h3>Tailles</h3>

                            <section class="size">

                                <p>Sélectionnez une taille</p>

                                <div class="selectSize">
                                    <div class="inputSize">
                                        <input type="radio" name="selectedSize" class="radioButton" id="sizeXS">
                                        <label class="labelSize" for="sizeXS">XS</label>
                                    </div>
                                    <div class="inputSize">
                                        <input type="radio" name="selectedSize" class="radioButton" id="sizeS">
                                        <label class="labelSize" for="sizeS">S</label>
                                    </div>
                                    <div class="inputSize">
                                        <input type="radio" name="selectedSize" class="radioButton" id="sizeM">
                                        <label class="labelSize" for="sizeM">M</label>
                                    </div>
                                    <div class="inputSize">
                                        <input type="radio" name="selectedSize" class="radioButton" id="sizeL">
                                        <label class="labelSize" for="sizeL">L</label>
                                    </div>
                                    <div class="inputSize">
                                        <input type="radio" name="selectedSize" class="radioButton" id="sizeXL">
                                        <label class="labelSize" for="sizeXL">XL</label>
                                    </div>
                                    <div class="inputSize">
                                        <input type="radio" name="selectedSize" class="radioButton" id="sizeXXL">
                                        <label class="labelSize" for="sizeXXL">XXL</label>
                                    </div>
                                    <div class="inputSize">
                                        <input type="radio" name="selectedSize" class="radioButton" id="sizeXXXL">
                                        <label class="labelSize" for="sizeXXXL">XXXL</label>
                                    </div>
                                </div>

                            </section>

                            <section class="quantityAndOrder">
                                <h3>Quantité</h3>
                                <div class="quantity quantity1">
                                    <button type="button" class="decrease"></button>
                                    <input type="number" class="quantityOrdered" value="1" readonly>
                                    <button type="button" class="increase"></button>
                                </div>
                                <button type="button" class="orderNow">Acheter maintenant</button>
                            </section>

                        </section>

                    </div>

                    <div class="dropDownContainer">

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/leaf.svg" alt="logo composition et fabrication"></img>
                                <span>&nbsp;Composition et Fabrication</span>
                            </button>
                            <div class="detail item1">
                                <br>100% coton biologique - 170g<br><br>
                                Ce tee-shirt est certifié Oeko-Tex Standard 100, Fairwear, GOTS, PETA Approved
                                vegan<br><br>
                                Nous sommes convaincus, comme vous, qu'il est important d'avoir de la transparence et
                                une traçabilité sur les produits que nous achetons. Merci d'avoir cliqué pour en savoir
                                plus.<br><br>
                                Les t-shirts sont fabriqués en coton bio et ont reçu le label GOTS. Ils ont été montés
                                dans des usines labellisées FairWear au Bengladesh puis imprimés dans un atelier GOTS à
                                Bidart en France.<br><br>
                                Si vous voulez en savoir plus sur notre partenaire Stanley Stella qui produit nos
                                tee-shirts noirs, vous pouvez aller sur ce site : &nbsp;<a href=""
                                    class="link">stanleystalla.com</a> &nbsp;ou télécharger leur<br>
                                <a href="" class="link">Social Report 2021</a><br><br>
                                Pour en savoir plus sur le label GOTS :&nbsp; <a href=""
                                    class="link">labelinfo.be</a><br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/delivery.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Délais de livraison</span>
                            </button>
                            <div class="detail item2">
                                <br>Les t-shirt seront expédiés à partir du 3 Octobre.<br><br>
                                Le planning de production des produits de la boutique ZEvent est consultable &lt;<a
                                    href="" class="link">ici</a>&gt;<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/size.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Taille</span>
                            </button>
                            <div class="detail item3">
                                <br>Ce t-shirt est unisexe !<br><br>
                                Pour les hommes : prenez votre taille habituelle<br><br>
                                Pour les femmes : prenez une taille en dessous<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/wash.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Lavage</span>
                            </button>
                            <div class="detail item4">
                                <br>Laver à 30°C retourné. Ne pas mettre au sèche-linge. Repasser à l'envers.<br><br>
                            </div>
                        </div>

                    </div>

                    <div class="articleDetails">
                        <a href="" class="link">Afficher les détails&nbsp;</a>
                        <img src="../ressources/images/arrow.svg" alt="icône direction"></img>
                    </div>

                </article>

                <article>
                    <h2>ZEvent Place - Tirage sur Dibond</h2>

                    <div class="articleBloc1">

                        <div class="carousel">
                            <div class="slide slide1"><img src="../ressources/images/zplace.webp"
                                    alt="Tshirt ZEvent photo1"></img></div>
                            <div class="slide slide2"><img src="../ressources/images/zplace-details.webp"
                                    alt="Tshirt ZEvent photo2"></img></div>
                            <div class="slide slide1"><img src="../ressources/images/zplace.webp"
                                    alt="Tshirt ZEvent photo1"></img></div>
                        </div>


                        <section class="articlePreOrder">

                            <h3>Précommande</h3>

                            <p>Photo non contarctuelle</p>

                            <p>&euro; 60,00 taxes incluses</p>

                            <div class="spaceBloc10px"></div>

                            <section class="quantityAndOrder">
                                <h3>Quantité</h3>
                                <div class="quantity quantity2">
                                    <button type="button" class="decrease"></button>
                                    <input type="number" class="quantityOrdered" value="1" readonly>
                                    <button type="button" class="increase"></button>
                                </div>
                                <button type="button" class="orderNow">Acheter maintenant</button>
                            </section>

                        </section>

                    </div>

                    <div class="dropDownContainer">

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/size.svg" alt="logo composition et fabrication"></img>
                                <span>&nbsp;Dimension</span>
                            </button>
                            <div class="detail item1">
                                <br>Taille 50x50 cm<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/location.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Fabrication</span>
                            </button>
                            <div class="detail item2">
                                <br>Imprimé en France FR<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/print.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Impression</span>
                            </button>
                            <div class="detail item3">
                                <br>Impression à plat directement Dibond(fines plaques d'aluminium) avec des encres 100%
                                écologiques et
                                en haute définition. Cette oeuvre est fabriquée avec 2 acrroches aux dos pour pouvoir
                                l'exposer
                                directement sur son mur.<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/padlock.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Design exclusif</span>
                            </button>
                            <div class="detail item4">
                                <br>Nous attendons la fin du ZEVENT PLACE pour réaliser l'impression de cette oeuvre
                                disponible
                                uniquement sur la boutique ZEvent.<br><br>
                            </div>
                        </div>

                    </div>

                    <div class="articleDetails">
                        <a href="" class="link">Afficher les détails&nbsp;</a>
                        <img src="../ressources/images/arrow.svg" alt="icône direction"></img>
                    </div>

                </article>

                <article>
                    <h2>Trophée numéroté ZEnd 2022</h2>

                    <div class="articleBloc1">

                        <div class="carousel">
                            <div class="slide slide1"><img src="../ressources/images/plaque.webp"
                                    alt="Tshirt ZEvent photo1"></img></div>
                            <div class="slide slide2"><img src="../ressources/images/plaque-details.webp"
                                    alt="Tshirt ZEvent photo2"></img></div>
                            <div class="slide slide1"><img src="../ressources/images/plaque.webp"
                                    alt="Tshirt ZEvent photo1"></img></div>
                        </div>


                        <section class="articlePreOrder">

                            <h3>ZEvent 2022</h3>

                            <p>&euro; 175,00 taxes incluses</p>

                            <div class="spaceBloc70px"></div>

                            <section class="quantityAndOrder">
                                <h3>Quantité</h3>
                                <div class="quantity quantity3">
                                    <button type="button" class="decrease"></button>
                                    <input type="number" class="quantityOrdered" value="1" readonly>
                                    <button type="button" class="increase"></button>
                                </div>
                                <button type="button" class="orderNow">Acheter maintenant</button>
                            </section>

                        </section>

                    </div>

                    <div class="dropDownContainer">

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/delivery.svg" alt="logo composition et fabrication"></img>
                                <span>&nbsp;Délais de livraison</span>
                            </button>
                            <div class="detail item1">
                                <br>Début des expéditions prévu à partir du 28 septembre.<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/size.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Dimension</span>
                            </button>
                            <div class="detail item2">
                                <br>La plaque mesure 18 x 13 cm<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/label.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Mise en panier</span>
                            </button>
                            <div class="detail item3">
                                <br>Tirage numéroté et limité à 3 000 exemplaires (limité à 1 exemplaire par
                                commande)<br><br>
                            </div>
                        </div>

                        <div class="dropDownItem">
                            <button class="button">
                                <img src="../ressources/images/location.svg" alt="logo Délais de livraison"></img>
                                <span>&nbsp;Fabrication</span>
                            </button>
                            <div class="detail item4">
                                <br>Ce produit est fabriqué sur-mesure en Italie<br><br>
                            </div>
                        </div>

                    </div>

                    <div class="articleDetails">
                        <a href="" class="link">Afficher les détails&nbsp;</a>
                        <img src="../ressources/images/arrow.svg" alt="icône direction"></img>
                    </div>

                </article>

            </section>

            <div class="endPageContainer">

                <div class="associationCardContainer">

                    <section class="associationCard">

                        <div class="containerImg">
                            <img src="../ressources/images/sea-sheperd.webp" alt="sea Sheperd assosiation"></img>
                        </div>
                        <h3>Sea Sheperd</h3>

                        <div class="infosAss">

                            <p>Défend activement l'océan et toutes les formes de vie marines depuis 1977.</p>

                            <div class="infosPlus">
                                <a href="" class="link">En savoir plus</a>&nbsp;
                                <img src="../ressources/images/arrow.svg" alt="icône direction"></img>
                            </div>

                    </section>
                    <section class="associationCard">

                        <div class="containerImg">
                            <img src="../ressources/images/lpo.webp" alt="lpo assosiation"></img>
                        </div>
                        <h3>LPO</h3>

                        <div class="infosAss">

                            <p>La LPO oeuvre au quotidien pour la protection des oiseaux et de l'ensemble du vivant.</p>

                            <div class="infosPlus">
                                <a href="" class="link">En savoir plus</a>&nbsp;
                                <img src="../ressources/images/arrow.svg" alt="icône direction"></img>
                            </div>

                    </section>
                    <section class="associationCard">

                        <div class="containerImg">
                            <img src="../ressources/images/wwf.webp" alt="sea Sheperd assosiation"></img>
                        </div>

                        <h3>WWF</h3>

                        <div class="infosAss">

                            <p>Travaille dans plus de 100 pays pour protéger la planète, la nature et tous ses êtres
                                vivant.</p>

                            <div class="infosPlus">
                                <a href="" class="link">En savoir plus</a>&nbsp;
                                <img src="../ressources/images/arrow.svg" alt="icône direction"></img>
                            </div>

                    </section>
                    <section class="associationCard">

                        <div class="containerImg">
                            <img src="../ressources/images/the-seacleaners.webp" alt="sea Sheperd assosiation"></img>
                        </div>

                        <h3>Sea Cleaners</h3>

                        <div class="infosAss">

                            <p>Lutte contre la pollution plastique des océans grâce à des actions à terre et en mer</p>

                            <div class="infosPlus">
                                <a href="" class="link">En savoir plus</a>&nbsp;
                                <img src="../ressources/images/arrow.svg" alt="icône direction"></img>
                            </div>

                    </section>
                </div>

                <div class="helpCardContainer">
                    <div class="helpCard">
                        <h3>Besoin d'aide ?</h3>
                        <div class="helpDetail">
                            <p>Consultez notre FAQ, la réponse à votre question s'y trouve certainement !</p>
                            <p>Pour toute autre question, contactez-nous via le chat situé en bas à droite :</p>
                            <a href="">Consultez la FAQ</a>
                        </div>
                    </div>
                    <div>
                        <img src="../ressources/images/help.webp" alt="Help web"></img>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <section class="topFooter">

                <div class="lineOne">

                    <section class="shop">
                        <h3>Shop</h3>
                        <p>Mentions légales</p>
                        <p>Condition générales de ventes</p>
                        <p>Politique de confidentialité</p>
                    </section>

                    <section class="footerCenter">
                        <p>The SeaCleaners - Sea Shepherd - LPO - WWF</p>
                        <p>Votre générosité nous permet de soutenir et contribuer</p>
                        <p>aux actions de ces associations! Merci à vous
                            <img src="../ressources/images/icons8-coeurs-24.png" alt="logo coeur"></img>
                        </p>
                    </section>

                    <div class="ZeventLogo">
                        <img src="../ressources/images/zevent-logo.webp" alt="ZEvent logo"></img>
                    </div>
                </div>

                <div class="lineTwo">
                    <a href="">
                        <img src="../ressources/images/square-twitter.svg" alt="tweeter"></img>
                    </a>
                    <a href="">
                        <img src="../ressources/images/square-instagram.svg" alt="instagram"></img>
                    </a>
                    <a href="">
                        <img src="../ressources/images/square-reddit.svg" alt="reddit"></img>
                    </a>
                </div>

            </section>

            <section class="bottomFooter">

                <div class="creditCard">
                    <div class="img">
                        <img src="../ressources/images/american-express.svg" alt="american express"></img>
                    </div>
                    <div class="img">
                        <img src="../ressources/images/appel-pay.svg" alt="apple pay"></img>
                    </div>
                    <div class="img">
                        <img src="../ressources/images/mastercard.svg" alt="mastercard"></img>
                    </div>
                    <div class="img">
                        <img src="../ressources/images/visa.svg" alt="visa"></img>
                    </div>
                </div>
                <div class="copyright">
                    <p>Zevent 2022</p>
                </div>

            </section>

        </footer>
    </div>
    </>
   )                                                                                                                      
  }

export default Boutique
                        