import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../views/Home.vue'
import About from './../views/About.vue'
import Message from './../views/Message.vue'
import News from './../views/News.vue'
import Detail from './../views/Detail.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'message',
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:Detail
            }
          ]
        },
        {
          path:'news',
          component:News
        },
        {
          path:'/home',
          redirect:'message'
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

