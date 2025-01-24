import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import textEditor from '@/views/textEditor.vue'
import postsView from '@/views/posts/postsView.vue'
import postDetails from '@/views/posts/postDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: postsView
    },
    {
      path: '/post/details/:id',
      name: 'postDetails',
      component: postDetails
    },
    {
      path: '/textEditor',
      name: 'textEditor',
      component: textEditor,
      
    },
  ],
})

export default router
