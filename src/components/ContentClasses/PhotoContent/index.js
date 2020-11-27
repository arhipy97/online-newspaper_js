import Content from "../../base_classes/Content"
import Manager from "../../base_classes/Manager"
import router from "../../utils/router"
import "./styles.scss"

class PhotoObj extends Content {
    constructor({ url, title, id}) {
        super();
        this.instance = { url, title, id }
    }
}

class PhotoContent extends Manager {
    constructor() {
        super();
    }

    async render() {  
        const HTML = await this.assambleHTML()
        this.putInContainer(HTML) 

        function btnHandler(event) {
            router.forward(`${event.currentTarget.getAttribute("path")}`);
        }

        this.addClickListeners(".articleDescriptionButton", btnHandler)
    }

    async assambleHTML() {
        const response = await this.fetch("/photos")
        return response.slice(0,90).reduce((acc, photo) => {         
            return acc + new PhotoObj(photo).createItem(buildPhotoTemplate)
        },"")
    }
}



function buildPhotoTemplate({ url, title, id }) {
    return `<div class="article">
                <div class="article__image">
                    <img src=${url} alt="img">
                </div>
                <div class="article__description">
                    <p class="article__title">${title}</p>
                    <button class="articleDescriptionButton" path="/posts/${id}" >continue reading</button>
                </div>
            </div>`
}

export default new PhotoContent()


