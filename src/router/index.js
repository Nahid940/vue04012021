import Vue from 'vue';
import Router from 'vue-router'
import Home from "../components/Home.vue";
import Create from '../components/Create.vue'
import Edit from '../components/Edit.vue'
import EmployeeDetails from '../components/employee/EmployeeDetails.vue'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/create",
            name: "Create",
            component: Create,
        },
        {
            path:'/edit/:id',
            name:"Edit",
            component:Edit,
            props: route => ({ query: route.query.q })
        },
        {
            path:'/details/:id',
            name:"EmployeeDetails",
            component:EmployeeDetails,
            props: route => ({ query: route.query.q })
        }
    ],
    mode: 'history'
});