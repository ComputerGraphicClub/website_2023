const menuIcon = document.querySelector('.menu-trigger');
const leftMenu = document.querySelector('.left-menu');

var mobileMenuPosition = document.querySelector('.left-menu');
 mobileMenuPosition.style.right = '-100vw';

document.addEventListener("DOMContentLoaded", function() {
    var contentText = document.querySelector(".content-text");
  
    // Ajouter un gestionnaire d'événements pour arrêter la propagation du défilement
    contentText.addEventListener("scroll", function(event) {
      event.stopPropagation();
    });
  
    // Ajouter un gestionnaire d'événements pour détecter le défilement de la souris
    window.addEventListener("wheel", function(event) {
      // Vérifier si le curseur est sur la div "content-text"
      var isOnContentText = event.target.closest(".content-text") !== null;
  
      // Bloquer le défilement global si le curseur est sur la div "content-text"
      if (isOnContentText) {
        event.preventDefault();
      }
    });



  });

  menuIcon.addEventListener('click', function () {
    //   leftMenu.style.display = leftMenu.style.display === 'none' ? 'flex' : 'none';
      leftMenu.style.right = leftMenu.style.right === '-100vw' ? '0' : '-100vw';
    });
  
  