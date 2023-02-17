<template>
    <div class="form-group">
        <label for="">{{ inputText }}</label>
        <input type="text" :placeholder="inputPlaceholder" v-model="value">
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: 'FormGroup',        
        props: {
            inputText: String,
            inputPlaceholder: String
        }
    }
</script>

<style scoped>
    
</style>