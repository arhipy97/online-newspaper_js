import "./styles.scss"

class SidePhotoContent{
    createSidePhotoItem({url, title, id}) {
        return `<div  class="left-side__content-item">
                    <img class="left-side-content__img" src="${url}" alt="picture">
                    <div class="left-side-content__text">
                        <p class="title" data-action="renderArticle" id="/post/${id}">Lorem ipsum dolor sit amet.</p>
                        <p class="subtitle">${title}</p>
                    </div>
                </div>
                `
    }

    pack(arr, quality) {
        let newArr = arr.slice(0,100).reverse() // костыль для для уникального контента
        return newArr.reduce((acc, value, id) => { 
            return(id > quality) ? acc: `${acc}${this.createSidePhotoItem(value)}`
        }, "")
    }
}

export default new SidePhotoContent();