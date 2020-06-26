import axios from "axios"
export async function login(loginInfo){
    //post http：//study.yuanjin.tech/api/user/login
    var resp = await axios.post("/api/user/login",loginInfo);
    var token = resp.headers.authorization;
    if(token) {
        localStorage.setItem("token",token);
    }
    console.log(token);
    return resp.data;
    
    
}
//使用保存的令牌从服务器获取登入信息
export async function whoAmI(){
    // get http://studey.yuanjin.tech/api/user/whoami
    // headr authorization: bearer thokenxxxx
    var token = localStorage.getItem("token");
    if(!token) {
        return null;
    };
    var resp = await axios.get("/api/user/whoami", {
        headers: {
            authorization: `bearer ${token}`
        }
    });
    return resp.data.data;
}
//注销
export function loginOut(){
    localStorage.removeItem("token");
}
//注册
export async function reg(userInfo){
    // post http://study.yuanjin.tech/api/user/reg
   var resp = await axios.post("/api/user/reg",userInfo);
    return resp.data;
}