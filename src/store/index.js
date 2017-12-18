import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import movie from './modules/movie'
import book from './modules/book'
import group from './modules/group'
import subject from './modules/subject'
import search from './modules/search'
import activities from './modules/activities'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        activities,
        movie,
        book,
        group,
        subject,
        search,
        user
    }
})