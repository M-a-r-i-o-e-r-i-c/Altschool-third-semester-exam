<template>
    <header class="head-container">
        <router-link :to="{name: 'Home'}"> <h1>&#129412; Magic</h1></router-link> 
    </header>
</template>
<style scoped>
.head-container{
    height:10vh;
    display:flex;
    align-items: center;
    padding:0.5em;
}
h1{
    font-family: Haettenschweiler, sans-serif;
    color:rgb(55, 143, 143);
}
a{
    text-decoration: none;
}
</style>