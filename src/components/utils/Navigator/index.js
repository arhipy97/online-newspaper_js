import photoContent from "../../ContentClasses/PhotoContent"
import PostContent from "../../ContentClasses/PostContent"
import CommentsContent from "../../ContentClasses/CommentsContent"

class Navigator {
    constructor() {
        this.links = {
            main: async () => await photoContent.render(),
            posts: async (path) => {
                await PostContent.render(path);
                await CommentsContent.render(path);
            }
        }
    }

    async render(path) {
        if (path === "/") {
            await this.links.main()
        } else {
            const id = path.replace(/\D/g, "") // числа из path 
            const pathCheck = path.replace(/[\d\/]/g, "") //path без чисел и слэшей
            if (!this.links[pathCheck] || id > 100 || id < 1) throw Error("404")  //проверка по кол-ву постов
            await this.links[pathCheck](path)
        }
    }
}

export default new Navigator()