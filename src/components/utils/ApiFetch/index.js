const BACKEND_BASE_PATH = 'https://jsonplaceholder.typicode.com/'

export default class FetchAPI {
    getResource = async (path) => {
        let response = await fetch(`${BACKEND_BASE_PATH}${path}`);
        return response.json()
    }

    getResources = async (requestArr) => {
        let requests = requestArr.map((path) => fetch(`${BACKEND_BASE_PATH}${path}`))
        let responseArr = await Promise.all(requests)
            .then(responses => Promise.all(responses.map(r => r.json())))
        
        return this.objectCreator(requestArr, responseArr)
    }

    objectCreator(arrOfKeys,arrOfValues) {
        let obj = {}
        for(let i = 0; i < arrOfKeys.length; i++) {
            obj[arrOfKeys[i]] = arrOfValues[i]
        }
        return obj
    }
}