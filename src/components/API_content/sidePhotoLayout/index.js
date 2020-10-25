import "./styles.scss"

class SidePhotoContent{
    createSidePhotoItem(value) {
        return `<div  class="left-side__content-item">
                    <img class="left-side-content__img" src="${value['url']}" alt="picture">
                    <div class="left-side-content__text">
                        <p class="title">Lorem ipsum dolor sit amet.</p>
                        <p class="subtitle">${value['title']}</p>
                    </div>
                </div>
                `
    }

    pack(arr, quality) {
        let layout = ""
        arr.forEach((value, id) => {
            if (id < quality) {
                layout += this.createSidePhotoItem(value)
            }
        })
        return layout;
    }
}

export default new SidePhotoContent();