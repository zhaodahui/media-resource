import Vue from 'vue'
import Router from 'vue-router'
import ResourceList from '@/pages/resourceList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resourceList',
      component: ResourceList
    },
    {
      path: '/resourceList',
      name: 'resourceList',
      component: ResourceList
    }
  ]
})
