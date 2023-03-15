<template>
    <div>
        <HeadCounter/>
        <BodyCounter/>
        <FootCounter/>

    </div>
</template>

<script>
import HeadCounter from '../components/HeadCounter.vue'
import BodyCounter from '../components/BodyCounter.vue'
import FootCounter from '../components/FootCounter.vue'

export default{
    name:'HomeCounter',
  components: {
    HeadCounter, BodyCounter, FootCounter
}
}
</script>
