import newsFeedList from './pages/list'
import newsFeedContent from './pages/content'
import store from './store/index'

const root = document.getElementById('root')

const router = () => {
    const routePath = window.location.hash

    if (routePath === '') {
        newsFeedList(root)
    } else if (routePath.indexOf('#/page/') >= 0) {
        store.currentPage = Number(routePath.substr(7))
        newsFeedList(root)
    } else if (routePath.indexOf('#/show/') >= 0) {
        const id = routePath.substr(7)
        newsFeedContent(root, id)
    }
}

window.addEventListener('hashchange', router)

router()
