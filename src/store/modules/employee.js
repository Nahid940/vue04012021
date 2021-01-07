import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
const employees={
    state:{
        user_input:null,
        employee:{},
        credentials:{},
        is_logged_in:false,
        failed:false
    },
    actions:{
        /*
            mutateInputUpdate is a mutation declared in mutations
            when updateInputValue will be dispatched it will commit mutaion mutateInputUpdate8
        */
        updateInputValue:({commit},input_payload)=>{commit('mutateInputUpdate',input_payload)},
        storeEmployeeDate:({commit},employee_paylaod)=>{commit('mutateEmployeeData',employee_paylaod)},
        storeCredentials:({commit},user_login_payload)=>(
            Vue.axios.post('http://localhost:8080/api/employee/login',
            user_login_payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response)=>{
                if(response.data.status==200)
                {
                    commit('mutateCredentials',response.data.user)
                    commit('mutateLoginSuccess',true)
                }else
                {
                    commit('mutateLoginFailed',true)
                }
            })
        )},
    mutations:{
        mutateInputUpdate:(state,payload)=>{state.user_input=payload},
        mutateEmployeeData:(state,payload)=>{state.employee=payload},
        mutateCredentials:(state,payload)=>{state.credentials=payload},
        mutateLoginSuccess:(state,payload)=>{state.is_logged_in=payload},
        mutateLoginFailed:(state,payload)=>{state.failed=payload}
    },
    getters:{
        get_user_input:(state)=>(state.user_input),
        get_employee:(state)=>(state.employee),
        get_credentials:(state)=>(state.credentials),
        get_is_logged_in:(state)=>(state.is_logged_in),
        get_is_failed_in:(state)=>(state.failed)
    }
}

export default employees