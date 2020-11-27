import Content from "../../base_classes/Content"
import Manager from "../../base_classes/Manager"
import router from "../../utils/router"
import localStorage from "../../utils/localStorage"
import api from "../../utils/ApiWrapper"
import navigator from "../../utils/Navigator"
import "./styles.scss"

class CommentsObj extends Content {
    constructor({ name, email, body }) {
        super();
        this.instance = { name, email, body }
    }
}

class CommemtsContent extends Manager {
    constructor() {
        super();
    }

    async render(path) {  
        const HTML = await this.assambleHTML(path) + formHTML(path)

        this.putInContainer(HTML)

        async function submitForm(event) {
            const textArea = document.getElementById("commentValue")
            if (textArea.value === null || textArea.value === "") {
                return alert("Fill up this form and press 'Submit'.")
            }
            const newPost = await api.post(event.target.id, textArea.value)
            localStorage.putComments(path, newPost[0]) 
            navigator.render(path)
        }

        function resetForm() {
            document.getElementById("commentValue").value = "";
        }
        
        document.querySelector(".submitForm").addEventListener("click", submitForm)
        document.querySelector(".resetForm").addEventListener("click", resetForm)
    }

    async assambleHTML(path) {
        const response = await this.fetch(`${path}/comments`)
        const allComments = response.concat(localStorage.getComments(path))
        return allComments.reduce((acc, comment) => {         
            return acc + `${new CommentsObj(comment).createItem(buildCommentTemplate)}`
        },"")
    }

    putInContainer(html) {
        document.getElementById(this.containerId).insertAdjacentHTML("beforeend", html)
    }
}

function buildCommentTemplate({ name, email, body }) {
    return `<div class="comment">
                    <div class="user_info">
                        <div class="user_name">
                            <p>${name}</p>
                        </div>
                        <div calss=""user_email>
                            <p>${email}</p>
                        </div>
                    </div>
                    <div class="user_body">
                        <p class="article__title">${body}</p>
                    </div>
                </div>
                `
}

function formHTML (path) {
    return `
    <div class="commentInput" data-action="submit">
        <textarea name="comment" cols="40" rows="3" id="commentValue"></textarea>
        <div class="comments__buttons">
            <button class="submitForm" id="${path}">submit</button>
            <button class="resetForm">reset</button>
        </div>
    </div>
    `
}

export default new CommemtsContent()