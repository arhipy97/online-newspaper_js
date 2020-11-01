import "./styles.scss"

class CommentContent {
    createCommentItem(user) {
        return `<div class="comment">
                    <div class="user_info">
                        <div class="user_name">
                            <p>${user.name}</p>
                        </div>
                        <div calss=""user_email>
                            <p>${user.email}</p>
                        </div>
                    </div>
                    <div class="user_body">
                        <p class="article__title">${user.body}</p>
                    </div>
                </div>
                `
    }

    pack(arr, postId) {
        let commentsHTML = arr.reduce((acc, value) => {
            return `${acc}${this.createCommentItem(value)}`
        }, "")
        return commentsHTML += `
                                <div class="commentInput" data-action="submit">
                                    <textarea name="comment" cols="40" rows="3" id="commentValue"></textarea>
                                    <div class="comments__buttons">
                                        <button id=${postId}" data-action="submitForm">submit</button>
                                        <button data-action="resetForm">reset</button>
                                    </div>
                                </div>
                                `
    }
}

//data-action="submit"

export default new CommentContent()