const BACKEND_BASE_PATH = 'https://jsonplaceholder.typicode.com'

export default class FetchAPI {
    get = async (path) => {
        let response = await fetch(`${BACKEND_BASE_PATH}${path}`);
        return response.json()
    }

    post = async (obj) => {
        console.log("asd")
        // await fetch(`${BACKEND_BASE_PATH}/posts/${id}/comments`, {
        // method: 'POST',
        // body: JSON.stringify({
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        // }),
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        // },
        // })
        // .then((response) => response.json())
        // .then((json) => console.log(json))
    }
}