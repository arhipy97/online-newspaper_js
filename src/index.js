import "./styles/styles.scss"
import header from "./components/header"
import main from "./components/main"


(() => {
    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML = main.render()
})()

console.log(header);