const BACKEND_BASE_PATH = 'https://jsonplaceholder.typicode.com/'

export default class FetchAPI {
    getResource = async (path) => {
        let response = await fetch(`${BACKEND_BASE_PATH}${path}`);
        return await response.json()
    }
}