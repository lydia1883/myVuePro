import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PagesView from '../views/PagesView'
import MovieView from '../views/MovieView'
import LoginView from '../views/LoginView'
import StatusView from '../views/StatusView'
import HomeView from '../views/HomeView'
import RegisterView from '../views/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
      ]
    },

    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
  ]
})
