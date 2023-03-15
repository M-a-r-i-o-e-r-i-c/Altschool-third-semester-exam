<template>
    <div class="body-container">
        <h1>Hello, there.Want to see some magic? &#128512;</h1>
        <router-link :to="{name: 'Counter'}"> <button>Yes, I do</button></router-link>
    </div>
</template>
<style scoped>
h1{
    text-align:center;
}
.body-container{
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
  .body-container{
    width:96%;
  }

}
@media (min-width:1000px){
  .body-container{
    width:97%;
  }
}
@media (max-width:280px){
  .body-container{
    width:87%;
  }

}
</style>