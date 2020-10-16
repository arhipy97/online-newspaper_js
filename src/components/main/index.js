import BaseClass from "../utils"
import template from "./main.html"
import "./main.scss"

class Main extends BaseClass {

    render() {
        return template
    }
}

export default new Main()