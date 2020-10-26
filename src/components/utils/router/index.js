export default class Router {
    constructor(instance, slotId) {
        this.slot = document.getElementById(`${slotId}`);
        this.instance = instance;
        this.history = [];
    }

    forward(path) {
        this.history.push(path)
        window.history.pushState({path}, document.title, path);
        this.updateState(path)
    }

    back(){
        this.history.pop();
        let path = this.history.length ? this.history[length - 1] : "main";
        window.history.replaceState({path}, document.title, path)
        this.updateState(path)
    }

    updateState(path) {
        if(!this.instance[path]) throw Error("404")
        this.slot.innerHTML = this.instance[path](+/\d+/.exec(path))
        if (path !== "main") window.scrollTo(0, 0)
    }
}

