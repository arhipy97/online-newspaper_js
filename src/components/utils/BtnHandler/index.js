import comments from "../../API_content/commentLayout"

export default class BtnHandler {
    constructor(elem, router, api) {
        this._elem = elem
        elem.onclick = this.onClick.bind(this)
        this.router = router;
        this.api = api;
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

    submitForm(event) {
        const textArea = document.getElementById("commentValue")
        if (textArea.value === null || textArea.value === "") {
            return alert("Fill up this form and press 'Submit'.")
        }
        // this.api.post()
        // router.updateState(event.state.path)
    }

    resetForm() {
        document.getElementById("commentValue").value = "";
    }
}