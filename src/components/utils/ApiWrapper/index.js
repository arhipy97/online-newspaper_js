export default class ApiWrapper{
    constructor(instance) {
        this.api = instance;
    }

    get(path) {
        return this.api.get(path)
    }

    post(obj) {
        return this.api.post(obj)
    }
}