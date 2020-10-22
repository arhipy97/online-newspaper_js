import template from "./main.html"
import "./main.scss"

class Main{
    render() {
        return template
    }

    createPhotoAricle(el) {
        return `<div class="article">
                    <div class="article__image">
                        <img src=${el['url']} alt="img">
                    </div>
                    <div class="article__description">
                        <p class="article__title">${el['title']}</p>
                        <button class="articleDescription">continue reading</button>
                    </div>
                </div>
                `
    }

    renderPhotoArticles(arr,quality) {
        arr.forEach((el,id) => {
            if(id < quality) {
                document.querySelector(".articles").insertAdjacentHTML("beforeend", this.createPhotoAricle(el));
            }
        })
        return this;
    }

    renderArticleDescription() {
        document.querySelector(".articles").innerHTML = "sos"
    }
}

export default new Main()