import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/fruits', component: () => import('./components/Fruit/Index'), name: 'fruit.index', meta: { transition: 'slide-left' },
        },
        {
            path: '/user/login', component: () => import('./components/User/Login'), name: 'user.login',meta: { transition: 'slide-left' },
        },
        {
            path: '/user/registration', component: () => import('./components/User/Registration'), name: 'user.registration',meta: { transition: 'slide-left' },
        },
        {
            path: '/user/personal', component: () => import('./components/User/Personal'), name: 'user.personal',meta: { transition: 'slide-left' },
        },
        {
            path: '*',  component: () => import('./components/NotFound'), name: '404',meta: { transition: 'slide-left' },
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to.name);
    const token = localStorage.getItem("token")

    if (!token){
        if (to.name === 'user.login' || to.name === 'user.registration'){
            return next();
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.registration' && token){
        return next({
            name: 'user.personal'
        })
    }

    next()
})

export default router



