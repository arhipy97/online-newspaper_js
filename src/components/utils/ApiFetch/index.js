const BACKEND_BASE_PATH = 'https://jsonplaceholder.typicode.com'

export default class FetchAPI {
    get = async (path) => {
        let response = await fetch(`${BACKEND_BASE_PATH}${path}`);
        return response.json()
    }

    put = async () => {
        console.log("asd")
    }
}