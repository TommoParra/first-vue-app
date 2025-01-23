import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: route =>({page: parseInt(route.query.page || 1)})
    },
    {
      path: '/events/:id',
      name: 'eventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'eventDetails',
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'eventRegister',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'eventEdit',
          component: EventEdit,
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
