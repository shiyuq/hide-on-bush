<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
    </header>
    <div class="header">
      <div class="pic">
        <span class="title">
          投资者关系
        </span>
      </div>
    </div>
    <div class="promotional-video">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">蚂蚁集团2020年宣传片</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="videoPlay">
          <!-- <video src="../../assets/PromotionalVideo.mp4" controls="controls"></video> -->
        </div>
      </div>
    </div>
    <div class="announcement">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">公告</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="A-announcement">
          <h3>A股公告</h3>
          <div class="line"></div>
          <ul>
            <li>
              <a href="">
                <span>公司的A股上市文件已按照监管要求在上交所网站披露</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="H-announcement">
          <h3>H股公告</h3>
          <div class="line"></div>
          <ul>
            <li>
              <a href="">
                <span>公告及通告－有关退回香港公开发售申请股款的更多资料</span>
                <span class="data">2020年11月04日</span>
              </a>
            </li>
            <div class="line"></div>
            <li>
              <a href="">
                <span>公告及通告－暂缓H股上市</span>
                <span class="data">2020年11月03日</span>
              </a>
            </li>
            <div class="line"></div>
            <li>
              <a href="">
                <span>上市文件－绿色申请表格</span>
                <span class="data">2020年10月26日</span>
              </a>
            </li>
            <div class="line"></div>
            <li>
              <a href="">
                <span>上市文件－H股首次公开发售</span>
                <span class="data">2020年10月26日</span>
              </a>
            </li>
            <div class="line"></div>
            <li>
              <a href="">
                <span>公告及通告－H股首次公开发售</span>
                <span class="data">2020年10月26日</span>
              </a>
            </li>
            <div class="line"></div>
            <li>
              <a href="">
                <span>聆讯后资料集（第一次呈交）</span>
                <span class="data">2020年10月21日</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">联系我们</h1>
        </div>
      </div>
      <div class="section-children">
        <p>投资者关系 联系方式<br/>Ant_Investor@antgroup.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalNavigation from '@/components/home/GlobalNavigation'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    GlobalNavigation
  }
}
</script>

<style>
a{
  color:#383735;
  text-decoration: none;
  font-size: 18px;
  line-height: 30px;
}
a:hover{
  color:#383735
}
.header{
  margin-top: 95px;
}
.header .pic {
  position: relative;
  background-image: url('../../assets/investor.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 320px;
}

.pic .title {
  position: relative;
  left: 105px;
  top: 100px;
  color: #ffffff;
  font-weight: 300;
  font-size: 60px;
  line-height: 80px;
  text-align: left;
  min-width: 1350px;
}
.promotional-video {
  position: relative;
  margin-top: 102px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.promotional-video .section-header {
  display: inline-block;
  position: absolute;
  left: 170px;
  margin-bottom: 30px;
  padding-top: 3px;
}

.promotional-video .section-title {
  display: inline-block;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  font-weight: 400;
  font-size: 26px;
}

.promotional-video .section-title::before {
  position: absolute;
  content: '';
  top: 1px;
  left: 0;
  width: 96px;
  height: 1px;
  background: #1677ff;
}
.promotional-video .section-children{
  position: absolute;
  top: 85px;
  left: 170px;
}
.promotional-video .section-children video{
  width: 820.5px;
  height: 461.53px;
}
.announcement {
  position: relative;
  margin-top: 600px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.announcement .section-header {
  display: inline-block;
  position: absolute;
  left: 170px;
  margin-bottom: 30px;
  padding-top: 3px;
}

.announcement .section-title {
  display: inline-block;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  font-weight: 400;
  font-size: 26px;
}

.announcement .section-title::before {
  position: absolute;
  content: '';
  top: 1px;
  left: 0;
  width: 96px;
  height: 1px;
  background: #1677ff;
}
.announcement .section-children{
  position: absolute;
  width: 820.5px;
  height: 589px;
  left: 170px;
  top: 100px;
}
.announcement .section-children .A-announcement{
  height: 143px;
  padding: 24px 28px;
  background-color: #f9fafc;
  border: 1px solid #f1f2f3;
  margin-bottom: 28px;
}
.announcement .section-children .A-announcement h3{
  position: relative;
  font-size: 18px;
}
.announcement .section-children .A-announcement h3::before{
  position: absolute;
  top: 50%;
  left: -10px;
  content: '';
  height: 45%;
  width: 3px;
  transform: translateY(-50%);
  background-color: #1677ff;
}
.announcement .section-children .line{
  margin: 16px 0;
  border-bottom: 1px solid #e6e7e8;
}
.announcement .section-children .A-announcement a{
  text-decoration: underline;
}
.announcement .section-children span{
  font-weight: 700;
  font-size: 14px;
}
.announcement .section-children .H-announcement{
  padding: 24px 28px;
  background-color: #f9fafc;
  border: 1px solid #f1f2f3;
  margin-bottom: 28px;
}
.announcement .section-children .H-announcement h3{
  position: relative;
  font-size: 18px;
}
.announcement .section-children .H-announcement h3::before{
  position: absolute;
  top: 50%;
  left: -10px;
  content: '';
  height: 45%;
  width: 3px;
  transform: translateY(-50%);
  background-color: #1677ff;
}
.announcement .section-children .H-announcement .data{
  position: absolute;
  right: 42px;
  color: #1677ff;
}
.contact {
  position: relative;
  margin-top: 780px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.contact .section-header {
  display: inline-block;
  position: absolute;
  left: 170px;
  margin-bottom: 30px;
  padding-top: 3px;
}

.contact .section-title {
  display: inline-block;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  font-weight: 400;
  font-size: 26px;
}

.contact .section-title::before {
  position: absolute;
  content: '';
  top: 1px;
  left: 0;
  width: 96px;
  height: 1px;
  background: #1677ff;
}
.contact .section-children {
  position: absolute;
  left: 170px;
  top: 80px;
  font-weight: 300;
  font-size: 18px;
}
</style>
