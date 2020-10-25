export default class Router {
    constructor(instance, slotId) {
        this.slot = document.getElementById(`${slotId}`);
        this.instance = instance;
        this.history = [];
    }

    forward(path) {
        this.history.push(path)
        window.history.pushState(null, document.title, path);
        if(!this.instance[path]) throw Error("404")
        this.updateState(path)
    }

    back(){
        let path = this.history.pop();
        window.history.replaceState(null, document.title, path)
        let asd = !!this.history.length ? this.history[length - 1]: "main"
        console.log(asd);
        this.updateState(asd)
    }

    updateState(path) {
        this.slot.innerHTML = this.instance[path](+/\d+/.exec(path))
        if (path !== "main") window.scrollTo(0, 0)
    }
}

