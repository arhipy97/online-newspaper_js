import BaseClass from "../API-wrapper"
import template from "./header.html"
import "./header.scss"

class Header extends BaseClass {

    render() {
        return template
    }
}

export default new Header()