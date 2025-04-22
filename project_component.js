// project.js

document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        projects:[
        {title:"2XKO Progression", role:"UX"},
        {title:"2XKO Player Profile", role:"UX | Implementation"},
        ]
    }))
});

class ProjectView extends HTMLElement {

    constructor() {
        super();
        this.title = '';
        this.role = '';
    };

    connectedCallback() {

        if (this.hasAttribute('title')) this.title = this.getAttribute('name');
        if (this.hasAttribute('role')) this.role = this.getAttribute('role');
        this.render();
    };

    render() {
        this.innerHTML = `
            <div class="project">
                <img class="project"src="./images/meee.png" width="100" height="100">
                <h3 class="project" x-text="${this.title}"></h3>
                <p id="project-title" x-text="${this.role}"></p>
            </div>
        `;
    };

    static get observedAttributes() { return ['title', 'role']; }

	attributeChangedCallback(title, oldValue, newValue) {
		this[title] = newValue;
		this.render();
	}
    
};

if(!customElements.get('project-view')) customElements.define('project-view', ProjectView);