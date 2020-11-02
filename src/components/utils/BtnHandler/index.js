import comments from "../../API_content/commentLayout"

export default class BtnHandler {
    constructor(elem, router, api, localStorage) {
        this._elem = elem
        elem.onclick = this.onClick.bind(this)
        this.router = router;
        this.api = api;
        this.localStorage = localStorage;
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

    async submitForm(event) {
        const textArea = document.getElementById("commentValue")
        if (textArea.value === null || textArea.value === "") {
            return alert("Fill up this form and press 'Submit'.")
        }
        let newPost = await this.api.post(event.target.id, textArea.value)
        this.localStorage.putComments(newPost[0].postId, newPost[0]) //[0] потому что  отправляю в массива, тк без него получаю хуйню
        this.router.updateState(`post${event.target.id}`)
    }

    resetForm() {
        document.getElementById("commentValue").value = "";
    }
}