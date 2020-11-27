import api from "../../utils/ApiWrapper"

export default class Manager {
    response = [];

    constructor() {
        this.containerId = "api__content";  
    };

    async fetch(path) {
        if(!path) return
        return await api.get(path);
    }

    putInContainer(html) {
        document.getElementById(this.containerId).innerHTML = html
    }

    addClickListeners(selector, callback) {
        document.querySelectorAll(selector).forEach((item) => {	    
            item.addEventListener("click", callback, {once: true})
        })
    }
}