import "./styles/styles.scss"
import header from "./components/header"
import main from "./components/main"
import store from "./components/store"


(() => {
    let photosArray
    store.getResource("photos")
        .then(() => photosArray = store.getValue("photos"))
        .then(()=> document.getElementById("header").innerHTML = header.render())
        .then(()=> document.getElementById("main").innerHTML += main.render())
        .then(() => main.renderPhotoArticles(photosArray, 10))
})()



