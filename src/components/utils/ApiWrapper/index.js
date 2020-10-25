export default class ApiWrapper{
    constructor(instance) {
        this.api = instance;
    }

    getResource(path) {
        return this.api.getResource(path)
    }

    getResources(arr) {
        return this.api.getResources(arr)
    }

}