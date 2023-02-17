<template>
  <div class="content">    
    <div class="tools">
      <h1>Catalog</h1>
      <div>
        <Button 
          @click="showInput"
          :btnText="btnBackground"
        />        
        <Button
          @click="showCreateProduct"
          :btnText="btnProduct"
        />
        <div class="bg-box" v-show="inputBgShow">
          <input type="text" v-model="bgColor">
          <button type="button" @click="changeBackgroundColor">Save</button>
        </div>
      </div>
    </div>
    <CatalogContent :content-color="bgColor"/>    
  </div>
  <Sidebar v-show="createProduct"/>
</template>

<script>
import Button from "../components/Btn.vue";
import CatalogContent from "../components/CatalogContent.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Catalog",
  components: {
    Button,
    CatalogContent,
    Sidebar
  },  
  data() {
    return {
      btnProduct: "New Product",
      btnBackground: "Background Color",
      inputBgShow: false,
      createProduct: false,
      bgColor: null,
      width: 'auto'
    };
  },
  methods:{
    async showInput(){
      this.inputBgShow = !this.inputBgShow;
    },

    async showCreateProduct(){
      this.createProduct = !this.createProduct;
      if (this.createProduct == true){
        this.width = '75%'
      }else{
        this.width = 'auto'
      }
    },

    async changeBackgroundColor(){
      const color = this.bgColor;
      const data = JSON.stringify({color: color});
      const req = await fetch(`http://localhost:3000/catalog`, {
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: data
      })
      const res = await req.json();
      window.location.reload();
    },

    async getBgColor() {
      const request = await fetch("http://localhost:3000/catalog");
      const catalog = await request.json();
      this.bgColor = catalog.color;
    },
  },
  mounted() {
    this.getBgColor();
  },
};
</script>

<style scoped>

  .content{
    width: v-bind(width)
  }
  .tools {
    display: flex;
    justify-content: space-between;
    padding: 0 0 15px 0;
  }

  .bg-box{
    position: absolute;
    border: 1px solid #ebebeb;
    background-color: #fff;
    padding: 10px;
  }
  
  .bg-box input{
    padding: 5px 10px;
    border: 1px solid #ebebeb;
    border-radius: none;
    margin: 5px;
    color: #737373;
  }
  
  .bg-box button{
    padding: 7px;
    background-color: #341f97;
    color: #fff;
    border: none;
  }
</style>