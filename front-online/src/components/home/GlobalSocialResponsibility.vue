<template>
  <div class="header-social__responsibility">
    <div class="social-box">
      <h2>社会责任</h2>
      <p>我们相信，科技是这个时代最大的公益。从“让天下没有难做的生意”的使命出发，我们秉持公益的初心、商业的手法、科技的力量，为世界带来更多平等的机会。</p>
      <a href="/about/social-responsibility">
        <span>了解更多</span>
        <span class="gg-arrow-long-right"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalSocialResponsibility',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.header-social__responsibility {
  background-image: url('../../assets/home/responsibility/responsibility1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  height: 460px;
  margin-top: 300px;
  background-position: 50%;
  &::before {
    position: absolute;
    top: -79px;
    left: 50%;
    width: 90%;
    height: 79px;
    background: url('../../assets/dot.png') repeat;
    background-position: 50%;
    transform: translateX(-50%);
    content: "";
  }
  .social-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 1350px;
    height: 268px;
    margin: 0 auto;
    color: #fff;
    h2 {
      margin-bottom: 16px;
      color: #fff;
      font-weight: 300;
      font-size: 70px;
      line-height: 70px;
    }
    p {
      max-width: 660px;
      margin-bottom: 60px;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #fff;
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
        color: #fff;
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
</style>
