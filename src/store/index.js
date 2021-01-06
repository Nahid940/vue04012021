import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        number:566,
        employee:{},
        input_value:null,
        user:{},
        isLoggedin:false
    },
    mutations:{
        setNumber(state,payload){
            state.number=payload
        },
        addEmployee(state,payload)
        {
            state.employee=payload
        },
        changeInputValue(state,payload)
        {
            state.input_value=payload
        },
        storeUser(state,payload)
        {
            state.user=payload
        },
        isLoggedin(state,payload)
        {
            state.isLoggedin=payload
        }
    },
    actions:{
        // async addEmployee({commit},employee_data)
        // {
        //     commit("addEmployee",employee_data)
        // },
        async addInputValue({commit},input_field_value)
        {
            commit("changeInputValue",input_field_value)
        }
    },
    modules:{

    },
    getters:{
        getCurrentNumber(state)
        {
            return state.number
        },
        getEmployee(state)
        {
            return state.employee
        },
        getInputvalue(state)
        {
            return state.input_value
        },
        getUsers(state)
        {
            return state.user
        },
        isLoggedin(state)
        {
            return state.isLoggedin
        }
    }
})