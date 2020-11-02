class LocalStorage {
    constructor() {
        this.keyName = 'post'
    }

    getComments(postId) {
        return JSON.parse(localStorage.getItem(`${this.keyName}${postId}`) || '[]')
    }

    putComments(postId, obj) {
        const comments = this.getComments(postId)
        comments.push(obj)
        const FIELD = `${this.keyName}${postId}`
        localStorage.setItem(FIELD, JSON.stringify(comments))
    }
}

export default new LocalStorage();