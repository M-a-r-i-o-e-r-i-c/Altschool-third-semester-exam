import {useStore} from 'vuex'
import {computed} from 'vue'

export default function useCounter(){
    const store = useStore();
    const tempValue = computed(()=>{return store.getters.getTemp})
    const count = computed(()=>{return store.getters.counter});

    function increment (){
      store.commit('increment');
    }

    function decrement (){
      store.commit('decrement');
    }

    function reset (){
      store.commit('reset');
    }

    function updateTemp(event){
        store.commit('update', event.target.value)
    }

    function setValue(){
        store.commit('setValue')
    }
   
   return{count, tempValue, updateTemp, increment, decrement, reset, setValue}
}