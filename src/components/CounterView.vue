<template>
  <div class="counter-container">
    <div class="count">
      <h1>{{count}}</h1>

    </div>
    
    <div class="button-container">
      <input type="number" :value="tempValue" @input="updateTemp" placeholder="enter a number">
      <div class="btn">
        <button @click.prevent="increment">Increment</button>
        <button @click.prevent="setValue">Set Value</button>
        
      </div>
      <div class="btn">
        <button @click.prevent="decrement">Decrement</button>
        <button @click.prevent="reset">Reset</button>

      </div>
  </div>
  </div>
</template>

<script setup>

import useCounter from '../composables/counter'

const {count, tempValue, updateTemp, increment, decrement, reset, setValue} = useCounter();
   
// export default {
//   setup(){
//     const {count, tempValue, updateTemp, increment, decrement, reset, setValue} = useCounter();
   
//    return{count, tempValue, updateTemp,  increment, decrement, reset, setValue}
//   }
  
//   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter-container{
  height:85vh;
  background:var(--main-bg-color);
  box-shadow:var(--box-shadow);
  margin-left:1em; 
  width:93%; /* media screen property */
  padding:1rem;
  border-radius: 1rem;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
.count{
  width:100%;
  border:1px solid var(--icons-color);
  height:50vh;
  border-radius:1rem;
  overflow-wrap: break-word;
  overflow-y: auto;
}
h1{
  text-align:center;
  font-size:5em;
  color:var(--icons-color);
  
}
input{
  width:80%;
  height:15%;
  border-radius:1rem;
  font-size:1.5rem;
  display:block;
  margin:0 auto;

}
input:hover, button:hover{
  cursor:pointer;
}
.button-container{
  height:50vh;
  margin:1rem;
}
.btn{
  display:flex;
  justify-content: space-between;
}
button{
  outline:none;
  border:none;
  background: var(--main-bg-color);
  padding:1.5rem 2rem;
  box-shadow:var(--box-shadow);
  border-radius:1rem;
  margin:1rem;
  font-size: 1rem;


}

@media (min-width:400px){
  .counter-container{
    width:96%;
  }

}
@media (min-width:1000px){
  .counter-container{
    width:97%;
  }
}
@media (max-width:280px){
  .counter-container{
    width:87%;
  }
  input{
    width:70%;
    font-size:1rem;
  }
  button{
    font-size:0.9rem;
    padding:1rem 1.5rem;
    margin:0.7rem;
  }
}

</style>
