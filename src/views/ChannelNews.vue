<template>
<div>
  <div class="type-title">
    {{channelName}}
  </div>
  <Loading v-if="isLoading"/>
  <NewList v-else :news="news"/>
  <Pager :page="page" :limit="limit" :total="total" :panelNumber="panelNumber" @pageChange="handleChange"/>
</div>
</template>

<script>
import Center from "../components/Center"
import Pager from "../components/Page"
import NewList from "../components/news/NewsList"
import * as newsServ from "../services/newService"
import Loading from "../components/Loading"
export default {
    components:{
        Center,
        Pager,
        NewList,
        Loading,
    },
    data() {
      return {
        channelName:"",
        limit: 15,
        total: 0,
        panelNumber: 10,
        news: [],
        isLoading: true
      }
    },
    created() {
      this.setChannelName();
      this.setDatas();
    },
    methods: {
      handleChange(newPage) {
        //如何在代码中导航
        //命令式导航
        this.$router.push("?page=" + newPage);
        this.page = newPage;
        this.setDatas();
      },
       //设置频道名称
      async setChannelName(){
        var channels = await newsServ.getNewsChannels();
        var channel = channels.find((item) => {
          return item.channelId === this.$route.params.id
        });
        this.channelName = channel.channelName;

      },
      //设置所有相关的新闻数据
      async setDatas() {
       this.isLoading = true;
       var resp = await newsServ.getNews(this.$route.params.id,this.page,this.limit);
       console.log(resp);
       this.total = resp.allNum;
       this.news = resp.contentlist;
       this.isLoading = false;
      }
    },
    watch: {
      //监控某些数据变化，当数据变化时要做某些事
      "$route.params.id"(){
       
        this.setDatas();
        this.page = 1;
      }
    },
    computed: {
      page() {
        return +this.$route.query.page || 1;
      },
      channelName(){
        var channels = this.$store.state.data;
        if(channels.length > 0) {
          var channel = channels.find((item) => {
          item.channelId === this.$route.params.id
        });
         return channel.name;
        }
        return "";
      }
    }
    
}
</script>

<style scoped>
.type-title{
  font-size: 2em;
  color: #888;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

</style>