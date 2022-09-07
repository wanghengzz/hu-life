<template>
     <div class="footer">
            <div class="adress">学校地址：海南省海口市人民大道58号 &nbsp;&nbsp; 邮编：570228</div>
        </div>
</template>

<script>
export default {
        name:'Footer'
}
</script>

<style lang="less" scoped>
         .footer{            
            width: 100%;
            height: 60px;
            border-top: 3px #d6d6d6 solid;
            margin-bottom:0;
            float: left;
            background-color:#004098;
            .adress{
                font-size: 15px;
                text-align: center;
                line-height: 60px;
                color:white
            }
        }
</style>