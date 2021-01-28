<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
    </header>
    <div class="header">
      <div class="pic">
        <span class="title">
          关于我们
        </span>
        <div class="header-description">
          <h2>我们致力于用科技让普通人和小企业，享受平等的金融<br>和生活服务。</h2>
        </div>
      </div>
    </div>
    <div class="group-introduce">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">集团介绍</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-children-content">
          <p>
            蚂蚁集团是中国最大的移动支付平台支付宝的母公司，也是全球领先的金融科技开放平台，致力于以科技推动包括金融服务业在内的全球现代服务业的数字化升级，携手合作伙伴为消费者和小微企业提供普惠、绿色、可持续的服务，为世界带来微小而美好的改变。
          </p>
        </div>
      </div>
    </div>
    <div class="values">
      <div class="section-header">
        <div class="section-header-title">
          <h1 class="section-title">我们的价值观</h1>
        </div>
      </div>
      <div class="section-children">
        <div class="section-flex">
          <div class="left">
            <div class="left-one option">
              <p class="title">客户第一 员工第二 股东第三</p>
              <div class="expand">+</div>
            </div>
            <div class="left-two option">
              <p class="title">因为信任 所以简单</p>
              <div class="expand">+</div>
            </div>
            <div class="left-three option">
              <p class="title">唯一不变的是变化</p>
              <div class="expand">+</div>
            </div>
          </div>
          <div class="right">
            <div class="right-one option">
              <p class="title">今天最好的表现是明天最低的要求</p>
              <div class="expand">+</div>
            </div>
            <div class="right-two option">
              <p class="title">此时此刻，非我莫属</p>
              <div class="expand">+</div>
            </div>
            <div class="right-three option">
              <p class="title">认真生活 快乐工作</p>
              <div class="expand">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <div class="left">
        <div class="company-history">
          <div class="section-header">
            <div class="section-header-title">
              <h1 class="section-title">公司历程</h1>
              <a href="">
                <div class="img img1">
                </div>
                <div class="explation">起步于2004年的支付宝，蚂蚁集团于2014年正式成立。</div>
              </a>
            </div>
          </div>
        </div>
        <div class="office">
          <div class="section-header">
            <div class="section-header-title">
              <h1 class="section-title">办公地点</h1>
              <a href="">
                <div class="img img2">
                </div>
                <div class="explation">我们的总部位于浙江杭州，在世界各地设有办事处。</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="social-responsibility">
          <div class="section-header">
            <div class="section-header-title">
              <h1 class="section-title">社会责任</h1>
              <a href="">
                <div class="img img1">
                </div>
                <div class="explation1">我们相信，科技是这个时代最大的公益。</div>
              </a>
            </div>
          </div>
        </div>
        <div class="join-us">
          <div class="section-header">
            <div class="section-header-title">
              <h1 class="section-title">加入我们</h1>
              <a href="">
                <div class="img img2">
                </div>
                <div class="explation">一群有情有义的人在一起，做一件有价值有意义的事。</div>
              </a>
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
  background-image: url('../../assets/蚂蚁空间.jpg');
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
.group-introduce {
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

.group-introduce .section-children {
  position: absolute;
  left: 170px;
  right: 270px;
  top: 100px;
}

.group-introduce .section-children-content p {
  margin-top: 0;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
}
.values {
  position: relative;
  margin-top: 290px;
  padding-bottom: 50px;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.section-flex {
  position: absolute;
  width: 65%;
  top: 100px;
  left: 170px;
  right: 270px;
}

.left {
  position: absolute;
  left: 0;
  width: 50%;
}
.left .expand {
  position: absolute;
  top: 23px;
  right: 29px;
  font-weight: 400;
  font-size: 26px;
}

.left-one {
  margin-bottom: 12px;
  background: #f7f8f8;
  padding: 24px 82px 24px 24px;
}

.left-two {
  margin-bottom: 12px;
  background: #f7f8f8;
  padding: 24px 82px 24px 24px;
}

.left-two .expand {
  top: 113px;
}

.left-three {
  margin-bottom: 12px;
  background: #f7f8f8;
  padding: 24px 82px 24px 24px;
}

.left-three .expand {
  top: 201px;
}

.right {
  position: absolute;
  right: 0;
}
.right .expand {
  position: absolute;
  top: 23px;
  right: 25px;
  font-weight: 400;
  font-size: 26px;
}

.right-one {
  background: #f7f8f8;
  padding: 24px 82px 24px 24px;
  margin-bottom: 12px;
}

.right-two {
  background: #f7f8f8;
  padding: 24px 82px 24px 24px;
  margin-bottom: 12px;
}

.right-two .expand {
  top: 113px;
}

.right-three {
  background: #f7f8f8;
  padding: 24px 82px 24px 24px;
}

.right-three .expand {
  top: 201px;
}

.option:hover {
  color: #ffffff;
  background-color: #1677ff;
}
.more{
  position: relative;
  margin-top: 420px;
}
.more .left{
  position: absolute;
  left:0;
}
.more .office{
  margin-top: 490px;
}
.img{
  margin-top: 30px;
  padding:233px 0 0;
  background-position: 50%;
  background-size: 100%;
}
.left .img1{
  background-image: url('../../assets/公司历程.jpg');
  width: 80%;
}
.left .img2{
  background-image: url('../../assets/办公地点.jpg');
  width: 85%;
}
.more .left .explation{
  width: 83%;
  margin-top: 20px;
}
.more .right{
  position: absolute;
  left:35%;
}
.more .join-us{
  margin-top: 490px;
}
.more .right .explation{
  width: 90%;
  margin-top: 20px;
}
.more .right .explation1{
  width: 100%;
  margin-top: 20px;
}
.right .img1{
  background-image: url('../../assets/社会责任.png');
  width: 118%;
}
.right .img2{
  background-image: url('../../assets/加入我们.png');
  width: 88%;
}
</style>
