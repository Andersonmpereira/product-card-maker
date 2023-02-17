<template>
  <button :type="type" class="btn">{{ btnText }}</button>
</template>

<script>
    export default {
        name: 'Btn',
        props: {
          btnText: String,
          type: String
        }
    }
</script>

<style scoped>
  .btn{
    background-color: #341f97;
    color: #fff;
    border: none;
    padding: 10px 15px;
    margin: 5px;
  }
</style>