import Content from "../../base_classes/Content"
import Manager from "../../base_classes/Manager"
import router from "../../utils/router"
import "./styles.scss"

class SidePhotoObj extends Content {
    constructor({ url, title, id}) {
        super();
        this.instance = { url, title, id }
    }
}

class SidePhotoContent extends Manager {
    constructor() {
        super();
        this.containerId = "side__news";  
    }

    async render() {
        const HTML = await this.assambleHTML()
        this.putInContainer(HTML)

        function btnHandler(event) {
            router.forward(`${event.currentTarget.getAttribute("path")}`);
        }

        this.addClickListeners(".left-side__content-item", btnHandler)
    }

    async assambleHTML() {
        const response = await this.fetch("/photos")
        return response.slice(0,10).reverse().reduce((acc, photo) => {         
            return acc + new SidePhotoObj(photo).createItem(buildSidePhotoTemplate)
        },"")
    }

    addClickListeners(selector, callback) {
        document.querySelectorAll(selector).forEach((item) => {	    
            item.addEventListener("click", callback)
        })
    }
}

function buildSidePhotoTemplate({url, title, id}) {
    return `<div  class="left-side__content-item" path="/posts/${id}">
                <img class="left-side-content__img" src="${url}" alt="picture">
                <div class="left-side-content__text">
                    <p class="title" data-action="renderArticle">Lorem ipsum dolor sit amet.</p>
                    <p class="subtitle">${title}</p>
                </div>
            </div>
            `
}

export default new SidePhotoContent