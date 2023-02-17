<template>
  <div class="sidebar">
    <h2>Create Product</h2>
    <Message :msg="msg" v-show="msg"/>
    <form @submit="createProduct">
        <div class="form-group">
            <label for="">Product Name*</label>
            <input 
                type="text"
                placeholder="Insert product name"
                v-model="info.name"
                required
            />
        </div>
        <div class="form-group">
            <label for="">Url image</label>
            <input 
                type="text"
                placeholder="Insert url image"
                v-model="info.img"
            />
        </div>
        <div class="form-group">
            <label for="">Product Price*</label>
            <input 
                type="text"
                placeholder="Insert product price"
                v-model="info.price"
                required
            />
        </div>
        <div class="form-group">
            <label for="">Product old price*</label>
            <input 
                type="text"
                placeholder="Insert product old price"
                v-model="info.oldPrice"
            />
        </div>
        <div class="checkbox">
            <input type="checkbox" id="buy" name="buy" value="buy" v-model="info.buy">
            <label for="buy"> Have button?</label><br>
        </div>
        <Button :type="type" :btn-text="action"/>
    </form>
  </div>
</template>

<script>
    import Button from "./Btn.vue";
    import Message from './Message.vue';
    export default {
        name: "Sidebar",
        components:{
            Button,
            Message
        },
        data(){
            return{
                info: {
                    name: null,
                    img: null,
                    price: null,
                    oldPrice: null,
                    buy: null
                },                
                action: 'Create',
                close: 'Close',
                type: 'submit',
                msg: null
            }
        },
        methods: {
            async createProduct(e){
                e.preventDefault();

                const product = {
                    productName: this.info.name,
                    price: this.info.price,
                    oldPrice: this.info.oldPrice,
                    imageDefault: this.info.img,
                    buyButton: this.info.buy
                }

                const dataJson = JSON.stringify(product);

                const req = await fetch("http://localhost:3000/product", {
                    method: "POST",
                    headers: {"content-type": "application/json"},
                    body: dataJson
                });

                const res = await req.json();

                this.msg = `Product created successfully!`;

                setTimeout(() => this.msg = "", 3000);
                
                this.info.name = "";
                this.info.price = "";
                this.info.oldPrice = "";
                this.info.img = "";
                this.info.buy = "";
            }
        }
    }
</script>

<style scoped>
    h2{
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .sidebar{
        z-index: 2;
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 100%;        
        padding: 20px;
        background-color: #fff;
        border-left: 1px solid #ebebeb;   
    }
    .form-group{
        display: flex;
        flex-direction: column;
    }

    .form-group label{
        font-weight: bold;
        margin: 10px 0 5px 0;
        font-size: 14px;
        padding: 5px 10px;
        border-left: 2px solid #341f97;
    }
    .form-group input{
        padding: 5px 10px;
        border: 1px solid #ebebeb;
        border-radius: 0;
        margin: 5px 0;
        color: #737373;
    }
    .checkbox{
        margin: 10px 0;
    }

    .checkbox label{
        font-weight: bold;
        margin: 10px 0 5px 0;
        font-size: 14px;
        padding: 5px 10px;
    }
</style>