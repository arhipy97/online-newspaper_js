import "./styles.scss"

class PostContent{
    pack(responce) {
        return `<div class="post">
                    <h1 class="post__title">${responce.title}</h1>
                    <p class="post__body">${responce.body}</p>
                    <div class="buttons">
                        <button class="refferToMain" data-action="renderMain">main page</button>
                    </div>
                </div> 
                <div class="comments" id=""comments></div>         
        `
    }
}// можно ли два элемента с одним id при перерендере

export default new PostContent()