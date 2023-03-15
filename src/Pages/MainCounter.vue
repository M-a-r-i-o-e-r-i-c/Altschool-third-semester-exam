<template>
    <div>
        <HeadCounter/>
        <CounterView/>
        <FootCounter/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import HeadCounter from '../components/HeadCounter.vue'
// import FootCounter from '../components/FootCounter.vue'
// import CounterView from '../components/CounterView.vue'

export default{
    name:'MainCounter',
  components: {
    HeadCounter: defineAsyncComponent(()=> import ('../components/HeadCounter.vue')), 
    FootCounter: defineAsyncComponent(()=> import ('../components/FootCounter.vue')), 
    CounterView: defineAsyncComponent(()=> import ('../components/CounterView.vue'))
    
}
}
</script>
