<template>
     <div class="information">
        <div class="centerbox">
             <div class="demo-login">
        <Login @on-submit="handleSubmit">
            <UserName name="username" />
            <Password name="password" />
            <Captcha class="demo-login-captcha" name="captcha" :count-down="0" @on-get-captcha="handleGetCaptcha">
                <template #text>
                  <img :src="'https://file.iviewui.com/iview-pro/' + captcha">
                </template>
            </Captcha>
            <Submit/>
        </Login>
    </div>
        </div>
     </div>
</template>

<script>
export default {
        name:'Information',
        data () {
            return {
                captcha: 'captcha1.png'
            }
        },
        methods: {
            handleSubmit (valid, { username, password, captcha }) {
                if (valid) {
                    if(username==this.$store.state.userInfo.id && password==this.$store.state.userInfo.passWord){

                            if(captcha==='A68T'|| captcha==='78UL'){
                                this.pushLogined()
                                this.$store.dispatch('getUserInfo',{
                                    name:'王恒',
                                    idcard:'20191687310124',
                                    grade:'软件工程（2）班'
                                })
                            }
                            else{
                                alert('验证码错误！！！！！')
                            }
                    }
                    else{
                        alert('账号或密码错误！！！！')
                    }
                }
            },
            handleGetCaptcha () {
                // 这里只是模拟切换图形验证码
                if (this.captcha === 'captcha1.png') {
                    this.captcha = 'captcha2.png';
                } else {
                    this.captcha = 'captcha1.png';
                }
            },
            pushLogined(){
               this.$router.push({
                name:'logined'
               })
            }
        }
}
</script>

<style lang="less" scoped>
         .information{
           height: 550px;
            width: 100%;
            margin-top: 105px;
            float: left;
            background-color: white;
            display: flex;
            justify-content: center;
            .centerbox{
                display: flex;
                width:1043px;
                border-left: 3px solid #d6d6d6;
                border-right: 3px solid #d6d6d6;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;
                 background-image:url("./images/src=http___i0.hdslb.com_bfs_article_9046c0e44815cbe9d8d9816430df5627e8ebce78.jpg&refer=http___i0.hdslb.webp") ;
                 background-size: 1043px 550px;
                  .demo-login{
                 width: 400px !important;
                 margin: 0 auto;
                }
                  .demo-login-captcha .ivu-btn{
                 padding: 0;
                 }
                .demo-login-captcha .ivu-btn img{
                 height: 28px;
                position: relative;
                top: 4px;
              }
            }
         }
</style>