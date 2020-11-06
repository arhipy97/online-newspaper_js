import "./styles/styles.scss"
import header from "./components/header"
import main from "./components/main"
import testSidePhotoContent from "./components/ContentClasses/sidePhotoContent"

(async () => {
    document.getElementById("header").innerHTML = header.render()
    document.getElementById("main").innerHTML = main.render()
    
    await testSidePhotoContent.render()
}
)()