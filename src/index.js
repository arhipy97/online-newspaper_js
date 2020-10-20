import "./styles/styles.scss"
import header from "./components/header"
import main from "./components/main"
import render from "./components/xx"

(() => {
    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML = main.render()
})()

render.getResource("photos")


