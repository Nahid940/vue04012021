import Vue from 'vue'
import Vuex from 'vuex'
import employee from './modules/employee.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        employee
    }
})