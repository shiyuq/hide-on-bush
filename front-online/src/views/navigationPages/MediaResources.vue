<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
    </header>
    <div class="header">
      <div class="pic">
        <span class="title">
          新闻及媒体资源
        </span>
      </div>
    </div>
    <div class="latest-news">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">最新新闻</h1>
          <div class="more">
            <a href="">
              <span class="more-text">了解更多</span>
              <span class="arrow"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <div class="one">
            <a href="">
              <div class="pic"></div>
              <p>2020年9月28日</p>
              <div>香港蚂蚁银行正式营业</div>
            </a>
          </div>
          <div class="two">
            <a href="">
              <div class="pic"></div>
              <p>2020年9月27日</p>
              <div>科技赋能 蚂蚁集团“外滩大会”助力更普惠的未来</div>
            </a>
          </div>
          <div class="three">
            <a href="">
              <div class="pic"></div>
              <p>2020年7月23日</p>
              <div>蚂蚁链全新发布 将致力于构建全球最大的价值网络</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="left">
        <div class="section-header">
          <div class="section-header-title">
            <h1 class="section-title">资料库</h1>
            <div class="more">
              <a href="">
                <span class="more-text">了解更多</span>
                <span class="arrow"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="section-header">
          <div class="section-header-title">
            <h1 class="section-title">客户与公众沟通部 联系方式</h1>
            <div class="email">
              globalcomms@antgroup.com
            </div>
          </div>
        </div>
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
  background-image: url('../../assets/news.jpeg');
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
.latest-news {
  position: relative;
  margin-top: 102px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.latest-news .section-header {
  display: inline-block;
  position: absolute;
  left: 170px;
  margin-bottom: 30px;
  padding-top: 3px;
}

.latest-news .section-title {
  display: inline-block;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  font-weight: 400;
  font-size: 26px;
}

.latest-news .section-title::before {
  position: absolute;
  content: '';
  top: 1px;
  left: 0;
  width: 96px;
  height: 1px;
  background: #1677ff;
}

.latest-news .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 100px;
}
.latest-news .more{
  position: absolute;
  width: 100%;
  top: 20px;
  left: 705px;
  /* right: 0; */
}
.latest-news .more .more-text{
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  margin-right: 20px;
}
.latest-news .arrow{
  position: absolute;
  top: 14px;
  display: inline-block;
  width: 35px;
  height: 6px;
  box-shadow: inset 0 0 0 2px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  color: #1677ff;
  transition: all 0.3s;
}
.latest-news .arrow:hover{
  width: 50px;
}
.latest-news .arrow::after{
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  right: 0;
  bottom: -4px;
}
.section-children-content{
  display: flex;
  margin: -16px;
}
.section-children-content .one,
.two,
.three{
  width: 33.33%;
  padding: 16px;
}
.section-children-content .pic{
  padding-top: 55%;
  background-position: 50%;
  background-size: 100%;
  margin-bottom: 16px;
}
.section-children-content .one .pic{
  background-image: url('../../assets/antbank.jpg');
}
.section-children-content .two .pic{
  background-image: url('../../assets/conference.jpg');
}
.section-children-content .three .pic{
  background-image: url('../../assets/antchain.png');
}
.section-children-content p{
  color: #1677ff;
  font-size: 12px;
  line-height: 35px;
}
.contact {
  position: relative;
  margin-top: 420px;
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
.contact .more a{
  display: inline-block;
  margin-top: 20px;
}
.contact .more .more-text{
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  margin-right: 20px;
}
.contact .arrow{
  position: relative;
  display: inline-block;
  width: 35px;
  height: 6px;
  box-shadow: inset 0 0 0 2px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  color: #1677ff;
  transition: all 0.3s;
}
.contact .arrow:hover{
  width: 50px;
}
.contact .arrow::after{
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  right: 0;
  bottom: -4px;
}
.contact .right{
  position: absolute;
  width: 50%;
  left: 33%;
}
.contact .email{
  margin-top: 20px;
  font-weight: 300;
  font-size: 18px;
  color: #383735;
}
</style>
