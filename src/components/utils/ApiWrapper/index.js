export default class ApiWrapper{
    constructor(instance) {
        this.api = instance;
    }

    get(path) {
        return this.api.get(path)
    }

    post(id, value) {
        return this.api.post(id, value)
    }
}