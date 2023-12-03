const menuIcon = document.querySelector('.menu-trigger');
const leftMenu = document.querySelector('.left-menu');
const dropDowntMenu = document.querySelectorAll('.dropdown-content');
const logoImg = document.querySelector('.logo');


const navBg = document.querySelector('#nav-bg');
const nav = document.querySelector('nav');
const navHomeGradiant = document.querySelector('.home-gradient-top');
let h = window.innerHeight-60;
let hHomeGradient = window.innerHeight/2;


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

      if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        leftMenu.style.marginTop = "0px";
        navBg.style.opacity = "0.95";
        dropDowntMenu[0].style.backgroundColor = "rgba(46, 40, 34,0.95)"
        dropDowntMenu[1].style.backgroundColor = "rgba(46, 40, 34,0.95)"
        dropDowntMenu[2].style.backgroundColor = "rgba(46, 40, 34,0.95)"
        logoImg.style.width = "65px";
        logoImg.style.top = "-12px";


        // nav.style.backdropFilter = "blur(8px)"
      } else {
        leftMenu.style.marginTop = "20px";
        navBg.style.opacity = "0";
        dropDowntMenu[0].style.backgroundColor = "rgba(46, 40, 34,0)"
        dropDowntMenu[1].style.backgroundColor = "rgba(46, 40, 34,0)"
        dropDowntMenu[2].style.backgroundColor = "rgba(46, 40, 34,0)"
        logoImg.style.width = "280px";
        logoImg.style.top = "10px";


        // nav.style.backdropFilter = "blur(0px)"
      }

      if (document.body.scrollTop > hHomeGradient || document.documentElement.scrollTop > hHomeGradient) {
        navHomeGradiant.style.opacity = "0";
      } else {
        navHomeGradiant.style.opacity = "1";
      }

    });



  });

  menuIcon.addEventListener('click', function () {
    //   leftMenu.style.display = leftMenu.style.display === 'none' ? 'flex' : 'none';
      leftMenu.style.right = leftMenu.style.right === '-100vw' ? '0' : '-100vw';
    });


  
  