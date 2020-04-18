import VueRouter from "vue-router";
import {routes} from "../includes/routes";

export const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            if (to.hash) {
                resolve({ selector: to.hash })
            } else if (savedPosition) {
                resolve(savedPosition)
            } else {
                resolve({x: 0, y: 0})
            }
        })
    }
})
