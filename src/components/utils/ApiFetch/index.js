const BACKEND_BASE_PATH = 'https://jsonplaceholder.typicode.com'

export default class FetchAPI {
    get = async (path) => {
        let response = await fetch(`${BACKEND_BASE_PATH}${path}`);
        return response.json()
    }

    post = async (id, value) => {
        let response = await fetch(`${BACKEND_BASE_PATH}/posts/${id}/comments`, {
            method: 'POST',
            body: JSON.stringify([
                {
                    postId: id,
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