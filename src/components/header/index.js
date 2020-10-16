import BaseClass from "../utils"
import template from "./header.html"
import "./header.scss"

class Header extends BaseClass {

    render() {
        return template
    }
}

export default new Header()