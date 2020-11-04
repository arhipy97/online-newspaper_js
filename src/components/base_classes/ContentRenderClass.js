import api from "../utils/ApiWrapper"

export default class Content {
    constructor() {
        this.containerId = "api__content";  
    }

    createItem(templateCallback) {
        return templateCallback(this.instance);
    }
    
    fetch() {
        return api.get(this.path);
    }
}

// class PhotoContent extends Content {
//     constructor({ url, title, id, ...props }) {
//         this.instance = { url, title, id, ...props }
//     }
// }

// class CommentContent extends Content {
//     constructor({ url, title, id }) {
//         this.instance = { name, email, body }
//     }
// }
// //
// function buildPhoto({ url, title, id }) {
//     return `
//             <div class="article">
//                 <div class="article__image">
//                     <img src=${url} alt="img">
//                 </div>
//                 <div class="article__description">
//                     <p class="article__title">${title}</p>
//                     <button class="articleDescriptionButton" id="post${id}" data-action="renderArticle">continue reading</button>
//                 </div>
//             </div>`
// }
// const photos = [].slice(0, 5).map(photo => {
//     return new PhotoContent(photo).createItem(buildPhoto)
// })

// const comments = [].slice(0, 5).map(photo => {
//     return new CommentContent(photo).createItem(buildComment)
// })

// document.getElementById('main').innerHTML = `${...photos} ${...comments } `