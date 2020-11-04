export default class Router {
    constructor(links) {
        this.slot = document.getElementById("api__content");
        this.links = links;
        this.listen();
    }

    forward(path) {
        window.history.pushState({path}, document.title, path);
    }

    // back(){
    //     console.log(this.history);
    //     this.history.pop();
    //     let path = this.history.length ? this.history[length - 1] : "main";
    //     window.history.replaceState({path}, document.title, path)
    //     this.updateState(path)
    // } //зачем и когда использовать back??

    async updateState(path) {
        if(path === "/") path = "main"
        const id = path.replace(/\D/g,"") // числа из path
        const pathCheck = path.replace(/[\d\/]/g,"") //path без чисел и слэшей
        if(!this.links[pathCheck]) throw Error("404")
        this.slot.innerHTML = await this.links[pathCheck](id)
    }

    listen() {
        this.previousHash = window.location.pathname;
        this.updateState(this.previousHash)
        setInterval(() => this.interval(), 50);
    }

    interval() {
        let currentHash = window.location.pathname;

        if(this.previousHash !== currentHash) {
            this.previousHash = currentHash;
            console.log("new hash")
            // this.updateState(currentHash)
        } 
        return
    }
}
