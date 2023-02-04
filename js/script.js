/////////////////////////////////
/// Archive Description /////////////
/////////////////////////////////


const archiveButton = document.getElementsByClassName("open-close-button");
const archiveButtonCross = document.getElementsByClassName("cross-button");
const archiveDescription = document.getElementsByClassName("archive-description-layout");
const navBarX = document.getElementsByClassName("navigation-slides");
const sectionTitle = document.getElementsByClassName("section-name");
// const test = document.getElementsByClassName("test");
let archiveButtonState = 0;

// test[0].onclick = () => {console.log("hello")};

// let i = 0;
for (let i = 0; i < archiveButton.length; i++) {

    archiveButton[i].onclick = function () {
        OpenCloseDescription(i)
    };

    function OpenCloseDescription(a) {

        if (archiveButtonState == 0) {
            archiveButtonCross[a].style.transform = "rotate(45deg)";
            archiveDescription[a].style.zIndex = "2";
            archiveDescription[a].style.opacity = "1";
            navBarX[a].style.opacity = "0";
            // sectionTitle[i].style.opacity = "0";
            archiveButtonState = 1;

            if (window.matchMedia("(min-width: 600px)").matches) {
                sectionTitle[a].style.opacity = "0";
            } else {
                sectionTitle[a].style.opacity = "1";
            }

        } else {
            archiveButtonCross[a].style.transform = "rotate(0deg)";
            archiveDescription[a].style.zIndex = "0";
            archiveDescription[a].style.opacity = "0";
            navBarX[a].style.opacity = "1";
            // sectionTitle[i].style.opacity = "1";
            archiveButtonState = 0;

            if (window.matchMedia("(min-width: 600px)").matches) {
                sectionTitle[a].style.opacity = "1";
            } else {
                sectionTitle[a].style.opacity = "1";
            }

        }

    }

}

/////////////////////////////////
/// Issues section /////////////
/////////////////////////////////

const issues = document.querySelectorAll('.issue-name td');
const issuesNav = document.getElementById('navigation-slides-display');
const issuesImage = document.querySelectorAll('.issues > div');
const issuesInfo = document.querySelectorAll('.issue-information');

const infoArray = ["Edition - 24 × 16.5 cm<br>104 pages <span>Download</span>", "Edition - 15.5 × 11 cm<br>144 pages <span>Download</span>", "Term paper - 21 × 14.5 cm<br>58 pages <span>Download</span>", "Term paper - 21 × 14 cm<br>86 pages <span>Download</span>", "Research Paper - A4<br>16 pages <span>Download</span>", "Research Paper - A4<br>6 pages <span>Download</span>"];


for (let i = 0; i < issues.length; i++) {

    issues[i].onclick = () => {
        issues.forEach(el => {
            // el.style.color = "DimGray";
            el.removeAttribute("class");
            issues[i].classList.add('active');
            window.location.href = '#issues-1';
            issuesInfo[0].innerHTML = infoArray[i];
            // issues[i].style.color = "white";
        });

        issuesImage[0].innerHTML = "<img srcset='images/issues/WEBP/" + (i + 1) + ".1.webp',images/issues/WEB/" + (i + 1) + ".1.jpg' />";
        issuesImage[1].innerHTML = "<img srcset='images/issues/WEBP/" + (i + 1) + ".2.webp',images/issues/WEB/" + (i + 1) + ".2.jpg' />";
        issuesImage[2].innerHTML = "<img srcset='images/issues/WEBP/" + (i + 1) + ".3.webp',images/issues/WEB/" + (i + 1) + ".3.jpg' />";
    };

}
;

/////////////////////////////////
/// Contrast Switch /////////////
/////////////////////////////////

const contrastSwitch = document.getElementById('constrast-switch');
const contrastDot1 = document.getElementById('constrast-switch-dot-1');
const contrastDot2 = document.getElementById('constrast-switch-dot-2');

contrastSwitch.onclick = () => {
    contrastSwitch.classList.toggle('dark-mode');


    if (contrastSwitch.classList.contains('dark-mode')) {
        document.body.classList.add('active');
        contrastDot1.style.transform = "translateX(0.75rem)";
        contrastDot2.style.transform = "translateX(-0.75rem)";
    } else {
        document.body.classList.remove('active');
        contrastDot1.style.transform = "translateX(0)";
        contrastDot2.style.transform = "translateX(0)";
    }
};


//////////////////////////////////
// Horizontale Slide Navigation //
/////////////////////////////////

// 1 - Navigation Dot bar for Archives sections

function isInViewportX(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.left >= (-window.innerWidth / 2 || -document.documentElement.clientWidth / 2) &&
        rect.left <= (window.innerWidth / 2 || document.documentElement.clientWidth / 2)
    );
}

const slide = document.querySelectorAll('.new-slides div');
const dot = document.querySelectorAll('.navigation-slides a');

console.log(slide.length);

document.addEventListener('scroll', function (ev) {


    for (let i = 0; i < slide.length; i++) {

        if (isInViewportX(slide[i])) {
            dot[i].classList.add('active');
        } else {
            dot[i].classList.remove('active');
        }

    }

}, true)

// 2 - Navigation Dot bar for Issues section

const slideIssue = document.querySelectorAll('.new-slides-issues div');
const dotIssue = document.querySelectorAll('.navigation-slides-issues a');

if (window.matchMedia("(min-width: 600px)").matches) {

    function isInViewportXissues(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.left >= (window.innerWidth / 4 || document.documentElement.clientWidth / 4) &&
            rect.left <= (window.innerWidth * (3 / 4) || document.documentElement.clientWidth * (3 / 4))
        );
    }

    document.addEventListener('scroll', function (ev) {
        for (let i = 0; i < slideIssue.length; i++) {
            if (isInViewportXissues(slideIssue[i])) {
                dotIssue[i].classList.add('active');
            } else {
                dotIssue[i].classList.remove('active');
            }
        }
    }, true)

} else {
    function isInViewportXissues(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.left >= (-window.innerWidth / 2 || -document.documentElement.clientWidth / 2) &&
            rect.left <= (window.innerWidth / 2 || document.documentElement.clientWidth / 2)
        );
    }

    document.addEventListener('scroll', function (ev) {
        for (let i = 0; i < slideIssue.length; i++) {
            if (isInViewportXissues(slideIssue[i])) {
                dotIssue[i].classList.add('active');
            } else {
                dotIssue[i].classList.remove('active');
            }
        }
    }, true)

}


// 3 - Get correct mobile screen height

const setHeight = () => {
    document.getElementById("archiveYscroll").style.height = window.innerHeight + "px";
    window.setTimeout(setHeight, 5);
};

let deviceWidth = window.matchMedia("(max-width: 1024px)");

if (deviceWidth.matches) {

    window.addEventListener("resize", setHeight);

    setHeight();
}

/////////////////////////////////
/// Mobile orientation //////////
/////////////////////////////////


let portrait = window.matchMedia("(orientation: portrait)");

portrait.addEventListener("change", function (e) {

    const hideOnLandscape = document.querySelectorAll('.landscape-off');
    const correctSize = document.querySelectorAll('.archiveYscroll');
    const displayOnLandscape = document.querySelectorAll('#landscape-msg');

    if (e.matches) {
        console.log("portrait");
        hideOnLandscape[0].style.display = "block";
        hideOnLandscape[1].style.display = "flex";
        hideOnLandscape[2].style.display = "block";
        displayOnLandscape[0].style.display = "none";


    } else {
        console.log("landscape");
        hideOnLandscape[0].style.display = "none";
        hideOnLandscape[1].style.display = "none";
        hideOnLandscape[2].style.display = "none";
        displayOnLandscape[0].style.display = "flex";
    }
})

////////////////////
/// Repère rouge ///
////////////////////

// Vérifier si une section est active (visible)

function isInViewportY(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= (-window.innerHeight / 2 || -document.documentElement.clientHeight / 2) &&
        rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2)
    );
}

// Consulter combien de sections existent

const section = document.querySelectorAll('.new-section');

// Position initial du "repère rouge"
const gradDot = document.querySelector('.graduation-dot');
// let gradDotYPosition = window.innerHeight/(section.length+1);
let gradDotYPosition = (window.innerHeight / (section.length + 3)) * 2;

gradDot.style.top = gradDotYPosition + 'px';
let oldGradDotYPosition = 0;

// Après chaque action de scroll, adapter la position du "repère rouge" à la section active

document.addEventListener('scroll', function (ev) {

    for (let i = 0; i < section.length; i++) {

        if (isInViewportY(section[i])) {
            // gradDotYPosition = ((window.innerHeight/(section.length+1))*(i+1));
            gradDotYPosition = ((window.innerHeight / (section.length + 3)) * (i + 2));

            if (gradDotYPosition != oldGradDotYPosition) {
                console.log('Top = ' + i * 50 + 'px');
                gradDot.style.top = gradDotYPosition + 'px';
            }
            oldGradDotYPosition = gradDotYPosition;
        }
    }
}, true)


/////////////////////////////////
/// Vertical ruler navigation ///
/////////////////////////////////


const sectionNumber = section.length;

function createDivs(num) {

    const containerEl = document.querySelectorAll('.navBarYArea');

    const graduationHeight = window.innerHeight - ((window.innerHeight / (num + 2)) * 2);
    const graduationMargin = window.innerHeight / (num + 2);
    console.log(graduationHeight);

    for (let i = 1; i < num; i++) {

        const mainGraduation = document.createElement("hr");
        mainGraduation.style.width = "8px";
        mainGraduation.style.position = "fixed";
        mainGraduation.style.top = graduationMargin + (graduationHeight / num * i) + "px";
        //mainGraduation.style.top = (window.innerHeight/num * i) + "px";
        mainGraduation.style.left = "10px";
        mainGraduation.style.height = "1px";
        mainGraduation.style.borderWidth = "0";
        mainGraduation.style.backgroundColor = "white";
        mainGraduation.classList.add("gradution-line");
        mainGraduation.style.zIndex = "3";
        containerEl[0].appendChild(mainGraduation);

    }


    for (let i = 5; i < (num * 5) - 4; i++) {

        const subGraduation = document.createElement("hr");
        subGraduation.style.width = "10px";
        subGraduation.style.position = "fixed";
        subGraduation.style.top = graduationMargin + (graduationHeight / (num * 5) * i) + "px";
        // subGraduation.style.top = (window.innerHeight/(num*5) * i) + "px";
        subGraduation.style.left = "0px";
        subGraduation.style.height = "1px";
        subGraduation.style.borderWidth = "0";
        subGraduation.style.backgroundColor = "white";
        subGraduation.classList.add("gradution-line");
        subGraduation.style.zIndex = "3";
        containerEl[0].appendChild(subGraduation);

    }

}

createDivs(sectionNumber + 1);


//////////////////////
/// Live Tracking/////
//////////////////////

function generateRandomFloatInRange(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}

function randomNumber() {
    let additionalValueZ = generateRandomFloatInRange(-0.1, 0.1);
    let additionalValueX = generateRandomFloatInRange(-1, 1);

    let xValue = 5 + additionalValueX;
    let xValueRounded = xValue.toFixed(0);

    let yValue = 4 + additionalValueX;
    let yValueRounded = yValue.toFixed(0);


    let zValue = 1230.31 + additionalValueZ;
    let zValueRounded = zValue.toFixed(2);

    let bpmValue = 86.1 + additionalValueZ;
    let bpmValueRounded = bpmValue.toFixed(1);


    document.getElementById("x-tracking").innerHTML = xValueRounded;
    document.getElementById("y-tracking").innerHTML = yValueRounded;
    document.getElementById("z-tracking").innerHTML = zValueRounded;
    document.getElementById("bpm-tracking").innerHTML = bpmValueRounded;

};

setInterval(randomNumber, 1000);
