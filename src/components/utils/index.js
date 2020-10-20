import Store from "../store"
export default class Component{
    // extends Store
    // super();

    constructor(props) {
        this.props = props;
    }

    didMount () {

    }

    render () {
        throw Error("Need template!")
    }


}