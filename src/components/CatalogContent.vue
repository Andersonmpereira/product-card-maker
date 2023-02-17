<template>
    <div class="productGrid">
        <div class="item" v-for="item in products" :key="item.id">
            <productCard
                :product-name="item.productName"
                :product-image="item.imageDefault"
                :price="item.price"
                :old-price="item.oldPrice"
            />
        </div>
    </div>
</template>
  
<script>
    import ProductCard from "../components/ProductCard.vue";
    export default {
        name: "CatalogContent",
        data() {
            return {
                products: null
            }
        },
        components: {
            ProductCard
        },
        props: {
            contentColor: String
        },
        methods:{
            async getProduct() {
                const request = await fetch("http://localhost:3000/product");
                const product = await request.json();
                this.products = product;
            },
        },
        mounted() {
            this.getProduct();
        }
    };
</script>
  
<style scoped>
    .tools {
        display: flex;
        justify-content: space-between;
        padding: 0 0 15px 0;
    }

    .productGrid {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
        background-color: v-bind(contentColor);
        border: 1px solid #ebebeb;
        padding: 10px;
    }

    .item{
        width: 20%;
        padding: 0 10px;
    }

</style>