<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
    </header>
    <div class="header">
      <div class="pic">
        <span class="title">
          数字生活
        </span>
        <div class="header-description">
          <h2>今天，支付宝已经从一个支付工具，成长为一站式数字<br/>生活平台。通过开放平台战略，
            引入数字金融、政务民<br/>生、本地生活等各领域服务方，为消费者提供一站式数<br/>字生活服务。</h2>
        </div>
      </div>
    </div>
    <div class="convenient-life">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">让生活更便捷</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            从生活缴费、社保公积金，到电子结婚证，人们在支付宝上可办理超过1000项城市服务，
            以及衣食住行等民生服务，随时随地享受无门槛的数字生活，感受数字化城市治理的智慧与友好。
          </p>
        </div>
      </div>
      <div class="left">
        <div class="left-one">
        </div>
        <div class="explation">
          餐厅服务员田智勇第一次用支付宝买票坐上回家的高铁。眼下在全国数百城市，数亿用户刷支付宝
          就可购买火车票，乘公交、地铁，借单车。
        </div>
        <div class="left-two">
        </div>
        <div class="explation">
          用支付宝挂号缴费，省去了跑上跑下的麻烦。眼下，超过一半用户上支付宝，不只是为支付，而是为了使用各种服务。
        </div>
        <div class="left-three">
        </div>
        <div class="explation">
          阿拉善牧民梁存新像养崽一样看守着花棒，他盼着这里连成花海，人们就可以来旅游了。截至2020年5月底，蚂蚁森林的参与者已超5.5亿，累计种植和养护真树超过2亿棵。
        </div>
      </div>
      <div class="right">
        <div class="right-one">
        </div>
        <div class="explation">
          80后白领沈晨霞每次出国都会在机场给亲友带手信，用支付宝付款，不用排队换汇。从PC支付到移动支付，支付宝推进支付方式不断升级。
        </div>
        <div class="right-two">
        </div>
        <div class="explation">
          手机买票、线上预约、扫码入园……2020年五一小长假，全国近1000家景区在支付宝上线“分时预约”，加快了无接触数字化服务进程。
        </div>
      </div>
    </div>
    <div class="financial-inclusion">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">让金融更普惠</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            我们致力于给世界带来平等的金融服务。数据分析、云计算、AI、区块链等技术的运用，让每个有信用的个体，都可以享有安全、触手可及、绿色可持续的普惠金融服务。
          </p>
        </div>
      </div>
      <div class="left">
        <div class="left-one">
        </div>
        <div class="explation">
          藏族小伙次仁格旦在海拔5200米的珠峰大本营开了一间“帐篷茶馆”。到珠峰旅游的各地游客都可以用支付宝购买他家的甜茶。
        </div>
        <div class="left-two">
        </div>
        <div class="explation">
          95后相互宝调查员陈杰每天奔走在一线，核实申请互助金成员的病情，守护相互宝的公平和信任。
        </div>
      </div>
      <div class="right">
        <div class="right-one">
        </div>
        <div class="explation">
          河南80后金琳琳在兰考老家，通过网商银行申请到3.5万元贷款，靠养鸵鸟年收入超40万元。
        </div>
        <div class="right-two">
        </div>
        <div class="explation">
          自从把余钱存进余额宝，妈妈发现，每天的早餐钱都解决了。支付宝理财平台与超过100家银行、基金公司等金融机构合作，为超6亿用户提供包括余额宝在内的多种理财产品。
        </div>
      </div>
    </div>
    <div class="accessibility-program">
      <div class="left">
      </div>
      <div class="right">
        <div class="slick-list">
          <h2>无障碍计划</h2>
          <div class="example">
            上海女孩思颖，靠着一根盲杖、一部手机，第一次独立出国旅行。虽然语言不通、眼睛也看不见，但那些她在中国熟悉的暖科技，让她在首尔也感受到“风和日丽”。2016年6月，支付宝上线业内首个密码键盘读屏功能，为至少600万视障人士服务；2020年，支付宝成为中国首个通过国际信息无障碍标准WCAG2.1检测的手机应用程序。
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
  background-image: url('../../assets/数字生活.jpeg');
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
.convenient-life {
  position: relative;
  margin-top: 300px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.section-header {
  position: absolute;
  left: 170px;
  margin-bottom: 30px;
  padding-top: 3px;
}

.section-title {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  font-weight: 400;
  font-size: 26px;
}

.section-title::before {
  position: absolute;
  content: '';
  top: 1px;
  left: 0;
  width: 96px;
  height: 1px;
  background: #1677ff;
}
.convenient-life{
  position: relative;
}
.convenient-life .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 100px;
}

.convenient-life .section-children-content p {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-top: -25px;
}
.convenient-life .left{
  position: absolute;
  left: 170px;
  top: 200px;
  width: 378.25px;
}
.convenient-life .left .left-one{
  padding: 240px 0 0;
  background-image: url('../../assets/train.jpg');
  background-position: 50%;
  background-size:115%;
  margin-bottom: 16px;
}
.convenient-life .left .left-two{
  padding: 240px 0 0;
  background-image: url('../../assets/hospital.jpg');
  background-position: 50%;
  background-size:115%;
  margin-top: 70px;
  margin-bottom: 16px;
}
.convenient-life .left .left-three{
  padding: 240px 0 0;
  background-image: url('../../assets/scoparium.jpg');
  background-position: 50%;
  background-size:115%;
  margin-top: 70px;
  margin-bottom: 16px;
}
.convenient-life .right{
  position: absolute;
  left: 50%;
  top: 200px;
  width: 378.25px;
}
.convenient-life .right .right-one{
  padding: 240px 0 0;
  background-image: url('../../assets/shopping.jpg');
  background-position: 50%;
  background-size:100%;
  margin-bottom: 16px;
}
.convenient-life .right .right-two{
  padding: 240px 0 0;
  background-image: url('../../assets/traviel.jpg');
  background-position: 50%;
  background-size:100%;
  margin-top: 70px;
  margin-bottom: 16px;
}
.financial-inclusion{
  position: relative;
  top: 1450px;
}
.financial-inclusion .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 100px;
}

.financial-inclusion .section-children-content p {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-top: -25px;
}
.financial-inclusion .left{
  position: absolute;
  left: 170px;
  top: 160px;
  width: 378.25px;
}
.financial-inclusion .left .left-one{
  padding: 240px 0 0;
  background-image: url('../../assets/tent.jpg');
  background-position: 50%;
  background-size:115%;
  margin-bottom: 16px;
}
.financial-inclusion .left .left-two{
  padding: 240px 0 0;
  background-image: url('../../assets/mutual.jpg');
  background-position: 50%;
  background-size:115%;
  margin-top: 70px;
  margin-bottom: 16px;
}
.financial-inclusion .right{
  position: absolute;
  left: 50%;
  top: 160px;
  width: 378.25px;
}
.financial-inclusion .right .right-one{
  padding: 240px 0 0;
  background-image: url('../../assets/ostrich.jpg');
  background-position: 50%;
  background-size:100%;
  margin-bottom: 16px;
}
.financial-inclusion .right .right-two{
  padding: 240px 0 0;
  background-image: url('../../assets/breakfast.jpg');
  background-position: 50%;
  background-size:100%;
  margin-top: 98px;
  margin-bottom: 16px;
}
.accessibility-program{
  margin-top: 2500px;
  position: relative;
}
.accessibility-program .left{
  width: 663px;
  height: 596px;
  background-image: url('../../assets/korea.jpg');
  background-position: top;
  background-size:cover;
}
.accessibility-program .right{
  position: absolute;
  right: 0;
  top: 45px;
  width: 600px;
  height: 510px;
  background-color: #f7f8f8;
}
.accessibility-program .right .slick-list{
  padding: 100px 90px;
}
.accessibility-program .right .slick-list h2{
  margin-bottom: 16px;
  color: #383735;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
}
.accessibility-program .right .slick-list .example{
  color: #383735;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
}
</style>
