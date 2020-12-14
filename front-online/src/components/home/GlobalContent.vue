<template>
  <div class="header-content">
    <div class="content-ambition" :class="[{'header-active__content': !isTop}]">
      <div class="content_text-title">
        我们的愿景是构建未来服务业的数字化基础设施，为世界带来更多微小而美好的改变。我们不追求大，不追求强，追求成为一家能健康成长102年的好公司。
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
    margin-top: -64px;
    background-color: #fff;
  }
  .content-ambition {
    opacity: 1;
    padding: 0 85px;
    background-color: #fff;
    .content_text-title {
      background-color: #fff;
      opacity: 1;
      transform: translate(0px, 0px);
      margin-bottom: 86px;
      color: #1677ff;
      font-size: 34px;
      line-height: 44px;
      word-break: break-word;
    }
  }
}
</style>
