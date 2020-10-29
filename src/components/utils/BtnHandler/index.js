import comments from "../../API_content/commentLayout"

export default class BtnHandler {
    constructor(elem, router) {
        this._elem = elem
        elem.onclick = this.onClick.bind(this)
        this.router = router
    }

    renderArticle(event) {
        this.router.forward(`post${event.target.id}`)
    }

    renderMain() {
        this.router.forward(`main`)
    }

    onClick(event) {
        let action = event.target.dataset.action
        if(action) {
            this[action](event)
        }
    }
}