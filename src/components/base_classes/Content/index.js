export default class Content {
    createItem(templateCallback) {
        return templateCallback(this.instance);
    }
}