const BACKEND_BASE_PATH = 'https://jsonplaceholder.typicode.com'

export default class FetchAPI {
    async get(path) {
        let response = await fetch(`${BACKEND_BASE_PATH}${path}`);
        return response.json()
    }

    async post (path, value) {
        const postId = path.replace(/[\D\/]/g, "")
        let response = await fetch(`${BACKEND_BASE_PATH}${path}/comments`, {
            method: 'POST',
            body: JSON.stringify([
                {
                    postId: postId,
                    id: "dont matter", // пусть на беке определяют
                    name: "id labore ex et quam laborum",
                    email: "Eliseo@gardner.biz",
                    body: value,
                }
            ]),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return response.json()
    }
}