const projectArray = [
    { title: 'Project', role: 'UX' },
    { title: 'Project2', role: 'UX2' },
]

class Project extends HTMLElement {
    connectedCallback() {
            this.innerHTML = `
        <div class="project">
            <img class="project"src="./images/meee.png" width="100" height="100">
            <h3 class="project">I'm title</h3>
            <p id="project-title">I'm role</p>
        </div> 
        `;
        }
    }

customElements.define('project-item', Project);
    
