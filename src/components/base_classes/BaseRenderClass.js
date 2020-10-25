export default class RenderBase {
    constructor(layout) {
        this.layout = layout;
    }

    render() {
        return this.layout;
    }
}