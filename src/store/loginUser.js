import {login,loginOut,whoAmI} from "../services/userService"
//登录用户的仓库数据
export default {
    namespaced:true,//开启命名空间
    state:{
        data: null,//当前登录的用户
        isLoading: false, //是否正在远程加载中
    },
    mutations:{
        setIsLoading(state,payload){
            state.isLoading = payload;
        },
        setData(state,payload){
            state.data = payload;
        },
    },
    actions: {
        async login(context,payload){
            context.commit("setIsLoading", true);
            var resp = await login(payload);
            var result = false;
            if(resp.code === 0) {
                //登入成功
                context.commit("setData",resp.data);
                result = true;
            }

            context.commit("setIsLoading",false);
            return result;
        },
        async whoAmI(context){
           context.commit("setIsLoading",true);
           var resp = await whoAmI();
           context.commit("setData",resp);
           context.commit("setIsLoading",false);
        },
        loginOut(context){
            loginOut();
            context.commit("setData",null);
        }
    }
}