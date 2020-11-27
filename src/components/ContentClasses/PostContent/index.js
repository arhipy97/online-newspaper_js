import Content from "../../base_classes/Content"
import Manager from "../../base_classes/Manager"
import router from "../../utils/router"
import "./styles.scss"

class PostObj extends Content {
    constructor({title, body}) {
        super();
        this.instance = {title, body}
    }
}

class PostContent extends Manager {
    constructor() {
        super();
    }

    async render(path) {  
        const HTML = await this.assambleHTML(path)

        this.putInContainer(HTML) 

        function btnHandler(event) {
            router.forward(`${event.currentTarget.getAttribute("path")}`);
        }

        this.addClickListeners(".refferToMain", btnHandler)
    }

    async assambleHTML(path) {
        const response = await this.fetch(path)
        return new PostObj(response).createItem(buildPostTemplate)
    }
}



function buildPostTemplate({title, body}) {
    return `<div class="post">
                    <h1 class="post__title">${title}</h1>
                    <p class="post__body">${body}</p>
                    <div class="buttons">
                        <button class="refferToMain" path="/">main page</button>
                    </div>
                </div> 
                <div class="comments"></div>         
        `
}

export default new PostContent()
