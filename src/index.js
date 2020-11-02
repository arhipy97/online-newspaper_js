import "./styles/styles.scss"
import header from "./components/header"
import FetchAPI from "./components/utils/ApiFetch"
import ApiWrapper from "./components/utils/ApiWrapper"
import Router from "./components/utils/router"
import main from "./components/main"
import sidePhotoContent from "./components/API_content/sidePhotoLayout"
import photoContentLayout from "./components/API_content/photoLayout"
import postContentLayout from "./components/API_content/postLayout"
import commentsLayout from "./components/API_content/commentLayout"
import BtnHandler from "./components/utils/BtnHandler"
import localStorage from "./components/utils/localStorage"

const api = new ApiWrapper(new FetchAPI());

(async () => {
    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML += main.render()
    document.getElementById("api__content").innerHTML = photoContentLayout.pack(await api.get("/photos"), 10);//второй аргумент - кол-во отображаемых елементов
    document.getElementById("side__news").innerHTML = sidePhotoContent.pack(await api.get("/photos"), 5)//рекламные(боковые) статьи

    const links = {
        main: async () => {
            let responce = await api.get("/photos")
            return photoContentLayout.pack(responce, 10)
        },
        post: async (id) => {
            let postsResponse = await api.get(`/posts/${id}`)
            let commentsResponse = await api.get(`/posts/${id}/comments`)
            let allComments = commentsResponse.concat(localStorage.getComments(id))
            return postContentLayout.pack(postsResponse) + commentsLayout.pack(allComments, id)
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

    const apiBtnsHandler = new BtnHandler(document.querySelector(".articles"), router, api, localStorage) //положил роутер внутрь, не очень нравится затея
    }
)()