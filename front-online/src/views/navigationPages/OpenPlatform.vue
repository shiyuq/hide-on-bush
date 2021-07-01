<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
    </header>
    <div class="header">
      <div class="pic">
        <span class="title">
          平台开放
        </span>
        <div class="header-description">
          <h2>我们一直致力于打造一个开放的生态系统，从业务开<br/>放、能力开放、技术开放三方面携手合作伙伴向商家和<br/>消费者提供最好的服务，共同推动行业变革，为社会创<br/>造更大的价值。</h2>
        </div>
      </div>
    </div>
    <div class="alipay">
      <div class="left">
      </div>
      <div class="right">
        <div class="slick-list">
          <h2>支付宝开放平台</h2>
          <div class="example">
            我们基于支付宝海量用户，以小程序为主要载体，将强大的支付、营销、安全能力开放给第三方合作伙伴，帮助其创建更具竞争力的应用，让用户获得更丰富的体验，让平台生态更加繁荣，最终实现多方共赢。
          </div>
          <div class="more">
            <a href="">
              <span class="more-text">了解更多</span>
              <span class="arrow"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="global-business">
      <div class="left">
        <div class="slick-list">
          <h2>全球商家开放平台</h2>
          <div class="example">
            与合作伙伴一起，我们为全球商家提供线上和线下多场景，多行业的数字技术解决方案，包括数字支付、数字营销和运营，支持商家更好的服务消费者。
          </div>
          <div class="more">
            <a href="">
              <span class="more-text">了解更多</span>
              <span class="arrow"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="ant-chain">
      <div class="left">
      </div>
      <div class="right">
        <div class="slick-list">
          <h2>蚂蚁链开放联盟链</h2>
          <div class="example">
            这是一个低成本、低门槛开放普惠的区块链服务网络，将企业区块链开发门槛从百万级降低至千元，缩短建链时间至最快一分钟。开放联盟链还与中小企业共享蚂蚁区块链丰富的场景解决方案，助力各行业区块链商业场景快速落地。
          </div>
          <div class="more">
            <a href="">
              <span class="more-text">了解更多</span>
              <span class="arrow"></span>
            </a>
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
body{
  height: 2000px;
}
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
  background-image: url('../../assets/OpenPlatform.jpeg');
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

.header .pic::after {
  position: absolute;
  content: '';
  background: url('../../assets/dot.png') repeat;
  width: 100%;
  height: 124px;
  bottom: -128px;
  left: 0;
}

.header-description {
  position: absolute;
  left: 60px;
  top: 300px;
  padding: 35px 62px;
  margin-top: -30px;
  background: #ffffff;
  z-index: 1;
}

.header-description h2 {
  font-size: 34px;
  font-weight: 300;
  line-height: 50px;
  padding: 20px 50px;
  margin-top: 28px;
}
.alipay{
  margin-top: 350px;
  position: relative;
}
.alipay .left{
  width: 663px;
  height: 596px;
  background-image: url('../../assets/alipay.jpeg');
  background-position: top;
  background-size:cover;
}
.alipay .right{
  position: absolute;
  right: 0;
  top: 45px;
  width: 600px;
  height: 510px;
  background-color: #f7f8f8;
}
.alipay .right .slick-list{
  padding: 100px 90px;
}
.alipay .right .slick-list h2{
  margin-bottom: 16px;
  color: #383735;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
}
.alipay .right .slick-list .example{
  color: #383735;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
}
.slick-list .more a{
  display: inline-block;
  margin-top: 32px;
}
.slick-list .more .more-text{
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  margin-right: 20px;
}
.slick-list .arrow{
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
.slick-list .arrow:hover{
  width: 50px;
}
.slick-list .arrow::after{
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
.global-business{
  margin-top: 160px;
  position: relative;
}
.global-business .right{
  position: absolute;
  right:0;
  top: -37px;
  width: 663px;
  height: 596px;
  background-image: url('../../assets/global-business.jpeg');
  background-position: top;
  background-size:cover;
}
.global-business .left{
  width: 600px;
  height: 510px;
  background-color: #f7f8f8;
}
.global-business .left .slick-list{
  padding: 100px 90px;
}
.global-business .left .slick-list h2{
  margin-bottom: 16px;
  color: #383735;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
}
.global-business .left .slick-list .example{
  color: #383735;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
}
.ant-chain{
  margin-top: 180px;
  position: relative;
}
.ant-chain .left{
  width: 663px;
  height: 596px;
  background-image: url('../../assets/ant-chain.jpeg');
  background-position: top;
  background-size:cover;
}
.ant-chain .right{
  position: absolute;
  right: 0;
  top: 45px;
  width: 600px;
  height: 510px;
  background-color: #f7f8f8;
}
.ant-chain .right .slick-list{
  padding: 100px 90px;
}
.ant-chain .right .slick-list h2{
  margin-bottom: 16px;
  color: #383735;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
}
.ant-chain .right .slick-list .example{
  color: #383735;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
}
</style>
