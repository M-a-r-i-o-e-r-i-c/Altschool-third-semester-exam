<template>
    <HeadCounter/>
    <div class="error-container">
        <h1>OOPS!</h1>
        <h3>404 - Page Not Found</h3>
        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
        <router-link :to="{name: 'Home'}"><button>Go home</button></router-link>
    </div>
    <FootCounter/>
        
</template>

<script>
import HeadCounter from '../components/HeadCounter.vue'
import FootCounter from '../components/FootCounter.vue'

export default{
    name:'HomeCounter',
  components: {
    HeadCounter, FootCounter
}
}
</script>

<style scoped>
.error-container{
    height:85vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    background:var(--main-bg-color);
    box-shadow:var(--box-shadow);
    margin-left:1em; 
    width:90%; /* media screen property */padding:1rem;
    border-radius: 1rem;
}
h1{
    font-size:3rem;
    color:rgb(53, 143, 143);
}
h1,h6,p{
   text-align:center
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
button:hover{
    cursor:pointer;
}

@media (min-width:400px){
  .error-container{
    width:96%;
  }

}
@media (min-width:1000px){
  .error-container{
    width:97%;
  }
}
@media (max-width:280px){
  .error-container{
    width:87%;
  }

}
</style>
