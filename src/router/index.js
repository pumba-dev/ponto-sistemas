import { createRouter, createWebHashHistory } from 'vue-router'
import Register from '../views/Register.vue'
import UserList from '../views/UserList.vue'

// Define the routes
const routes = [
    {
        path: '/',
        redirect: { name: 'user-list' }
    },
    {
        path: '/nova-pessoa',
        name: 'register',
        component: Register
    },
    {
        path: '/lista-pessoas',
        name: 'user-list',
        component: UserList
    }
]
// Provide the history
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Export Router
export default router