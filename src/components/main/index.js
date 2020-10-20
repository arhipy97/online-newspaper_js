import BaseClass from "../utils"
import template from "./main.html"
import "./main.scss"

class Main extends BaseClass {
    // super(props) {
    //     this.props = props;
    // }

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
                        <a href="#">continue reading</a>
                    </div>
                </div>
                `
    }

    renderPhotoArticles(arr,quality) {
        arr.forEach((el,id) => {
            if(id < quality) {
                document.querySelector(".articles").innerHTML += this.createPhotoAricle(el);
            }
        })
        return this;
    }
}

export default new Main()