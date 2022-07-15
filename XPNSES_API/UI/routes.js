import Vue from 'vue'
import VueRouter from 'vue-router'
//import . views from '../views';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: Process.env.BASE_URL,
    routes: [

        {path: '/', redirect: '/home'},
        {path:'/home', component:home},
        {path: '/supermarkets/:id', component:supermarkets},
        {path: '/customers/:id', component:customers},
        {path: '/products/:id', component:products},
        {path: '/tickets/:id', component:tickets},
        {path: '/ticket_details/:id', component:ticket_details},
        {path: '/more_info', component:more_info},
    
    ]
})