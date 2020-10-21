const BACKEND_BASE_PATH = 'https://jsonplaceholder.typicode.com/'

export default class FetchAPI {
    constructor() {
        this.__state = {};
        // this.callbacks = [];
    }

    getStoreValue(field) {
        // console.log("+++");
        // console.log(this.__state[field])
        // console.log("++");
        return this.__state[field];
    }

    getResource = async (path) => {
        let response = await fetch(`${BACKEND_BASE_PATH}${path}`);
        let array = await response.json()
        this.__state[`${path}`] = array;
        return this.__state[`${path}`]
    }

    // attach(callback) {
    //     this.callbacks.push(callback)
    //     return this;
    // }

    // detach(callback) {
    //     this.callbacks = this.callbacks.filter((callb) => callb !== callback);
    //     return this;
    // }

    // commit() {
    //     this.callbacks.forEach((el) => el(this.__state))
    //     return this;
    // }
}
