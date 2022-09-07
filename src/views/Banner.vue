<template>
  <div class="banner">
    <div class="leftbox">
    </div>
    <div class="centerbox">
      <div class="box1">
        <div class="msg">
          <div class="img">
            <img
              src="./images/7a9aef8c643e3024241f5259671f601f.jpeg"
              alt=""
              class="pic"
            />
          </div>
          <div class="stu">
            <span class="name">{{userInfo.name}}</span>
            <span class="grade">{{userInfo.idcard}}</span>
          </div>
        </div>
        <Collapse v-model="value" class="list" accordion="true">
          <Panel name="1">
            专业
            <template #content
              >计算机科学与技术学院</template
            >
          </Panel>
          <Panel name="2">
            学分
            <template #content
              >127/140</template
            >
          </Panel>
          <Panel name="3">
            专业
            <template #content
              >软件工程</template
            >
          </Panel>
        </Collapse>
      </div>
      <div class="box2">
        <div class="tit">今日课程</div>
        <div class="major">
        显示边框：<Switch v-model="border" />
        开启悬停：<Switch v-model="hover" />
        <Grid :border="border" :hover="hover">
            <GridItem>7:30--12:00</GridItem>
            <GridItem>高等数学</GridItem>
            <GridItem>任教授 5#405</GridItem>
            <GridItem>14:10--15:30</GridItem>
            <GridItem>网络安全</GridItem>
            <GridItem>刑教授 4#210</GridItem>
            <GridItem>19:30-21:30</GridItem>
            <GridItem>电子电路</GridItem>
            <GridItem>刘教授 3#301</GridItem>
        </Grid>
    </div>
      </div>
      <div class="box3">
        <div class="a1">
          <div>海大新闻</div>
        </div>
        <div class="B1">
          <div class="b1">
            <div class="c1">
              <span>13</span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              南海文明大讲堂第七讲预告：南海外交斗争与维权形式!
            </div>
          </div>

          <div class="b2">
            <div class="c1">
              <span>12 </span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              图书馆“湖畔讲坛”学术讲座第154期知识产权与创新发展!
            </div>
          </div>

          <div class="b3">
            <div class="c1">
              <span>05</span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              图书馆“湖畔讲坛”学术讲座第153期《中国梦和新药梦》!
            </div>
          </div>

          <div class="b4">
            <div class="c1">
              <span>02</span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              【预告】旅琼文艺家大讲坛第十八期11月28日开讲胡世宗：重走长征路
              感受红军魂!
            </div>
          </div>
        </div>
      </div>
      <div class="box4">
        <h3>自习室</h3>
        <select class="selectBox">
          <option value="classOne">1号教学楼</option>
          <option value="classTwo">2号教学楼</option>
          <option value="classThree">3号教学楼</option>
          <option value="classFour">4号教学楼</option>
        </select>
        <table>
          <tbody>
            <tr>
              <td>1F</td>
              <td>101</td>
              <td>102</td>
              <td>106</td>
              <td>110</td>
            </tr>
            <tr>
              <td>2F</td>
              <td>211</td>
              <td>213</td>
              <td>201</td>
              <td>202</td>
            </tr>
            <tr>
              <td>3F</td>
              <td>301</td>
              <td>302</td>
              <td>303</td>
              <td>310</td>
            </tr>
            <tr>
              <td>4F</td>
              <td>401</td>
              <td>402</td>
              <td>403</td>
              <td>404</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="box5">
        <div class="ff">学术动态</div>
        <Carousel autoplay v-model="value"  height="50%">
          <CarouselItem>
            <div class="demo-carousel">
              <img
                src="./images/5F6F279D7CC1292EF349EB85877_459C6F70_550F5.jpg"
                class="p1"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img
                src="./images/436EE08579161A50E2AA5ED5A45_B6050B3F_3C41A.jpg"
                class="p1"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img
                src="./images/91C87119C5F6A7997930F9A6E4E_3A8DA1A4_18853.jpg"
                class="p1"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img
                src="./images/000FE10C503CF135146846C4378_A1CD65DC_DBEE.jpg"
                class="p1"
              />
            </div>
          </CarouselItem>
           <CarouselItem>
            <div class="demo-carousel">
              <img
                src="./images/ECC88DFCF44992A6713557BCB36_C3DF2347_3713A.jpg"
                class="p1"
              />
            </div>
          </CarouselItem>
        </Carousel>
        <div class="content">
          7月4日 ：能力提升建设|邓兴旺院士应邀到我校学术讲座!
        </div>
        <div class="content">
          6月22日：海南大学南海文明大讲堂第七讲“南海外交斗争与维权形势”成功举行!
        </div>
        <div class="content">
          5月20日：海南大学自贸港大讲坛第七讲“中国特色大国外交新理念新作为”举行!
        </div>
      </div>
      <div class="box6">
        <div class="left">
          <div class="view">快速导航</div>
          <video
            src="./video/mda-nfgcrt9xd0seixjy.mp4"
            autoplay
            class="video"
            muted
          ></video>
        </div>
        <div class="butt">
          <Row>
            <Col span="20">
              <Space direction="vertical" type="flex" size="large">
                <Button long>
                  <a href="https://www.hainanu.edu.cn/" target="_blank"
                    >海大官网</a
                  >
                </Button>
                <Button long>
                  <a href="https://weibo.com/u/5974895708" target="_blank"
                    >海大微博</a
                  >
                </Button>
                <Button long>
                  <a href="https://weibo.com/u/5974895708" target="_blank"
                    >海大微博</a
                  >
                </Button>
                <Button long>
                  <a
                    href="https://www.hainanu.edu.cn/hdgk1/hdjj.htm"
                    target="_blank"
                    >海大介绍</a
                  >
                </Button>
                <Button long>
                  <a
                    href="https://www.hainanu.edu.cn/xywh1/xydt.htm"
                    target="_blank"
                    >海大地图</a
                  >
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="rightbox">
       <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      value3: false,
      value: "1",
       border: true,
       hover: true,
       userInfo:{}
    };
  },
  mounted(){
    this.userInfo=this.$store.state.userInfo
    console.log(this.userInfo)
  }
};
</script>

<style lang="less" scoped>
.banner {
  height: 1178px;
  width: 100%;
  margin-top: 105px;
  float: left;
  background-color: white;
  display: flex;
  justify-content:space-between;
  background-image: url("./images/屏幕截图\ 2022-07-08\ 153219.jpg");
  background-repeat: no-repeat;
  .centerbox {
    display: flex;
    width: 1043px;
    border-left: 3px solid #d6d6d6;
    border-right: 3px solid #d6d6d6;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .box1,
    .box2,
    .box3,
    .box4,
    .box5,
    .box6 {
      width: 472px;
      height: 325px;
      border: 3px solid #d6d6d6;
      flex-grow: 0;
      padding: 18px;
      box-sizing: border-box;
      
    }
    .box1 {
      font-size: 14px;
      color: white;
      .img {
        width: 90px;
        height: 100px;
        float: left;
        .pic {
          float: left;
          width: 100%;
          height: 100%;
        }
      }
      .stu {
        float: left;
        width: 200px;
        height: 80px;
        margin-left: 70px;
        margin-top: 10px;
        font-weight: bolder;
        .name {
          display: block;
          margin-left: 10px;
        }
        .grade {
          display: block;
          margin-top: 28px;
          margin-left: 10px;
        }
        
      }
      .list{
          margin-top: 120px;
        }
    }
    .box2 {
      color: white;
      .tit{
        font-size: 19px;
        font-weight: bolder;
      }
      .major{
        margin-top: 25px;
      }     
    }
    .box3 {
      color: white;
      .a1 {
        color:white;
        font-size:19px;
        a {
          text-decoration: none;
          color: black;
          font-size: 19px;
          font-weight: bolder;
        }
      }
      .b1,
      .b2,
      .b3,
      .b4 {
        width: 100%;
        height: 48px;
        margin-top: 20px;
        font-size: 6px;
        .c1 {
          width: 76px;
          height: 40px;
          float: left;
          line-height: 15px;
          text-align: center;
          margin-right: 60px;
          border: #d6d6d6 3px solid;
          background-color: #2d8cf0;
          font-weight: bolder;
        }
        .c2 {
          width: 272px;
          height: 40px;
          font-size: 14px;
          float: left;
          line-height: 20px;
          text-align: center;
          text-align: left;
          border: #d6d6d6 2px solid;
         
          /* overflow: hidden;
           white-space: nowrap;
           text-overflow: ellipsis; */
        }
     
      }
    }
    .box4 {
      font-size: 14px;
      h3 {
        font-size: 19px;
        font-weight: bolder;
        color: white;
      }
      .selectBox {
        width: 416px;
        height: 46px;
        margin: 10px 0;
        border-color: #d6d6d6;
        &:active {
          border: 0px;
        }
      }
      table {
        text-align: center;
        font-size: 10px;
        font-family: Verdana, Tahoma, sans-serif;
        border-color: #d6d6d6;
        border-collapse: separate;
        border-spacing: 0;
        tr {
          background-color: white;
          td {
            width: 85px;
            height: 45px;
            line-height: 45px;
            border: 1px solid #d6d6d6;
          }
          td:first-child {
            background-color: white;
            width: 70px;
          }
          td:hover {
            background-color: yellowgreen;
          }
        }
      }
    }
    .box5 {
      color: #2d8cf0;
      .p1 {
        width: 470px;
        height: 150px;
      }
      .content {
        font-size: 15px;
      }
      .ff {
        font-size: 19px;
        font-weight: bolder;
      }
    }
    .box6 {
      display: flex;
      align-content: center;
      .left {
        display: block;
        .view {
          font-size: 19px;
          font-weight: bolder;
          color:#2d8cf0;
        }
        .video {
          width: 300px;
          height: 250px;
        }
      }
      .butt {
        width: 40%;
        margin-top: 20px;
        margin-left: 25px;
      }
    }
  }
  .rightbox{
     .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
  }
}
</style>