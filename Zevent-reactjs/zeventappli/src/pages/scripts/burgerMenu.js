
// Traitement du menu Burger du header

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
