import "./styles/styles.scss"
import header from "./components/header"
import FetchAPI from "./components/utils/ApiFetch"
import ApiWrapper from "./components/utils/ApiWrapper"
import Router from "./components/utils/router"
import Store from "./components/API_content/store"
import main from "./components/main"
import sidePhotoContent from "./components/API_content/sidePhotoLayout"
import photoContentLayout from "./components/API_content/photoLayout"
import postContentLayout from "./components/API_content/postLayout"

const api = new ApiWrapper(new FetchAPI());

(async () => {
    const store = new Store(await api.getResources(["photos", "posts", "comments"]));

    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML += main.render()
    document.getElementById("api__content").innerHTML = photoContentLayout.pack(store.getItem("photos"), 10);//второй аргумент - кол-во отображаемых елементов
    document.getElementById("side__news").innerHTML = sidePhotoContent.pack(store.getItem("photos"), 5)//рекламные(боковые) статьи

    let links = {
        main: () => photoContentLayout.pack(store.getItem("photos"), 10),
    }
    
    store.getItem("posts").forEach(item => {
        links[`post/${item.id}`] = () => postContentLayout.pack(store.getItem("posts"), `${item.id}`)
    })  //сетаю статьи с коллбеками в ссылки
    
    const router = new Router(links, "api__content") //2 arg - id элемента в котором происходит перерисовка
    
    window.addEventListener("popstate", (event) => {
        router.updateState(event.state)
    })

    const descriptionButtons = document.querySelectorAll(".articleDescription")     
    descriptionButtons.forEach((item) => {
        item.addEventListener("click", (event) => {
        router.forward(`post/${event.target.id}`) 
        document.querySelector(".refferToMain").addEventListener("click", () => router.back())
    })
})
}   
)()