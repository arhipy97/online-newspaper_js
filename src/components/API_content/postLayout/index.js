import "./styles.scss"

class PostContent{
    pack(arr, identificator) {
        const article = arr.find((el, id) => {
            return (el.id == identificator) 
        })

        return `<div class="post">
                    <h1 class="post__title">${article.title}</h1>
                    <p class="post__body">${article.body}</p>
                    <button class="refferToMain">main page<button>
                </div>
                
        `
    }
}

export default new PostContent()