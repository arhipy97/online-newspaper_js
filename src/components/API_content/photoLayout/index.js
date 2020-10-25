import "./styles.scss"

class PhotoContent{
    createPhotoItem(value) {
        return `<div class="article">
                        <div class="article__image">
                            <img src=${value['url']} alt="img">
                        </div>
                        <div class="article__description">
                            <p class="article__title">${value['title']}</p>
                            <button class="articleDescription" id="${value['id']}">continue reading</button>
                        </div>
                    </div>
                `
    }

    pack(arr, quality) {
        let layout = ""
        arr.forEach((value, id) => {
            if (id < quality) {
                layout += this.createPhotoItem(value)
            }
        })
        return layout;
    }
}

export default new PhotoContent();
