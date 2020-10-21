export default class API_WRAPPER{
    constructor(instance) {
        this.api = instance;
    }
    
    getStoreValue(field) {
        return this.api.getStoreValue(field)
    }

    getResource(path) {
        return this.api.getResource(path)
    }

    render () {
        throw Error("Need template!")
    }
}