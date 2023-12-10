const menuIcon = document.querySelector('.menu-trigger');
const leftMenu = document.querySelector('#left-menu');
const sectionBox = document.querySelectorAll('.content-section');
const dropDowntMenu = document.querySelectorAll('.dropdown-content');
const logoImg = document.querySelector('.logo');


const navBg = document.querySelector('#nav-bg');
const nav = document.querySelector('nav');
const navHomeGradiant = document.querySelector('.home-gradient-top');
let h = window.innerHeight -60;
let hHomeGradient = window.innerHeight/2;

let mobileDeviceWidth = window.matchMedia("(max-width: 600px)");


var mobileMenuPosition = document.querySelector('#left-menu');
 mobileMenuPosition.style.right = '-50vw';

 for (let i = 0; i < sectionBox.length; i++) {
 sectionBox[i].style.filter = "blur(0px)";
 }


 ////////////////////////////////////////////////////
 /// Enable scroll text inside ScrollSnap section ///
 ////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var contentText = document.querySelector(".content-text-scroll");
  
    // Ajouter un gestionnaire d'événements pour arrêter la propagation du défilement
    contentText.addEventListener("scroll", function(event) {
      event.stopPropagation();
    });
  
    // Ajouter un gestionnaire d'événements pour détecter le défilement de la souris
    window.addEventListener("wheel", function(event) {
      // Vérifier si le curseur est sur la div "content-text"
      var isOnContentText = event.target.closest(".content-text-scroll") !== null;
  
      // Bloquer le défilement global si le curseur est sur la div "content-text"
      if (isOnContentText) {
        event.preventDefault();
      }

  


//////////////////////////////////////////
/// Change menu style when scroll down ///
//////////////////////////////////////////

// Desktop


let elemHome = document.querySelector("#content-section-home");
let clikedLink = document.querySelector(".dropdown-content p");
let rectHome = elemHome.getBoundingClientRect();

if (mobileDeviceWidth.matches) {
  if (rectHome.top < -h || document.documentElement.top < -h) { 
  
    navBg.style.opacity = "0.95";
    dropDowntMenu[0].style.backgroundColor = "rgba(0,0,0,0)"
    dropDowntMenu[1].style.backgroundColor = "rgba(0,0,0,0)"
    dropDowntMenu[2].style.backgroundColor = "rgba(0,0,0,0)"
    logoImg.style.width = "50px";
    logoImg.style.top = "6px";
  } else {
    leftMenu.style.marginTop = "0px";
    navBg.style.opacity = "0";
    dropDowntMenu[0].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[1].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[2].style.backgroundColor = "rgba(46, 40, 34,0)"
    logoImg.style.width = "240px";
    logoImg.style.top = "6px";
  }
}

else {
  if (rectHome.top < -h || document.documentElement.top < -h) { 
    leftMenu.style.marginTop = "6px";
    navBg.style.opacity = "0.95";
    dropDowntMenu[0].style.backgroundColor = "rgba(0,0,0,0.85)"
    dropDowntMenu[1].style.backgroundColor = "rgba(0,0,0,0.85)"
    dropDowntMenu[2].style.backgroundColor = "rgba(0,0,0,0.85)"
    logoImg.style.width = "65px";
    logoImg.style.top = "-12px";
  } else {
    leftMenu.style.marginTop = "20px";
    navBg.style.opacity = "0";
    dropDowntMenu[0].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[1].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[2].style.backgroundColor = "rgba(46, 40, 34,0)"
    logoImg.style.width = "280px";
    logoImg.style.top = "10px";
  }
}

    
       
    
      if (document.body.scrollTop > hHomeGradient || document.documentElement.scrollTop > hHomeGradient) {
        navHomeGradiant.style.opacity = "0";
      } else {
        navHomeGradiant.style.opacity = "1";
      }

    });

  });

 


 

////////////////////////////////////////////////////
////////////////// Mobile menu open-close //////////
///////////////////////////////////////////////////

  menuIcon.addEventListener('click', function () {
    //   leftMenu.style.display = leftMenu.style.display === 'none' ? 'flex' : 'none';
      leftMenu.style.right = leftMenu.style.right === '-50vw' ? '0' : '-50vw';
      if (mobileDeviceWidth.matches) {
      for (let i = 0; i < sectionBox.length; i++) {
      sectionBox[i].style.filter = sectionBox[i].style.filter === 'blur(0px)' ? 'blur(10px)' : 'blur(0px)';
      }
    }
   
    });


  
////////////////////////////////////////////////////
/// Disable view on landscape mobile orientation ///
////////////////////////////////////////////////////


let portrait = window.matchMedia("(orientation: portrait)");

portrait.addEventListener("change", function (e) {

 
    const displayOnLandscape = document.querySelectorAll('#landscape-msg');

    if (e.matches) {
        console.log("portrait");
        displayOnLandscape[0].style.display = "none";


    } else {
        console.log("landscape");
        displayOnLandscape[0].style.display = "flex";
    }
})

///////////////////////////////////////
/// Get correct mobile screen height ///
////////////////////////////////////////


const setHeight = () => {
  document.getElementById("content-area").style.height = window.innerHeight + "px";
  document.getElementById("left-menu").style.height = "calc(" + window.innerHeight + "px - 78px)";

  for (let i = 0; i < document.getElementsByClassName("content-text-scroll").length; i++) {
    document.getElementsByClassName("content-text-scroll")[i].style.paddingTop = "calc(" + window.innerHeight + "px * 0.55)";
    document.getElementsByClassName("content-text-scroll")[i].style.height = window.innerHeight + "px";
  }

  for (let i = 0; i < document.getElementsByClassName("content-image").length; i++) {
    document.getElementsByClassName("content-image")[i].style.height = "calc(" + window.innerHeight + "px * 0.50 - 78px)";
 }

  for (let i = 0; i < document.getElementsByClassName("content-text").length; i++) {
    document.getElementsByClassName("content-text")[i].style.height = window.innerHeight + "px";
  }



  window.setTimeout(setHeight, 5);
};

let deviceWidth = window.matchMedia("(max-width: 600px)");

if (deviceWidth.matches) {

  window.addEventListener("resize", setHeight);

  setHeight();
}


///////////////////////////////////////////////
/// Change menu design on menu button click ///
///////////////////////////////////////////////

const ButtonClick = document.getElementsByClassName("main-menu-button");
for (let i = 0; i < ButtonClick.length; i++) {
  ButtonClick[i].onclick = function() {onMainMenuButtonClick()};
}

function onMainMenuButtonClick() {
  if (mobileDeviceWidth.matches) {
    navBg.style.opacity = "0.95";
    dropDowntMenu[0].style.backgroundColor = "rgba(0,0,0,0)"
    dropDowntMenu[1].style.backgroundColor = "rgba(0,0,0,0)"
    dropDowntMenu[2].style.backgroundColor = "rgba(0,0,0,0)"
    logoImg.style.width = "50px";
    logoImg.style.top = "6px";
  } else {
    leftMenu.style.marginTop = "6px";
    navBg.style.opacity = "0.95";
    dropDowntMenu[0].style.backgroundColor = "rgba(0,0,0,0.85)"
    dropDowntMenu[1].style.backgroundColor = "rgba(0,0,0,0.85)"
    dropDowntMenu[2].style.backgroundColor = "rgba(0,0,0,0.85)"
    logoImg.style.width = "65px";
    logoImg.style.top = "-12px";
  }

  navHomeGradiant.style.opacity = "0";

  menuIcon.click();

}

const subButtonClick = document.getElementsByClassName("sub-button");
for (let i = 0; i < subButtonClick.length; i++) {
subButtonClick[i].onclick = function() {onSubButtonClick()};
}

function onSubButtonClick() {
  if (mobileDeviceWidth.matches) {
    navBg.style.opacity = "0.95";
    dropDowntMenu[0].style.backgroundColor = "rgba(0,0,0,0)"
    dropDowntMenu[1].style.backgroundColor = "rgba(0,0,0,0)"
    dropDowntMenu[2].style.backgroundColor = "rgba(0,0,0,0)"
    logoImg.style.width = "50px";
    logoImg.style.top = "6px";
  } else {
    leftMenu.style.marginTop = "6px";
    navBg.style.opacity = "0.95";
    dropDowntMenu[0].style.backgroundColor = "rgba(0,0,0,0.85)"
    dropDowntMenu[1].style.backgroundColor = "rgba(0,0,0,0.85)"
    dropDowntMenu[2].style.backgroundColor = "rgba(0,0,0,0.85)"
    logoImg.style.width = "65px";
    logoImg.style.top = "-12px";
  }

  navHomeGradiant.style.opacity = "0";

  menuIcon.click();

}

document.getElementById("logo-button").onclick = function() {onLogoButtonClick()};

function onLogoButtonClick() {
  if (mobileDeviceWidth.matches) {
    leftMenu.style.marginTop = "0px";
    navBg.style.opacity = "0";
    dropDowntMenu[0].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[1].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[2].style.backgroundColor = "rgba(46, 40, 34,0)"
    logoImg.style.width = "240px";
    logoImg.style.top = "6px";
  } else {
    leftMenu.style.marginTop = "20px";
    navBg.style.opacity = "0";
    dropDowntMenu[0].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[1].style.backgroundColor = "rgba(46, 40, 34,0)"
    dropDowntMenu[2].style.backgroundColor = "rgba(46, 40, 34,0)"
    logoImg.style.width = "280px";
    logoImg.style.top = "10px";
  }

  navHomeGradiant.style.opacity = "1";
}


