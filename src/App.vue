<template>
    <div>
        <img :src="src" alt="">
        <div id="div" @click="goAbout"></div>
        <router-view></router-view>
    </div>
</template>

<script>
let path = require('path')
    export default {
        data(){
            return {
                src:''
            }
            
        },
        methods:{
            goAbout(){
                this.$router.push('/about')
            }
        },
        mounted(){
            let a = path.resolve(__dirname,'./assets/aaa.jpg')
            console.log(a === './assets/aaa.jpg');
            this.src = require(`.${a}`)
        }
    }
</script>

<style scoped>
#div {
    width: 100px;
    height: 100px;
    background: red;
}
</style>