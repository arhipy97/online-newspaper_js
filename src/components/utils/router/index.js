import navigator from "../Navigator"

class Router {
    constructor() {
        this.slot = document.getElementById("api__content");
        this.listen();
    }

    forward(path) {
        window.history.pushState({ path }, document.title, path);
    }

    // back(){
    //     console.log(this.history);
    //     this.history.pop();
    //     let path = this.history.length ? this.history[length - 1] : "main";
    //     window.history.replaceState({path}, document.title, path)
    //     this.updateState(path)
    // } //зачем и когда использовать back??

    async listen() {
        this.previousHash = window.location.pathname;
        await navigator.render(this.previousHash)
        setInterval(() => this.interval(), 50);
    }

    async interval() {
        let currentHash = window.location.pathname;
        if (this.previousHash !== currentHash) {
            this.previousHash = currentHash;
            await navigator.render(currentHash)
        }
        return
    }
}

export default new Router()
