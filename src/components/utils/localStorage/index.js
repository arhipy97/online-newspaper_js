class LocalStorage {
    constructor() {
        this.keyName = 'post'
    }

    getComments(postId) {
        const commentsLocalStorage = localStorage.getItem(`${this.keyName}${postId}`);
        return commentsLocalStorage !== null ? JSON.parse(commentsLocalStorage): [];
    }

    putComments(postId, obj) {
        const comments = this.getComments(postId)
        comments.push(obj)
        const FIELD = `${this.keyName}${postId}`
        localStorage.setItem(FIELD, JSON.stringify(comments))
    }
}

export default new LocalStorage();