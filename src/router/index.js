import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/Category/AddCategory'
import Category from '../views/Category/Category'
import Product from '../views/Product/Product'
import Admin from '../views/Admin'
import AddProduct from "../views/Product/AddProduct";
import Login from '../views/login.vue'
// import Signup from '../views/signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin/Category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: Signup
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
