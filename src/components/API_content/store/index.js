export default class Store {
    constructor() {
        this.data = {}
    }

    addTo(field, value) {
        this.data[field] = value;
    }

    getItem(field) {
        return this.data[field]
    }
}