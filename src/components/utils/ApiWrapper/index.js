export default class ApiWrapper{
    constructor(instance) {
        this.api = instance;
    }
    
    getStoreValue(field) {
        return this.api.getStoreValue(field)
    }

    getResource(path) {
        return this.api.getResource(path)
    }
}