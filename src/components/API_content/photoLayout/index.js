import "./styles.scss"

class PhotoContent{
    createPhotoItem({url,title,id}) {
        return `<div class="article">
                        <div class="article__image">
                            <img src=${url} alt="img">
                        </div>
                        <div class="article__description">
                            <p class="article__title">${title}</p>
                            <button class="articleDescriptionButton" id="/post${id}" data-action="renderArticle">continue reading</button>
                        </div>
                    </div>
                `
    }

    pack(arr, quality) {
        return arr.reduce((acc, value, id) => {
            return (id > quality) ? acc: `${acc}${this.createPhotoItem(value)}`
        }, "")
    }
}

export default new PhotoContent();
