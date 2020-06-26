<template>
  <Center>
      <h1>登录验证中...</h1>
  </Center>
</template>

<script>
import Center from "../components/Center"
import {mapState} from "vuex"
export default {
    components: {
        Center,
    },
    methods:{
        handlerLogin(){

            if (this.isLoading){
                return;
            }
            if (this.data){
                if(this.$route.query.returnurl){
                    this.$router.push(this.$route.query.returnurl);
                }
                else{
                    this.$router.push({name: "Personal"});
                }
               
            }else{
                this.$router.push({name:"Login"});
            }
            // if(this.isLoading){
            //     return;
            // }
            
            //     if(this.data){
                  
            //         if(this.$route.query.returnurl) {
                     
            //             this.$router.push(this.$route.returnurl);
            //         }else{
                        
            //             this.$router.push({name: "Personal"});
            //         }

            //     }else{
            //         this.$router.push({name:"Login"});
            //     }
            
        }
    },
    computed: mapState("loginUser",["data","isLoading"]),
    watch:{
        data:{
            immediate: true,
            handler(){
                this.handlerLogin();
            }
        },
        isLoading:{
            immediate:true,
            handler(){
                this.handlerLogin();
            }
        },
    }
}
</script>

<style scoped>
h1{
    font-size: 2em;  
}

</style>