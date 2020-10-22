import "./styles/styles.scss"
import header from "./components/header"
import main from "./components/main"
import FetchAPI from "./components/utils/ApiFetch"
import ApiWrapper from "./components/utils/ApiWrapper"
import Router from "./components/utils/router"
import store from "./components/store"

const api = new ApiWrapper(new FetchAPI());



(async () => {
    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML += main.render()

    store.addTo("photos", await api.getResource("photos"))

    const router = new Router(
        {
            menu: (() => main.renderPhotoArticles(store.getField("photos"), 10)),
            article: (() => main.renderArticleDescription()),
        }
    )

    main.renderPhotoArticles(store.getField("photos"), 10);

    document.querySelector(".articleDescription").addEventListener("click", ()=> router.forward("/article") )
    }   
)()