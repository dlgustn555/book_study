import axios from 'axios'
import store from '../store'
import {LIST_TEMPLATE} from '../template'
import {API} from '../constants'

const render = (root, newsFeed) => {
    let template = LIST_TEMPLATE.LIST

    const lis = newsFeed.map(({read, title, id, comments_count, user, points, time_ago}) => {
        return LIST_TEMPLATE.LI.replace('{{__read__}}', read ? 'bg-red-500' : 'bg-white')
            .replace('{{__id__}}', id)
            .replace('{{__title__}}', title)
            .replace('{{__comments_count__}}', comments_count)
            .replace('{{__user__}}', user)
            .replace('{{__points__}}', points)
            .replace('{{__time_ago__}}', time_ago)
    })

    root.innerHTML = template
        .replace('{{__news_feed__}}', lis.join(''))
        .replace('{{__prev_page__}}', store.currentPage > 1 ? store.currentPage - 1 : 1)
        .replace('{{__next_page__}}', store.currentPage + 1)
}

const newsFeedList = async (root) => {
    const newsFeed = store.feeds[store.currentPage] || []

    if (newsFeed.length > 0) {
        render(root, newsFeed)
        return
    }

    const {data} = await axios.get(API.NEWS_URL.replace('@currentPage', store.currentPage))
    store.feeds[store.currentPage] = data
    render(root, data)
}

export default newsFeedList
