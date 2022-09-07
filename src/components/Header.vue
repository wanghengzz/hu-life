<template>
        <div class="header">
            <div class="logo">
                <img src="./images/logo.png" alt="">
            </div>
            <span class="schoolName">海大校园</span>
            <span class="fPage" @click="pushBanner">首页</span>
            <span class="score" @click="pushGrade">学分</span>
            <span class="message" @click="pushInformation">个人信息</span>
        </div>

</template>

<script>
import { useRouter } from 'vue-router'

export default { 
   name:"Header",
   setup(){
    const router=useRouter()
    const pushBanner=function(){
        router.push({
            'name':'banner',
        })
    }
    
    const pushGrade=function(){
        router.push({
            'name':'grade'
        })
    }
    const pushInformation=function(){
        router.push({
            'name':'information'
        })
   }
    return {
        pushBanner,
        pushGrade,
        pushInformation
    }
   }

   
}
</script>

<style lang="less" scoped>
             .header {
            position:fixed;
            width: 97.6%;
            height: 102px;
            border-bottom: 3px #d6d6d6 solid;
            border-top: 3px #d6d6d6 solid;
            background-color:#004098;
            z-index: 9999;
    
            .logo,
            span {
                float: left;
            }
    
            span:hover {
                color: #56a1d8
            }
    
            .schoolName{
                margin-left: 11px;
                margin-top: 26px;
                font-size: 30px;
                color: #d6d6d6;
    
            }
            .fPage{
                margin-left: 100px;
                margin-top: 35px;
                font-size: 18px;
                 color: #d6d6d6;
            } 
            .score{
                margin-left: 35px;
                margin-top: 35px;
                font-size: 18px;
                 color: #d6d6d6;
            }
            .message{
                margin-left: 40px;
                margin-top: 35px;
                font-size: 18px;
                 color: #d6d6d6;
            }
            .logo{
                margin-left: 30px;
                margin-top: 8px;
                width: 80px;
                height: 80px;
                img{
                    display: block;
                    width:100%;
                    height:100%;
                }
            }
    
        }
    

</style>