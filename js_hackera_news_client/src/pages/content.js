import axios from 'axios'
import store from '../store'
import {API} from '../constants'
import {CONTENT_TEMPLATE} from '../template'

const makeComment = (comments, called = 0) => {
    const commentList = []
    for (let i = 0, end = comments.length; i < end; i++) {
        commentList.push(
            CONTENT_TEMPLATE.COMMENT.replace('{{__called__}}', called * 40)
                .replace('{{__user__}}', comments[i].user)
                .replace('{{__time_ago__}}', comments[i].time_ago)
                .replace('{{__content__}}', comments[i].content)
        )

        if (comments[i].comments.length > 0) {
            commentList.push(makeComment(comments[i].comments, called + 1))
        }
    }

    return commentList.join('')
}

const newsFeedContent = async (root, id) => {
    let template = CONTENT_TEMPLATE.CONTENT

    const {
        data: {title, content, comments},
    } = await axios.get(API.CONTENT_URL.replace('@id', id))

    const findFeed = store.feeds[store.currentPage].find((feed) => feed.id === Number(id))
    findFeed.read = true

    root.innerHTML = template
        .replace('{{__title__}}', title)
        .replace('{{__content__}}', content)
        .replace('{{__comments__}}', makeComment(comments))
}

export default newsFeedContent
