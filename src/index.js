import "./styles/styles.scss"
import header from "./components/header"
import api from "./components/utils/ApiWrapper"
import Router from "./components/utils/router"
import main from "./components/main"
import sidePhotoContent from "./components/API_content/sidePhotoLayout"
import photoContentLayout from "./components/API_content/photoLayout"
import postContentLayout from "./components/API_content/postLayout"
import commentsLayout from "./components/API_content/commentLayout"
import BtnHandler from "./components/utils/BtnHandler"
import localStorage from "./components/utils/localStorage"

import testPhotoContent from "./components/Content/PhotoContent"
import testSidePhotoContent from "./components/Content/sidePhotoContent"



(async () => {
    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML = main.render()
    // document.getElementById("side__news").innerHTML = sidePhotoContent.pack(await api.get("/photos"), 5)//рекламные(боковые) статьи

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

    const router = new Router(links)

    await testPhotoContent.render(router)
    await testSidePhotoContent.render(router)

    const apiBtnsHandler = new BtnHandler(document.querySelector(".main__wrapper"), router, api, localStorage) //положил роутер внутрь, не очень нравится затея
    }
)()