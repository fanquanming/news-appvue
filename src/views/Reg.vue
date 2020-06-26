<template>
  <Center>
   <form action="" class="login-container" @submit.prevent="handleSubmit()">
     <div class="form-item">
       <div class="input"><label>账号：</label><input v-model="userInfo.loginId" type="text" @input="validataEmpty('loginId','账号不能为空')"/></div>
       <FormError :msg="error.loginId"/>
     </div>

     <div class="form-item">
       <div class="input"><label>密码：</label><input v-model="userInfo.loginPwd" type="password" autocomplete="new-password"  @input="validataEmpty('loginPwd','密码不能为空')"/></div>
       <FormError :msg="error.loginPwd"/>
     </div>

     <div class="form-item">
       <div class="input"><label>重复密码: </label><input v-model="userInfo.pwsAgain" type="password" autocomplete="new-password" @input="validatePwdAgain()"/></div>
       <FormError :msg="error.pwsAgain"/>
     </div>


     <div class="form-item">
       <div class="input"><label>昵称: </label><input v-model="userInfo.nickname" type="text" autocomplete="new-password" @input="validataEmpty('nickname','请输入昵称')" /></div>
       <FormError :msg="error.nickname"/>
     </div>

     <div class="form-item">
       <div class="input">
         <label></label>
         <button>注册</button>
       </div>
       <FormError :isCenter="true" :msg="error.server"/>
     </div>

   </form>
  </Center>
</template>

<script>
import Center from "../components/Center"
import FormError from "../components/FormError";
import {reg} from "../services/userService"
export default {
    components:{
        Center,
        FormError,
    },
    data(){
      return {
        userInfo:{
          loginId:"",
          loginPwd:"",
          pwsAgain:"",
          nickname:"",
        },
        error:{
          loginId:"",
          loginPwd:"",
          pwsAgain:"",
          nickname:"",
          server:"",
        }
      }
    },
    methods: {
      //非空验证
      validataEmpty(field,msg){
        if(this.userInfo[field]){
          this.error[field] = "";
          return true;
        }
        else{
          this.error[field] = msg;
          return false;
        }
      },
      validatePwdAgain(){
         var result = this.validataEmpty("pwsAgain","重复密码不能为空");
         if(result){
           if(this.userInfo.loginPwd !== this.userInfo.pwsAgain){
             this.error.pwsAgain = "两次密码不一致";
             return false;
           }
             return true;
         }
          return false;
      },
      async handleSubmit(){
      if(this.validataEmpty('loginId','账号不能为空')&&
      this.validataEmpty('loginPwd','密码不能为空') &&
      this.validatePwdAgain()&&
      this.validataEmpty('nickname','请输入昵称')
      ){
        
        //提交数据
        var resp = await reg(this.userInfo);
        console.log(resp);
        if(resp.data){
          //注册成功
          alert("注册成功");
          //跳转到登陆
          this.$router.push({
            name: "Login",
          })
        }
        else{
          this.error.server = resp.msg;
        }

        }
      },
    }
}
</script>

<style scoped>
.login-container {
  width: 400px;
}
.form-item .error.txt-center {
  text-align: center;
}
.form-item .input {
  display: flex;
}
.form-item label {
  width: 100px;
  display: inline-block;
  text-align: right;
  line-height: 41px;
}
.form-item .error {
  font-size: 14px;
  color: #a44242;
  padding-left: 100px;
  height: 30px;
  line-height: 30px;
}
.form-item input,
.form-item button {
  flex-grow: 1;
}
</style>