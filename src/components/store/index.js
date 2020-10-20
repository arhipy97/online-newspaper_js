class EventIniter {
    constructor() {
        this._apiBase = 'https://jsonplaceholder.typicode.com/';
        this.__state = {};
        this.callbacks = [];
    }

    getValue(field) {
        return this.__state[field];
    }

    getResource = async (resource) => {
        const res = await fetch(`${this._apiBase}${resource}`);
        await res.json()
            .then((json) => {
                this.__state[`${resource}`] = json;
            });
        return this
    }

    attach(callback) {
        this.callbacks.push(callback)
        return this;
    }

    detach(callback) {
        this.callbacks = this.callbacks.filter((callb) => callb !== callback);
        return this;
    }

    commit() {
        this.callbacks.forEach((el) => el(this.__state))
        return this;
    }
}


export default new EventIniter();