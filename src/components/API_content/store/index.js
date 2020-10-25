export default class Store {
    constructor(data) {
        this.data = data
    }

    addTo(field, value) {
        this.data[field] = value;
    }

    getItem(field) {
        return this.data[field]
    }
}