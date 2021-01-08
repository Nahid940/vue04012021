import Vue from 'vue'
import Vuex from 'vuex'
import employee from './modules/employee.js'
import person from './modules/person.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        employee,
        person
    }
})