// javascript.js

// Gradient change

function changeGradient(category) {
    var bgGradient = document.querySelector('body');
    switch(category) {
        case "home":
            bgGradient.style.background = "radial-gradient(circle at center 80%, rgba(242,40,40,1.0) 0%, rgba(242,40,40,1.0) 17%, rgba(255,87,76,1.0) 35%, rgba(255,105,105,1.0) 44%, rgba(255,248,241,1.0) 75%) no-repeat";
            console.log("home");
            break;
        case "resume":
            bgGradient.style.background = "radial-gradient(circle at center 80%, rgba(56,40,242,1.0) 0%, rgba(129,40,242,1.0) 17%, rgba(176,76,255,1.0) 35%, rgba(198,105,255,1.0) 44%, rgba(255,248,241,1.0) 75%) no-repeat";
            console.log("resume");
            break;
        case "about":
            bgGradient.style.background = "radial-gradient(circle at center 80%, rgba(242,125,40,1.0) 0%, rgba(242,149,40,1.0) 17%, rgba(255,162,76,1.0) 35%, rgba(255,177,105,1.0) 44%, rgba(255,248,241,1.0) 75%) no-repeat";
            console.log("about");
            break;
        default:
            bgGradient.style.background = "radial-gradient(circle at center 80%, rgba(242,40,40,1.0) 0%, rgba(242,40,40,1.0) 17%, rgba(255,87,76,1.0) 35%, rgba(255,105,105,1.0) 44%, rgba(255,248,241,1.0) 75%) no-repeat";
            console.log("default");
            break;
    }
}

// About active toggle

var aboutButton = document.querySelector("#aboutButton");
var aboutList = document.querySelectorAll(".about-sidebar");
var menuButton = document.querySelector("#resumeButton");
var homeButton = document.querySelector("#homeButton");

var sidebar = document.querySelector("#resume-sidebar");
var title1 = document.querySelector("#titleline1");
var title2 = document.querySelector("#titleline2");
var title3 = document.querySelector("#titleline3");
let isAboutActive = false;
let isSidebarActive = false;
let isHomeActive = false;
let isHomeActivatable = false;

function setHomeButtonOnLoad() {
    homeButton.className = "on";
}

document.addEventListener("DOMContentLoaded", setHomeButtonOnLoad);

function setActive(Object) {
    isHomeActive = false;
    Object.toggleAttribute("active");
    Object.style.display = "flex";
}

function setInactive(Object) {
    Object.toggleAttribute("active");
    Object.style.display = "none";
}

function setAboutHeight() {
    if (isAboutActive == true) {
        aboutList.forEach(setActive);
        title1.style.display = "none";
        title2.style.display = "none";
        title3.style.display = "none";
        changeGradient("about");
        aboutButton.className = "on";
        homeButton.className = "menu";
    } else if (isAboutActive == false) {
        aboutList.forEach(setInactive);
        title1.style.display = "inline";
        title2.style.display = "inline";
        title3.style.display = "inline";
        aboutButton.className = "menu";
    }
}

function setAboutState() {
        isAboutActive = !isAboutActive;
        setAboutHeight();
    
        isSidebarActive = false;
        setSidebarWidth();

        isHomeActive = !isAboutActive;
        isHomeActivatable = false;
        setHomeState();

        isHomeActivatable = !isHomeActive;
}

aboutButton.addEventListener("click", setAboutState);

// Sidebar active toggle

function setSidebarWidth() {
    if (isSidebarActive == true) {
        sidebar.style.maxWidth = "400px";
        setActive(sidebar);
        changeGradient("resume");
        menuButton.className = "on";
        homeButton.className = "menu";
    } else if (isSidebarActive == false) {
        sidebar.style.maxWidth = "0px";
        setInactive(sidebar);
        menuButton.className = "menu";
    }
}

function setSidebarState() {
    isSidebarActive = !isSidebarActive;
    setSidebarWidth();

    isAboutActive = false;
    setAboutHeight();

    isHomeActive = !isSidebarActive;
    isHomeActivatable = false;
    setHomeState();

    isHomeActivatable = !isHomeActive;
}

menuButton.addEventListener("click", setSidebarState);


// Home reset

function setHomeState() {
    
    if (isHomeActive == true) {

    changeGradient("home");
    homeButton.className = "on";

    isAboutActive = false;
    isSidebarActive = false;

    setAboutHeight();
    setSidebarWidth();

    isHomeActivatable = false;

    } else if (isHomeActivatable == true) {

        isHomeActive = true;

        changeGradient("home");
        homeButton.className = "on";

        isAboutActive = false;
        isSidebarActive = false;

        setAboutHeight();
        setSidebarWidth();

        isHomeActivatable = false;
    }
}

homeButton.addEventListener("click", setHomeState,);

