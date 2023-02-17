<template>
  <nav id="header">
    <router-link to="/" id="logo-url">
      <img src="img/logo.png" alt="logo product card maker">
    </router-link>
    <div class="navbar">
      <router-link to="/catalog">Catalog</router-link>
      <router-link to="/customize">Customize</router-link>
      <router-link to="/flags">Flags</router-link>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
  #header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    padding: 0 40px;
  }

  #header img{
    height: 30px;
  }

  .navbar{
    display: flex;
    gap: 15px;
  }
  
  .navbar a{
    color: #737373;
    text-decoration: none;    
  }
  
</style>