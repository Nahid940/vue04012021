import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        number:566
    },
    mutations:{
        setNumber(state,payload){
            state.number=payload
        }
    },
    actions:{

    },
    modules:{

    },
    getters:{
        getCurrentNumber(state)
        {
            return state.number
        }
    }
})