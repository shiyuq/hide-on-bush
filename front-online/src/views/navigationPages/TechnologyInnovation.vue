<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
    </header>
    <div class="header">
      <div class="pic">
        <span class="title">
          科技创新
        </span>
        <div class="header-description">
          <h2>作为全球科技的领先公司，不断创新并与行业开放共<br/>享，让科技服务更普惠、更便捷、更有温度。</h2>
        </div>
      </div>
    </div>
    <div class="block-chain">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">区块链</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            我们致力于用区块链技术构建新一代的信任机制，提高价值流转和多方协同的效率，赋能实体经济，成为推动数字经济发展的引擎。
            蚂蚁链是我们自主研发、国际领先的金融级联盟区块链平台，具有高性能、高可靠、高安全的特点，能够支撑10亿账户X10亿日交
            易量的超大规模应用。目前，蚂蚁链区域块链专利申请和授权量均为全球第一。
          </p>
        </div>
        <div class="img">
        </div>
        <p>
          2018年6月，AlipayHK联合菲律宾电子钱包GCash上线全球首个区块链跨境汇款服务，为香港和菲律宾居民提供便捷、
          安全、透明、低成本的汇款服务。
        </p>
      </div>
    </div>
    <div class="IoT">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">IoT技术</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            万物互通互联是IoT技术的核心，也是我们重要的技术战略。我们希望使用IoT技术，全面提升蚂蚁的金融生活服务能力，
            为用户创造更便捷的服务和更大的价值。目前，我们已经将IoT技术应用到了包括无人值守、无感支付、智慧门店、智慧
            出行等多个场景。
          </p>
        </div>
        <div class="img">
        </div>
        <p>
          2016年8月，在支付宝支持下，杭州在全国首次实现刷手机二维码乘公交。
        </p>
      </div>
    </div>
    <div class="database">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">数据库</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            计算技术的发展和普及，是实现普惠金融的基础。我们通过十多年的探索和实践，突破一个又一个世界级难题。
            其中，基于通用硬件的OceanBase分布式数据库、SOFA分布式中间件等创新，开创了国产自主研发和世界级分
            布式计算的新格局。
          </p>
        </div>
        <div class="img">
        </div>
        <p>
          蚂蚁自研OceanBase卫冕数据库基准性能测试（TPC-C）世界纪录，tpmC成绩7.07亿，比七个月前的自己提升超11倍。
        </p>
      </div>
    </div>
    <div class="AI">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">人工智能</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            人工智能是我们技术战略的重要组成部分，包含机器学习、图识别、人脸识别、NLP等世界领先的AI领域技术。
            除了提升自身风控决策能力、改善服务体验等，我们还向各行各业输出更快更稳健的核心AI技术能力。
          </p>
        </div>
        <div class="img">
        </div>
        <p class="multi-line-overflow">
          凭借我们人工智能技术的应用，网商银行让原先耗费在人工上的成本被计算机与人工智能所取代，不仅提高了效率，
          更让小微企业降低了贷款成本，实现了"310"（3分钟申请、1秒钟放款、0人工介入）全流程无接触贷款。
        </p>
      </div>
    </div>
    <div class="safety-science">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">安全科技</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            我们致力于推动智能风控、生物核身、数据安全三大安全技术领域的研究和探索，依托八大安全实验室展开
            前沿性安全技术研究，打造全球领先的、全方位的安全防御体系，对用户提供包括资金安全、数据安全在内
            的、多维度的有效保障。同时携手安全生态合作伙伴，打造最受用户信赖的数字生活开放平台。
          </p>
        </div>
        <div class="img">
        </div>
        <p>
          支付宝自主研发的智能风控引擎AlphaRisk，是全球最先进的风控系统之一。在其保护下，支付宝交易风险率
          不到千万分之0.64。
        </p>
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
  background-image: url('../../assets/科技创新.png');
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
.block-chain {
  position: relative;
  margin-top: 192px;
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

.block-chain .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 70px;
}
.block-chain .section-children-content p {
  margin-top: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.block-chain .img{
  padding:39% 0 0;
  background-image: url('../../assets/区块链.jpg');
  background-position: 50%;
  background-size: 100%;
  margin-top: 30px;
  margin-bottom: 16px;
}
.IoT {
  position: relative;
  margin-top: 660px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.IoT .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 70px;
}
.IoT .section-children-content p {
  margin-top: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.IoT .img{
  padding:39% 0 0;
  background-image: url('../../assets/IoT.png');
  background-position: 50%;
  background-size: 100%;
  margin-top: 30px;
  margin-bottom: 16px;
}
.database {
  position: relative;
  margin-top: 610px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.database .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 70px;
}
.database .section-children-content p {
  margin-top: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.database .img{
  padding:39% 0 0;
  background-image: url('../../assets/database.jpg');
  background-position: 50%;
  background-size: 100%;
  margin-top: 30px;
  margin-bottom: 16px;
}
.AI {
  position: relative;
  margin-top: 650px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.AI .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 70px;
}
.AI .section-children-content p {
  margin-top: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.AI .img{
  padding:39% 0 0;
  background-image: url('../../assets/AI.jpeg');
  background-position: 50%;
  background-size: 100%;
  margin-top: 30px;
  margin-bottom: 16px;
}
.multi-line-overflow{
  overflow:hidden;/*超出隐藏*/
  text-overflow:ellipsis;/*文本溢出时显示省略标记*/
  display:-webkit-box;/*设置弹性盒模型*/
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.safety-science {
  position: relative;
  margin-top: 640px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.safety-science .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 70px;
}
.safety-science .section-children-content p {
  margin-top: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.safety-science .img{
  padding:39% 0 0;
  background-image: url('../../assets/safety-science.jpg');
  background-position: 50%;
  background-size: 100%;
  margin-top: 30px;
  margin-bottom: 16px;
}
</style>
