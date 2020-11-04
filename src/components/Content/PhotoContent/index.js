import Content from "../../base_classes/ContentRenderClass"
import "./styles.scss"

class PhotoItem extends Content {
    constructor({ url, title, id}) {
        super();
        this.instance = { url, title, id }
    }
}

class PhotoContent extends Content {
    constructor() {
        super();
        this.path = "/photos";
    }

    async render(router) {
        const responce = await this.fetch()      //как зачейнить?
            
        const HTML = responce.slice(0,90).reduce((acc, photo) => {         
            return acc + new PhotoItem(photo).createItem(buildPhoto)
        },"")

        document.getElementById(this.containerId).innerHTML = HTML

        function btnHandler(event) {
            router.forward(`${event.target.id}`);
            event.target.removeEventListener("click", btnHandler)
        }

        document.querySelectorAll(".articleDescriptionButton").forEach((item) => {	    
            item.addEventListener("click", btnHandler)
        })
    }
}



function buildPhoto({ url, title, id }) {
    return `<div class="article">
                <div class="article__image">
                    <img src=${url} alt="img">
                </div>
                <div class="article__description">
                    <p class="article__title">${title}</p>
                    <button class="articleDescriptionButton" id="/post/${id}" >continue reading</button>
                </div>
            </div>`
}

export default new PhotoContent