<template>
  <div class="header-banner">
    <div class="right"></div>
    <div class="left">
      <div class="left-content">
        <div class="content-text">
          <h2>全球普惠</h2>
          <p>在全球范围内分享技术，支付宝和数字钱包伙伴共同服务全球约13亿用户，提供移动支付和数字普惠金融服务。</p>
          <a href="/global-inclusion">
            <span>了解更多</span>
            <span class="gg-arrow-long-right"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.header-banner {
  display: flex;
  flex-flow: row nowrap;
  padding: 100px 0;
  .left {
    display: flex;
    flex-flow: column wrap;
    background-color: #fff;
    width: 50%;
    .left-content {
      height: 100%;
      margin: 50px 0;
      background-color: #f7f8f8;
      .content-text {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin: 0 100px;
        height: 100%;
        align-content: center;
        h2 {
          margin-bottom: 16px;
          color: #383735;
          font-weight: 400;
          font-size: 30px;
          line-height: 35px;
        }
        a {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          margin-top: 64px;
          position: relative;
          span {
            position: relative;
            display: inline-block;
            margin-right: 20px;
            vertical-align: middle;
            font-size: 15px;
            color: rgb(56, 55, 53);
          }
          .gg-arrow-long-right {
              box-sizing: border-box;
              position: relative;
              display: block;
              transform: scale(var(--ggs,1));
              border-top: 2px solid transparent;
              border-bottom: 2px solid transparent;
              box-shadow: inset 0 0 0 2px;
              width: 35px;
              height: 6px;
              color: #1677ff;
              transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
              &::after {
                content: "";
                display: block;
                box-sizing: border-box;
                position: absolute;
                width: 10px;
                height: 10px;
                border-top: 2px solid;
                border-right: 2px solid;
                transform: rotate(45deg);
                right: 0;
                bottom: -4px;
              }
          }
          &:hover {
            .gg-arrow-long-right {
              width: 50px;
            }
          }
        }
      }
    }
  }
  .right {
    background-image: url('../../assets/home/banner/banner-image2.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 50%;
    height: 600px;
  }
}
</style>
