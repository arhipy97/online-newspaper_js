class LocalStorage {
    constructor() {
        this.keyName = 'post'
    }

    getComments(postId) {
        return JSON.parse(localStorage.getItem(`${postId}`) || '[]')
    }

    putComments(path, obj) {
        const comments = this.getComments(path)
        comments.push(obj)
        const FIELD = `${path}`
        localStorage.setItem(FIELD, JSON.stringify(comments))
    }
}

export default new LocalStorage();