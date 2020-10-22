class Store {
    constructor() {
        this._store = {}
    }

    addTo(field, data) {
        this._store[field] = data;
    }

    getField(field) {
        return this._store[field]
    }
}

export default new Store()

// this.__state[`${path}`] = array;
        //  this.__state[`${path}`]