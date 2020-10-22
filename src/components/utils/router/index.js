export default class Router {
    constructor(instance) {
        this.slot = document.querySelector(".articles");
        this._history = [];
        this.instance = instance;
    }

    forward(path, query = {}) {
        this._history.push(path);
        window.history.pushState(query, document.title, path);
        
        if(!this.instance[path.substring(1)]) throw Error("404")
        this.instance[path.substring(1)]()
    }

    back(){
        let path = this._history.pop();
        window.history.replaceState(query = {}, document.title, path)
    }
}

