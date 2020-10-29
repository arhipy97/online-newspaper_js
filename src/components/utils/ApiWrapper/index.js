export default class ApiWrapper{
    constructor(instance) {
        this.api = instance;
    }

    get(path) {
        return this.api.get(path)
    }

    put(obj) {
        return this.api.put(obj)
    }
}