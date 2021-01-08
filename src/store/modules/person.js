const person={

    state:{
        person:{
            name:'',
            age:'',
            phone:''
        }
    },

    actions:{
        savePerson:({commit},person_payload)=>{
            commit('mutatePerson',person_payload)
        }
    },

    mutations:{
        mutatePerson:(state,person_payload)=>{state.person=person_payload}
    },

    getters:{
        get_person:(state)=>(state.person)
    }

}

export default person