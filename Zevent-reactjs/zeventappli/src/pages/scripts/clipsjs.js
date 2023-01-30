/* Ciblage de la <section> */
const section = document.querySelector('.containerAllClips');

/* Création de l'objet Element */
class Element {
    /* L'objet recevra 6 paramètres, le nombre de vues de la vidéo, la date et l'heure, l'url de l'image du streamer,
       le texte alternatif de l'image, le titre de la vidéo et le nom du Streamer */
    constructor(nbView, dateHour, urlImage, altText, h4Text, streamerName) {
            this.nbViewParam = nbView,
            this.dateHourParam = dateHour,
            this.urlImageParam = urlImage,
            this.altTextParam = altText,
            this.h4TextParam = h4Text,
            this.streamerNameParam = streamerName
    }

    /* Méthode qui crée l'article */
    createClip() {
        /* Création de l'élément <article> */
        const article = document.createElement('article');

        /*********************************************** */
        /* Création de l'élément <a> */
        const linkDescription = document.createElement('a');

        /* Ajout de l'attribut href qui reçoit un url */
        linkDescription.setAttribute('href', '  ');

        /* Le container <a> est ajouté en enfant à l'article */
        article.appendChild(linkDescription);

        /*********************************************** */
        /* Création de la <div class="clip"> qui contiendra la video */
        const containerVideo = document.createElement('div');
        containerVideo.setAttribute('class','clip');

        linkDescription.appendChild(containerVideo);

            /* Création de la balise <video> enfant de <div class="clip" */
            const mavideo = document.createElement('video');

            mavideo.setAttribute('controls','');

            containerVideo.appendChild(mavideo);

        /*********************************************** */
        /* Création de la <div class="infos"> qui contiendra les infos de la video */
        const containerInfos = document.createElement('div');
        containerInfos.setAttribute('class','infos');

        /* Le container <div class="infos"> est ajouté en enfant au lien a */
        linkDescription.appendChild(containerInfos);

            /* Création de la <div class="nbView"> enfant de <div class="infos"> */
            const containerNbView = document.createElement('div');
            containerNbView.setAttribute('class','nbView');

            /* Le container <div class="nbView"> est ajouté en enfant à <div class="infos" */
            containerInfos.appendChild(containerNbView);

                /* Création du paragraphe du nombre de vues */
                const nbView = document.createElement('p');

                /* Ajout du texte du paragraphe, via le paramètre de l'objet */
                nbView.innerHTML = this.nbViewParam;

                /* le paragraphe <p> est ajouté en enfant à <div class="nbView" */
                containerNbView.appendChild(nbView);
            
            /* Création de la <div class="dateHour"> enfant de <div class="infos"> */
            const containerDateHour = document.createElement('div');
            containerDateHour.setAttribute('class','dateHour');

            /* Le container <div class="dateHour"> est ajouté en enfant à <div class="infos" */
            containerInfos.appendChild(containerDateHour);

            /* Création du paragraphe de la date et l'heure */
                const dateHour = document.createElement('p');

                /* Ajout du texte du paragraphe, via le paramètre de l'objet */
                dateHour.innerHTML = this.dateHourParam;

                /* le paragraphe <p> est ajouté en enfant à <div class="nbView" */
                containerDateHour.appendChild(dateHour);

        
        /******************************************************** */
        /* Création de la <div class="videoTitle"> qui contiendra les infos de la video */
        const containerVideoTitle = document.createElement('div');
        containerVideoTitle.setAttribute('class','videoTitle');

        /* Le container <div> est ajouté en enfant au lien a */
        linkDescription.appendChild(containerVideoTitle);

            /* Création de la balise image enfant de <div class="videoTitle" */
            const imgImage = document.createElement('img');

            /* Ajout de l'attribut src qui reçoit un url */
            imgImage.setAttribute('src', this.urlImageParam);

            /* Ajout de l'attribut alt qui recoit un texte descriptif de l'image */
            imgImage.setAttribute('alt', `image du stramer : ${this.altTextParam}`);

            /* L'image est ajoutée en enfant de la div <div class="videoTitle"> */
            containerVideoTitle.appendChild(imgImage);

            /* Création du titre <h4> enfant de <div class="videoTitle" */
            const h4Text = document.createElement('h4');
        
            /* Ajout du texte du titre H4, via le paramètre de l'objet */
            h4Text.innerHTML = this.h4TextParam;

            /* Le titre h4 est ajouté en enfant de la <div class="videoTitle"> */
            containerVideoTitle.appendChild(h4Text);

 
        /******************************************************** */
        /* Création de la <div class="streamerName"> qui contiendra le nom du Streamer */
        const containerStreamerName = document.createElement('div');
        containerStreamerName.setAttribute('class','streamerName')

        /* Le container <div class="streamerName"> est ajouté en enfant au lien a */
        linkDescription.appendChild(containerStreamerName);

            /* Création du paragraphe du nom du streamer */
            const streamerName = document.createElement('p');

            /* Ajout du texte du paragraphe, via le paramètre de l'objet */
            streamerName.innerHTML = this.streamerNameParam;

            /* le paragraphe <p> est ajouté en enfant à <div class="streamerName" */
            containerStreamerName.appendChild(streamerName);


        /* La méthode renvoie l'ensemble des données de l'article */
        return article;

        /*
            <section class="containerAllClips">
                    
                <article>
                        <a href="">
                            <div class="clip">
                                <video controls loop>
                                </video>
                            </div>
                            <div class="infos">
                                <div class="nbView">
                                    <p>1 000 0000 Vues</p>
                                </div>
                                <div class="dateHour">
                                    <p>01/01/2022 à 01:00:00</p>
                                </div>
                            </div>
                            <div class="videoTitle">
                                <img src="/ressources/images/mister-mv.webp" alt="image mister-mv">
                                <h4>bigard + alien = ALLAALLALALA (+flop d'étoiles)</h4>
                            </div>
                            <div class="streamerName">
                                <p>Nom Streamer - Activité</p>
                            </div>
                        </a>
                    </article>

            </section>
        */
    }
}

/* Création des différents articles  Element(nbView, dateHour, title) */

const clip1 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'bigard + alien = ALLAALLALALA (+flop d étoiles)',
                          'Nom Streamer - Activité').createClip();

const clip2 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 2','Nom Streamer - Activité').createClip();

const clip3 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 3','Nom Streamer - Activité').createClip();
const clip4 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 4','Nom Streamer - Activité').createClip();
const clip5 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 5','Nom Streamer - Activité').createClip();
const clip6 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 6','Nom Streamer - Activité').createClip();
const clip7 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 7','Nom Streamer - Activité').createClip();
const clip8 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 8','Nom Streamer - Activité').createClip();
const clip9 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 9','Nom Streamer - Activité').createClip();
const clip10 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 10','Nom Streamer - Activité').createClip();
const clip11 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 11','Nom Streamer - Activité').createClip();
const clip12 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 12','Nom Streamer - Activité').createClip();
const clip13 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 13','Nom Streamer - Activité').createClip();
const clip14 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 14','Nom Streamer - Activité').createClip();
const clip15 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 15','Nom Streamer - Activité').createClip();
const clip16 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 16','Nom Streamer - Activité').createClip();
const clip17 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 17','Nom Streamer - Activité').createClip();
const clip18 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 18','Nom Streamer - Activité').createClip();
const clip19 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 19','Nom Streamer - Activité').createClip();
const clip20 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 20','Nom Streamer - Activité').createClip();
const clip21 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 21','Nom Streamer - Activité').createClip();
const clip22 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 22','Nom Streamer - Activité').createClip();
const clip23 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 23','Nom Streamer - Activité').createClip();
const clip24 = new Element('1 000 000 Vues','01/01/2022 à 01:00:00','../ressources/images/mister-mv.webp',
                          'image mister-mv', 'Titre Video 24','Nom Streamer - Activité').createClip();


                          /* Ajout de chaque article dans un tableau */
const tabArticle =
    [
       clip1, clip2, clip3, clip4, clip5,
       clip6, clip7, clip8, clip9, clip10,
       clip11, clip12, clip13, clip14, clip15,
       clip16, clip17, clip18, clip19, clip20,
       clip21, clip22, clip23, clip24
    ]

/* On ajoute chaque <article> contenu dans le tableau à la <section> ciblée plus haut */
tabArticle.forEach(article => {
    section.appendChild(article);
});
