import Content from "../../base_classes/ContentRenderClass"
import api from "../../utils/ApiWrapper"

class PhotoContent extends Content {
    constructor({ url, title, id}) {
        this.instance = { url, title, id}
    }
}