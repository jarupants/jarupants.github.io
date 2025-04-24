let project = document.querySelector("project-item");

const projectArray = [
    { title: '2XKO: Progression', role: 'UX', img: './images/logo_2xko.png' },
    { title: '2XKO: <br>Player Profile', role: 'Full Stack', img: './images/logo_2xko.png' },
    { title: '2XKO: Postmatch', role: 'UX', img: './images/logo_2xko.png' },
    { title: '2XKO: <br>Lobby', role: 'UI', img: './images/logo_2xko.png' },
    { title: 'Pool Party: Music Player', role: 'UX', img: './images/logo_riot.jpg' },
    { title: 'Fortnite Festival', role: 'UX | UI', img: './images/logo_fn.jpg' },
]

projectArray.forEach(value => {
    const currentElement = document.createElement("a");
    currentElement.innerHTML = `
        <div class="project">
            <img class="project" src=${value.img} width="100" height="100">
            <h3 class="project">${value.title}</h3>
            <hr style="width:100%;height:1px;border-top:#009A7E;color:#009A7E;background-color:#009A7E;border-left:#009A7E;border-right:#009A7E;"></hr>
            <p id="project-role">${value.role}</p>
        </div> 
    `;
    project.before(currentElement);
})
       
