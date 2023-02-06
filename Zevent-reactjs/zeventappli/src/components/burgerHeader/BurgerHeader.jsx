import React from "react";
import './burgerHeader.css';

function BurgerHeader() {

    // Traitement du menu Burger du header
    React.useEffect(() => {

        if (document.querySelector('.burgerContainer button'))
        // Si un <button> dans un <div class="burgerContainer"> existe fait ce code 
        {
            // Sélectionne le <button> dans la <div class="burgerContainer"> 
            const button = document.querySelector('.burgerContainer button');

            // sélectionne la <div class="navLineTop"> (la liste de navigation du header)
            const menuList = document.querySelector('.navLineTop');


            button.addEventListener('click', () => {

                /* 
                Au click, ajoute ou supprime la classe "active" de la liste.
                Si la classe "active" est présente, supprime la
                Si la classe "active" n'est pas là, ajoute la.
                */
                menuList.classList.toggle('active');

                // Au click, ajoute ou supprime la classe "active" du bouton burger.
                // Si la classe "active" est présente (Icone fermeture)
                //    on la supprime pour afficher l'icone du burger
                // Si la classe "active" est absente (Icon burger affiché)
                //    on la supprime pour afficher l'icone de fermeture
                button.classList.toggle('active');
            })
        }
    })
    
    return (
        <>
        
        </>      
    )
}

export default BurgerHeader