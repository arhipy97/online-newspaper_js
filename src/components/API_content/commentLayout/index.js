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
            if(value.postId === postId) return acc;
            return `${acc}${this.createCommentItem(value)}`
        }, "")
        return commentsHTML += `
                                <div class="commentInput">
                                    <textarea name="comment" cols="40" rows="3"></textarea>
                                    <div class="comments__buttons">
                                        <input type="submit" value="submit" data-action="renderArticle" "id=${postId}">
                                        <input type="reset" value="reset">
                                    </div>
                                </div>
                                `
    }
}

export default new CommentContent()