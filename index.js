import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'; 
import Home from '@/components/Home.vue';
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';
import Homepage from '@/components/Homepage.vue';

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
      },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

// Check if process is defined to determine if we're in a Node.js environment
const isNode = typeof process !== 'undefined' && process.env && process.env.BASE_URL;

// Define history based on whether we're in a Node.js environment
const history = isNode ? createWebHistory(process.env.BASE_URL) : createWebHistory();

const router = createRouter({
  history,
  routes
})

export default router
