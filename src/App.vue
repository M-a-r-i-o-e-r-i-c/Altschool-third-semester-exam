<template>
  <div class="app-container">
    <router-view/>
  </div>
    
</template>

<style>
:root{
  --icons-color:#4c5773;
  --icons-bg-color:#e2e6e9;
  --shadow-dark-color:#d3dae7;
  --shadow-light-color:#fff;
  --main-bg-color:#ecf0f3;

  --box-shadow: 1rem 1rem 1rem var(--shadow-dark-color), -1rem -1rem 1rem var(--shadow-light-color);
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.app-container{
  background:var(--main-bg-color);
  height:100vh;

}
</style>
