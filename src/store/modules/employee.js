const employees={
    state:{
        user_input:null,
        employee:{}
    },
    actions:{
        /*
        mutateInputUpdate is a mutation declared in mutations
        when updateInputValue will be dispatched it will commit mutaion mutateInputUpdate8
        */
        updateInputValue:({commit},input_payload)=>{commit('mutateInputUpdate',input_payload)},
        storeEmployeeDate:({commit},employee_paylaod)=>{commit('mutateEmployeeData',employee_paylaod)}
    },
    mutations:{
        mutateInputUpdate:(state,payload)=>{state.user_input=payload},
        mutateEmployeeData:(state,payload)=>{state.employee=payload}
    },
    getters:{
        get_user_input:(state)=>(state.user_input),
        get_employee:(state)=>(state.employee)
    }
}

export default employees