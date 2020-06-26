<template>
    <div>
       <div style="width:1080px; margin:0 auto">
        <Banner :banners="banners"/>
        <Channels @mychange="handlechange"/>
        <Loading v-show="isLoading"/>
        <NewList v-show="!isLoading" :news="news"/>
    </div> 
    </div>
</template>

<script>
import Banner from "../components/Banner"
import Channels from "../components/news/Channels.vue"
import NewList from "../components/news/NewsList.vue"
import Loading from "../components/Loading"
import {getNews} from "../services/newService";
import Center from "../components/Center"
export default {
    components: {
        Banner,
        Channels,
        NewList,
        Loading,
        Center,
    },
    data(){
        return {
           banners:[
               {link: "http://duyi.ke.qq.com", url:require("../assets/banner/1.jpg")},
               {link: "http://duyi.ke.qq.com", url:require("../assets/banner/2.jpg")},
               {link: "http://duyi.ke.qq.com", url:require("../assets/banner/3.jpg")},
           ],
           news: [],
           isLoading: true,
        }
    },
   
    methods: {
        async handlechange(chooseId) {
         this.isLoading = true;   
         var resp = await getNews(chooseId,1,10);
         this.news = resp.contentlist;
         this.isLoading = false;
         console.log(resp.contentlist)
        },
    }
}
</script>

<style>

</style>