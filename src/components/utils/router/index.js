export default class Router {
    constructor(links, slotId) {
        this.slot = document.getElementById(`${slotId}`);
        this.links = links;
        this.history = [];
    }

    forward(path) {
        // const path = `${route}${id}`
        this.history.push(path)
        window.history.pushState({path}, document.title, path);
        this.updateState(path) 
    }

    back(){
        console.log(this.history);
        this.history.pop();
        let path = this.history.length ? this.history[length - 1] : "main";
        window.history.replaceState({path}, document.title, path)
        this.updateState(path)
    } //зачем и когда использовать back??

    async updateState(path) {
        const id = parseInt(path.split("").reverse().join(""))
        const pathCheck = path.replace(/\d/g,"") //path без чисел

        if(!this.links[pathCheck]) throw Error("404")

        const HTML = await this.links[pathCheck](id)
        this.slot.innerHTML = HTML
        // if (pathCheck === "post") window.scrollTo(0, 0)
    }
}

