import Content from "../../base_classes/ContentRenderClass"
import "./styles.scss"

class SidePhotoItem extends Content {
    constructor({ url, title, id}) {
        super();
        this.instance = { url, title, id }
    }
}

class SidePhotoContent extends Content {
    constructor() {
        super();
        this.path = "/photos";
        this.containerId = "side__news";  
    }

    async render(router) {
        const responce = await this.fetch() 
            
        const HTML = responce.slice(0,10).reverse().reduce((acc, photo) => {         
            return acc + new SidePhotoItem(photo).createItem(buildSidePhoto)
        },"")

        document.getElementById(this.containerId).innerHTML = HTML

        function btnHandler(event) {
            router.forward(`${event.currentTarget.id}`);
            event.target.removeEventListener("click", btnHandler)
        }

        document.querySelectorAll(".left-side__content-item").forEach((item) => {	
            item.addEventListener("click", btnHandler)
        })
    }
}

function buildSidePhoto({url, title, id}) {
    return `<div  class="left-side__content-item" id="/post/${id}">
                <img class="left-side-content__img" src="${url}" alt="picture">
                <div class="left-side-content__text">
                    <p class="title" data-action="renderArticle">Lorem ipsum dolor sit amet.</p>
                    <p class="subtitle">${title}</p>
                </div>
            </div>
            `
}

export default new SidePhotoContent