import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
new Vue({
    el:'#app',
    data () {
        return {
            msg:'1111'
        }
    },
    router,
    components:{
        App
    },
    template:'<App />'
})