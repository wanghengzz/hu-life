<template>
            <div class="logined">
                <div class="center">
                    <img src="./images/aa9c8b1f4a5a72aa64309482b5a2590c.jpeg" class="images">
                    <div class="table">
                    显示边框：<Switch v-model="border" />
                    开启悬停：<Switch v-model="hover" />
                    <Grid :border="border" :hover="hover"  >
                    <GridItem>{{userInfo.name}} </GridItem>
                    <GridItem>班级：2班</GridItem>
                    <GridItem>专业：软件工程</GridItem>
                    <GridItem>学号：{{userInfo.idcard}}</GridItem>
                    <GridItem>学院：计算机科学技术学院</GridItem>   
                    <GridItem>身份证号：xxxxxxx</GridItem>          
                    <GridItem>微信：xxxxx</GridItem>
                    <GridItem>QQ：xxxxxx</GridItem>
                    <GridItem>地址：xxxxx</GridItem>
                    
        </Grid>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
     data () {
            return {
                border: true,
                hover: true,
                userInfo:{}
            }
        },
        mounted(){
      this.userInfo=this.$store.state.userInfo
      console.log(this.userInfo)
  }
}
</script>

<style lang="less" scoped>
 .logined{
           height: 550px;
            width: 100%;
            margin-top: 105px;
            float: left;
            background-color: white;
            display: flex;
            justify-content: center;
            .center{
                display: flex;
                width:1043px;
                border-left: 3px solid #d6d6d6;
                border-right: 3px solid #d6d6d6;
                flex-wrap: wrap;
                justify-content: space-around;
                background-image:url("./images/src=http___c-ssl.duitang.com_uploads_item_201907_07_20190707194310_GRvvu.thumb.400_0.jpeg&refer=http___c-ssl.duitang.webp") ;
                    .table{     
                               width: 600px;
                               height: 400px;
                               margin-top: 120px;
                               margin-left: 20px;
                               font-size: 20px;
                               font-weight: bolder;
                    }
                    .images{
                        width: 160px;
                        height: 180px;
                        margin-top: 190px;
                        margin-left: 30px;
                        border: yellowgreen solid;
                    }
            }
        }

</style>
