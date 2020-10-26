import "./styles.scss"

class SidePhotoContent{
    createSidePhotoItem(data) {
        return `<div  class="left-side__content-item">
                    <img class="left-side-content__img" src="${data['url']}" alt="picture">
                    <div class="left-side-content__text">
                        <p class="title">Lorem ipsum dolor sit amet.</p>
                        <p class="subtitle">${data['title']}</p>
                    </div>
                </div>
                `
    }

    pack(arr, quality) {
        return arr.reduce((acc, value, id) => {
            if(id > quality) return acc;
            return `${acc}${this.createSidePhotoItem(value)}`
        }, "")
    }
}

export default new SidePhotoContent();