import "./styles/styles.scss"
import header from "./components/header"
import main from "./components/main"
import FetchAPI from "./components/store"
import API_WRAPPER from "./components/API-wrapper"

const api = new API_WRAPPER(new FetchAPI());

(async () => {
    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML += main.render()
    const store = await api.getResource("photos");
    await main.renderPhotoArticles(store, 10);
    // await console.log(api.getStoreValue("photos"));
    }   
)()