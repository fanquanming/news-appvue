<template>
  <div class="news-types" v-if="data.length > 0">
    <div class="item" v-for="(item,index) in showChannels" :key="index" :class="{
      active: item.channelId === chooseId ,
    }" @click="switchTo(item.channelId)">
      <span class="name">{{item.channelName}}</span></div>
     
     <a href="" @click.prevent="isCollapse=!isCollapse">{{isCollapse?"展开":"收起"}}</a>
  </div>
</template>

<script>
import { getNewsChannels } from "../../services/newService";
import {mapState} from "vuex"
export default {
    data(){
      return {
        isCollapse: true, //当前是否为折叠状态
        chooseId: null, //选中当前频道id
      }
    },
    computed: {
       ...mapState("channels",["data"]),
      showChannels(){
      
        if(this.isCollapse){
          return this.data.slice(0,8); //折叠状态只需要显示8个
        }
        else{
          return this.data;
        }
      }
    },
    
    watch:{
      data: {
        immediate: true,
        handler() {
          if(this.data.length > 0){
          this.chooseId = this.data[0].channelId;
          this.switchTo(this.chooseId);
        }
        },
      }
    },

    methods: {
      switchTo(id) {
        this.chooseId = id;//切换频道
        this.$emit("mychange",this.chooseId);

      }
    }
}
</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: #000;
  color: #fff;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>