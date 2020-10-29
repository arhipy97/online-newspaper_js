import "./styles.scss"

class PhotoContent{
    createPhotoItem(data) {
        return `<div class="article">
                        <div class="article__image">
                            <img src=${data['url']} alt="img">
                        </div>
                        <div class="article__description">
                            <p class="article__title">${data['title']}</p>
                            <button class="articleDescriptionButton" id="${data['id']}" data-action="renderArticle">continue reading</button>
                        </div>
                    </div>
                `
    }

    pack(arr, quality) {
        return arr.reduce((acc, value, id) => {
            if(id > quality) return acc;
            return `${acc}${this.createPhotoItem(value)}`
        }, "")
    }
}

export default new PhotoContent();
