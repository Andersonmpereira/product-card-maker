<template>
  <div class="massage-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .massage-container{
        color: #fff;
        background-color: #1dd1a1;
        border-color: 2px solid #10ac84;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
        font-size: 14px;
    }
</style>