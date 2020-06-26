// 远程获取新闻和新闻类别的数据
import axios from "axios"
import {APPCODE} from "./config.js"
export async function getNewsChannels() {
    var resp = await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization: `APPCODE ${APPCODE}`
        },
    });
   // console.log(resp.data.showapi_res_body.pagebean.contentlist);
     return resp.data.showapi_res_body.pagebean.contentlist;
}

export async function getNews(channelId="5572a109b3cdc86cf39001db",page = 1,limit =10) {
  var resp = await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization: `APPCODE ${APPCODE}`
        },
        params: {
            //5572a109b3cdc86cf39001db
            channelId,
            page,
            maxResult: limit,
            needAllList: false,
            needContent: 1,
        }
    });
    return resp.data.showapi_res_body.pagebean;
}