<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Header,
      Footer
    }
    
  }
</script>

<style>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    font-family: 'helvetica';
    background-color: #f7f7f7;
    color:#737373;
  }

  input:focus{
    outline: none;
  }
  
  .content{
    margin:40px
  }
</style>