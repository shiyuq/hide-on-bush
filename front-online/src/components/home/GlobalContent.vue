<template>
  <div class="header-content">
    <div class="content-ambition" :class="[{'header-active__content': !isTop}]">
      <div class="content_text-box">
        <div class="content_text-title">
          我们的愿景是构建未来服务业的数字化基础设施，为世界带来更多微小而美好的改变。我们不追求大，不追求强，追求成为一家能健康成长102年的好公司。
        </div>
        <div class="content_text-wish">
          我们希望：<br>
          每一个个体可以享受到普惠、绿色的金融服务；<br>
          每一家小微企业拥有平等的发展机会；<br>
          通过开放合作，让数字生活触手可及。<br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTop: true
    }
  },
  methods: {},
  mounted () {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isTop = !scrollTop
    }, true)
  }
}
</script>

<style scoped lang="scss">
.header-content {
  box-sizing: border-box;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0;
  padding-left: 0;
  .header-active__content {
    margin-top: -55px;
    background-color: #fff;
  }
  .content-ambition {
    display: flex;
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 80px;
    flex-flow: row wrap;
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    // cubic-bezier(0.68, -0.55, 0.27, 1.55) 缓冲效果
    .content_text-box {
      width: 100%;
    }
    .content_text-title {
      padding: 55px 85px 0 85px;
      background-color: #fff;
      opacity: 1;
      transform: translate(0px, 0px);
      margin-bottom: 86px;
      color: #1677ff;
      font-size: 34px;
      line-height: 44px;
      word-break: break-word;
    }
    .content_text-wish {
      padding: 0 85px;
      color: #000;
      font-weight: 500;
      font-size: 26px;
      line-height: 38px;
    }
  }
}
</style>
