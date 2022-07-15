// ESTE FILE ES, SEGÚN ART OF ENGINEER, THE ROUTE COMPONENT !!!!!! AUNQUE LE LLAME app.JS


const routes=[

    {path:'/home', component:home},
    {path: '/supermarkets/:id', component:supermarkets},
    {path: '/customers/:id', component:customers},
    {path: '/products/:id', component:products},
    {path: '/tickets/:id', component:tickets},
    {path: '/ticket_details/:id', component:ticket_details},
    {path: '/more_info', component:more_info}

]


const router=new VueRouter({
    routes
})

   
const app=new Vue({
    router
}).$mount('#app')


