import React from "react";
import './mouseFunctions.css';

function MouseFunctions() {
    // const [isLoaded, setLoaded] = React.useState(false)

    // React.useEffect(() => {
    //     const baliseScript = document.createElement("script")
    //     baliseScript.src = "./pages/scripts/mouseFuntions.js"
    //     baliseScript.addEventListener("load", () => setLoaded(true))
    //     document.body.appendChild(baliseScript)
    // }, [])

    React.useEffect(() => {
        // if (isLoaded) {
          // Remplacement de l'icône du lien "Faire un don" lorsqu'on passe la souris dessus
          // Une icône de couleur verte est affichée au passage de la souris
          document.getElementById("donate").addEventListener("mouseover", mouseOverDonate);
          document.getElementById("donate").addEventListener("mouseout", mouseOutDonate);

          function mouseOverDonate() {
              document.getElementById("donImage").setAttribute('src','./images/icons8-hand-holding-heart-vert.png');
          }

          function mouseOutDonate() {
              document.getElementById("donImage").setAttribute('src','./images/icons8-hand-holding-heart-blanc.png');
          }

          // Remplacement de l'icône du lien "La boutique" lorsqu'on passe la souris dessus
          // Une icône de couleur verte est affichée au passage de la souris
          document.getElementById("shop").addEventListener("mouseover", mouseOverShop);
          document.getElementById("shop").addEventListener("mouseout", mouseOutShop);

          function mouseOverShop() {
            document.getElementById("caddieImage").setAttribute('src','./images/icons8-caddie-64-vert.png');
          }

          function mouseOutShop() {
            document.getElementById("caddieImage").setAttribute('src','./images/icons8-caddie-64-blanc.png');
          }
        }
      // }, [isLoaded]
      )

    return (
        <>
        </>      
    )
}

export default MouseFunctions