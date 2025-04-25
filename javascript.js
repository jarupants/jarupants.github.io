// Variables ---------------------------------------------------------------------------------



var aboutButton = document.querySelector("#aboutButton");
var aboutList = document.querySelectorAll("#about");

var resumeButton = document.querySelector("#resumeButton");
var workButton = document.querySelector("#workButton");
var homeButton = document.querySelector("#homeButton");

var activePage;
var sidebarContainer = document.querySelector("#sidebar-container");

var resumeSidebar = document.querySelector("#resume");
var workSidebar = document.querySelector("#work");

var title1 = document.querySelector("#titleline1");
var title2 = document.querySelector("#titleline2");
var title3 = document.querySelector("#titleline3");

let isAboutActive = false;
let isSidebarActive = false;
let isHomeActive = false;
let isHomeActivatable = false;



// Gradient change ---------------------------------------------------------------------------------



function changeGradient(category) {

    var bg = document.querySelector('body');

    switch(category) {
        case "home":
            bg.style.setProperty('--gradColor1', 'rgba(242,40,40,1.0)');
            bg.style.setProperty('--gradColor2', 'rgba(242,40,40,1.0)');
            bg.style.setProperty('--gradColor3', 'rgba(255,87,76,1.0)');
            bg.style.setProperty('--gradColor4', 'rgba(255,105,105,1.0)');
            console.log("home");
            break;
        case "work":
            bg.style.setProperty('--gradColor1', 'rgba(250,65,145,1.0)');
            bg.style.setProperty('--gradColor2', 'rgba(254,79,155,1.0)');
            bg.style.setProperty('--gradColor3', 'rgba(255,115,159,1.0)');
            bg.style.setProperty('--gradColor4', 'rgba(255,137,167,1.0)');
            console.log("work");
            break;
        case "resume":
            bg.style.setProperty('--gradColor1', 'rgba(56,40,242,1.0)');
            bg.style.setProperty('--gradColor2', 'rgba(129,40,242,1.0)');
            bg.style.setProperty('--gradColor3', 'rgba(176,76,255,1.0)');
            bg.style.setProperty('--gradColor4', 'rgba(198,105,255,1.0)');
            console.log("resume");
            break;
        case "about":
            bg.style.setProperty('--gradColor1', 'rgba(242,125,40,1.0)');
            bg.style.setProperty('--gradColor2', 'rgba(242,149,40,1.0)');
            bg.style.setProperty('--gradColor3', 'rgba(255,162,76,1.0)');
            bg.style.setProperty('--gradColor4', 'rgba(255,177,105,1.0)');
            console.log("about");
            break;
        default:
            bg.style.setProperty('--gradColor1', 'rgba(242,40,40,1.0)');
            bg.style.setProperty('--gradColor2', 'rgba(242,40,40,1.0)');
            bg.style.setProperty('--gradColor3', 'rgba(255,87,76,1.0)');
            bg.style.setProperty('--gradColor4', 'rgba(255,105,105,1.0)');
            console.log("default");
            break;
    }
}



// Home button state on load ---------------------------------------------------------------------------------



function setHomeButtonOnLoad() {
    homeButton.className = "on";
}

document.addEventListener("DOMContentLoaded", setHomeButtonOnLoad);



// Active toggle ---------------------------------------------------------------------------------



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



// Sidebar active toggle ---------------------------------------------------------------------------------



function setSidebarWidth() {

    if (isSidebarActive == true) {

        switch(activePage) {

            case "resume":
                changeGradient("resume");
                resumeSidebar.style.width = "30dvw";
                resumeButton.className = "on";
                setActive(resumeSidebar);

                setInactive(workSidebar);
                workButton.className = "menu";

                setActive(sidebarContainer);
                break;
            case "work":
                changeGradient("work");
                workSidebar.style.width = "420px";
                workButton.className = "on";
                setActive(workSidebar);

                setInactive(resumeSidebar);
                resumeButton.className = "menu";

                setActive(sidebarContainer);
                break;
            default:
                break;
        };

        homeButton.className = "menu";

    } else if (isSidebarActive == false) {
        
        setInactive(resumeSidebar);
        setInactive(workSidebar);
        setInactive(sidebarContainer);
        resumeButton.className = "menu";
        workButton.className = "menu";
    }
}

function setSidebarState() {

    setSidebarWidth();

    isAboutActive = false;
    setAboutHeight();

    isHomeActive = !isSidebarActive;
    isHomeActivatable = false;
    setHomeState();

    isHomeActivatable = !isHomeActive;
}

function setActivePage(page) {
    activePage = page;
}

resumeButton.addEventListener("click", function() {
    setActivePage("resume");
    isSidebarActive = true;
    setSidebarState();
    });

workButton.addEventListener("click", function() {
    setActivePage("work");
    isSidebarActive = true;
    setSidebarState();
    });  


    
// Home reset ---------------------------------------------------------------------------------



function setHomeState() {
    
    if (isHomeActive == true) {

    changeGradient("home");
    homeButton.className = "on";
    setActivePage("home");

    isAboutActive = false;
    isSidebarActive = false;

    setAboutHeight();
    setSidebarWidth();

    isHomeActivatable = false;

    } else if (isHomeActivatable == true) {

        isHomeActive = true;

        changeGradient("home");
        homeButton.className = "on";
        setActivePage("home");

        isAboutActive = false;
        isSidebarActive = false;

        setAboutHeight();
        setSidebarWidth();

        isHomeActivatable = false;
    }
}

homeButton.addEventListener("click", setHomeState,);

