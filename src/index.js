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
import commentsLayout from "./components/API_content/commentLayout"
import BtnHandler from "./components/utils/BtnHandler"

const api = new ApiWrapper(new FetchAPI());

(async () => {
    // const store = new Store(await api.getResources(["photos", "posts", "comments"]));
    const store = new Store()
    store.addTo("photos", await api.get("/photos")); //1 арг - ключ

    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML += main.render()
    document.getElementById("api__content").innerHTML = photoContentLayout.pack(store.getItem("photos"), 10);//второй аргумент - кол-во отображаемых елементов
    document.getElementById("side__news").innerHTML = sidePhotoContent.pack(store.getItem("photos"), 5)//рекламные(боковые) статьи

    let links = {
        main: async () => {
            let responce = await api.get("/photos")
            return photoContentLayout.pack(responce, 10)
        },
        post: async (id) => {
            let postsResponse = await api.get(`/posts/${id}`)
            let commentsResponse = await api.get(`/posts/${id}/comments`)
            return postContentLayout.pack(postsResponse) + commentsLayout.pack(commentsResponse)
        }
    }

    const router = new Router(links, "api__content") //2 arg - id элемента в котором происходит перерисовка

    window.addEventListener("popstate", (event) => {
        if(event.state === null) {
            router.updateState("main")
        } else {
            router.updateState(event.state.path)
        }
    })

    const apiBtnsHandler = new BtnHandler(document.querySelector(".articles"), router) //положил роутер внутрь, не очень нравится затея
    }
)()