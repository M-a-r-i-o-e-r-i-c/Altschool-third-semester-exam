import {createStore} from 'vuex'

const store = createStore({
    state:{
        count:0,
        temp:''

    },
    getters:{
        counter(state){
            return state.count;
        },
        getTemp(state){
            return state.temp;
        }

    },
    actions:{
        increment({commit}){
            commit('increment')
        },
        decrement({commit}){
            commit('decrement')
        },
        reset({commit}){
            commit('reset')
        }

    },
    mutations:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        reset(state){
            state.count = 0;
        },
        update(state, payload){
            state.temp = payload;
        },
        setValue(state){
            if(state.temp.length > 0){
                state.count = Number(state.temp)
            }
        }

    }
})
export default store;