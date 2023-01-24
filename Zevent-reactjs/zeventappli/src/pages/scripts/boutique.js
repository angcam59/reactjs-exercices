
// Gestion des boutons qui permettent de sélectionner la quantité d'articles désirée
if (document.querySelector('.quantity'))
/* Si une div <div class="quantity"> existe fait ce code */ 
{
    
    /* Sélectionne tous les <button> "+" dans <div class="quantity"> en les mettant dans un tableau */
    const buttonsTabIncrease = document.querySelectorAll('.quantity button.increase');

    /* Sélectionne tous les <button> "-" dans <div class="quantity"> en les mettant dans un tableau */
    const buttonsTabDecrease = document.querySelectorAll('.quantity button.decrease');

    /* Sélectionne toutes les quantités dans <input class="numberQte"> en les mettant dans un tableau */
    const qte = document.querySelectorAll('.quantity input.quantityOrdered');

    for (let i = 0; i < buttonsTabIncrease.length; i++) {
        /* 
            buttonsTab[0] équivaut au bouton "+"
            Écoute l'événement au click qui se fait sur ce bouton et enclenche la fonction callback (fonction appelé par une autre fonction)
            addEventListener('nom événément', fonction callback) 
        */
        buttonsTabIncrease[i].addEventListener
        ('click', () => {

                // au click on incrémente la quantité jusque 20 et on revient à 1

                if (qte[i].value < 20) {
                    qte[i].value++;
                } else if (qte[i].value = 20) {
                    qte[i].value = 1;
                }
        })

        /* 
            buttonsTab[0] équivaut au bouton "-"
            Écoute l'événement au click qui se fait sur ce bouton et enclenche la fonction callback (fonction appelé par une autre fonction)
            addEventListener('nom événément', fonction callback) 
        */
        buttonsTabDecrease[i].addEventListener
        ('click', () => {
    
                // au click on décrémente la quantité jusque 1
    
                if (qte[i].value > 1) {
                    qte[i].value--;
                }
        })
    }
}



// ******************************************************************************
// Gestion des dropdows d'un article

if (document.querySelector('.dropDownContainer'))
/* Si une div <div class="dropDownContainer"> existe fait ce code */ {
    
    /* Sélectionne tous les <button> dans <div class="dropDownContainer"> en les mettant dans un tableau */
    const buttonsTab = document.querySelectorAll('.dropDownContainer .dropDownItem button');

    /* Sélectionne toutes les <div> dans <div class="dropDownContainer"> en les mettant dans un tableau */
    const detailTab = document.querySelectorAll('.dropDownContainer .dropDownItem div');

    /* 
        Un tableau en javascript commence à l'index 0
        On crée une boucle qui va incrémenter la variable i depuis 0
        Et va boucler autant de fois qu'il y a d'éléments 
        Pour connaître le nombre d'élément on se sert de la longueur (length) du tableau
        buttonsTab.length ici vaut 4, la boucle s'effectue donc 4 fois
        Donc i vaudra 0 puis 1 puis 2 puis 3
        i++ = ajoute 1 à i à chaque fin de boucle 
        for(valeur départ, condition, incrémente valeur départ)
    */
    for (let i = 0; i < buttonsTab.length; i++) {
        /* 
            buttonsTab[0] équivaut au bouton "Composition et fabrication"
            Écoute l'événement au click qui se fait sur ce bouton et enclenche la fonction callback (fonction appelé par une autre fonction)
            addEventListener('nom événément', fonction callback) 
        */
        buttonsTab[i].addEventListener
        ('click', () => {
                /* 
                    tabs[0] équivaut à <div class="tab1"> 
                    ! = l'inverse de
                    Si l'attribut class de tab1 ne contient pas la classe "active" fait le code 
                */
                if (!detailTab[i].classList.contains('active')) {
                    /* ajoute la classe "active" sur tab[0] donc tab1 */
                    detailTab[i].classList.add('active');
                }
                else {
                    /* retire la classe "active" sur tab[0] donc tab1 */
                    detailTab[i].classList.remove('active');
                }

        })
    }
}
