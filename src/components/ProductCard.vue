<template>
    <div class="group-thumbnail">  
        <a href="#" class="thumbnail">
            <img :src="productImage">
        </a>
    </div>
    <div class="content">
        <a href="#" target="_top" class="product-name">{{ productName }}</a>
        <div class="prices">                 
            <a href="#" class="old-price">{{ oldPrice }}</a>
            <a href="#" class="price">{{ price }}</a>
        </div>
        <a href="#" class="buy">Comprar</a>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        data(){
            return{
                productName: null,
                oldPrice: null,
                price: null,
                productImage: null
            }
        },
        props: {
            productName: String,
            oldPrice: String,
            price: String,
            productImage: String
        }
    }
</script>

<style scoped>
    .thumbnail img{
        width: 100%;
    }

</style>