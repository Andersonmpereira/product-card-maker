<template>
    <footer>
        <p>Product Card Maker &copy; 2023</p>
        <p>Projeto feito por 
            <a href="https://github.com/andersonmpereira" target="_blank">Anderson Pereira</a>
        </p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #fff;
        border-top: 1px solid #ebebeb;
        height: 80px;
    }

    a{
        text-decoration: none;
        font-weight: bold;
        color: #737373;
    }
</style>