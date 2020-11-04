import localStorage from "../localStorage"
import api from "../ApiWrapper"

export default class BtnHandler {
    constructor(elem, router) {
        this._elem = elem
        elem.onclick = this.onClick.bind(this)
        this.router = router;
    }

    renderArticle(event) {
        this.router.forward(event.target.id)
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
        let newPost = await api.post(event.target.id, textArea.value)
        localStorage.putComments(newPost[0].postId, newPost[0]) //[0] потому что  отправляю в массива, тк без него получаю хуйню
        this.router.updateState(`/post${event.target.id}`)
    }

    resetForm() {
        document.getElementById("commentValue").value = "";
    }
}