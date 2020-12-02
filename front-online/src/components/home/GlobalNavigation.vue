<template>
  <header class="header-home">
    <div class="header-box__nav">
      <a class="header-box-logo__link" href="/">
        <div class="header-box-logo__picture">
          <img src="@/assets/home/logo/white-logo.png" alt="logo" />
        </div>
      </a>
      <nav class="header-box-nav" style="margin-left: 76px; flex: 100% 1 1">
        <ul class="header-box-nav__items">
          <li class="header-box-nav__item">
            <a href="/about">关于我们</a>
            <div class="content-box__company-point">
              <div class="content-box__each-point">
                <ul>
                  <li>
                    <a href="/about/introduction" class="content-box__each-point-link">集团介绍</a>
                    <a href="/about/history" class="content-box__each-point-link">公司历程</a>
                    <a href="/about/leadership" class="content-box__each-point-link">管理团队</a>
                  </li>
                  <li>
                    <a href="/about/join-us" class="content-box__each-point-link">加入我们</a>
                    <a href="/about/social-responsibility" class="content-box__each-point-link">社会责任</a>
                    <a href="/about/our-offices" class="content-box__each-point-link">办公地点</a>
                  </li>
                  <li>
                    <a href="/about/integrity-compliance" class="content-box__each-point-link">诚信合规</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="header-box-nav__item">
            <a href="/technology">科技创新</a>
          </li>
          <li class="header-box-nav__item">
            <a href="/digital-life">数字生活</a>
          </li>
          <li class="header-box-nav__item">
            <a href="/open-platform">平台开放</a>
          </li>
          <li class="header-box-nav__item">
            <a href="/global-inclusion">全球普惠</a>
          </li>
          <li class="header-box-nav__item">
            <a href="/ir/notices">投资者关系</a>
          </li>
          <li class="header-box-nav__item">
            <a href="/news-media">新闻及媒体资源</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
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
.header-home {
  background-color: gray;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 109px;
  overflow: visible;
  transition: all 3s cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: transform;
  .header-box__nav {
    display: flex;
    height: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    max-width: 1350px;
    margin-right: auto;
    margin-left: auto;
  }
  .header-box-logo__link {
    display: inline-block;
    color: #383735;
    vertical-align: middle;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .header-box-logo__link img {
    display: inline-block;
    max-width: 266px;
    border: none;
  }
  .header-box-logo__picture {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 78px;
    margin: 15.5px 0;
  }
  .header-box-nav__items {
    display: inline-block;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .header-box-nav__item {
      position: relative;
      display: inline-block;
      height: 60px;
      margin-top: 24px;
      margin-bottom: 24px;
      padding: 0 13px;
      color: #383735;
      line-height: 60px;
      cursor: pointer;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      a {
        color: white;
        font-size: 16px;
        letter-spacing: 1.2px;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
      }
      &::before {
        position: absolute;
        top: -24px;
        left: 50%;
        width: calc(100% - 39px);
        height: 5px;
        background-color: #1677ff;
        transform: translate(-50%);
        opacity: 0;
        transition: all .6s cubic-bezier(.165,.84,.44,1);
        content: "";
      }
      &:hover {
        max-height: 200px;
        margin-top: 0;
        opacity: 1;
        pointer-events: auto;
        .content-box__company-point {
          max-height: 200px;
          margin-top: 0;
          opacity: 1;
          pointer-events: auto;
        }
      }
      &:hover::before {
        bottom: 0;
        opacity: 1;
      }
      .content-box__company-point {
        position: absolute;
        top: 100%;
        left: 0;
        display: block;
        width: 100%;
        height: auto;
        max-height: 0;
        padding: 21px 0 15px;
        opacity: 0;
        transition: all .6s cubic-bezier(.165,.84,.44,1);
        pointer-events: none;
        will-change: transform,opacity,height;
        &::before {
          position: absolute;
          top: 24px;
          left: -100vw;
          width: 300vw;
          height: 100%;
          background: hsla(0,0%,95.3%,.95);
          content: "";
        }
        &::after {
          position: absolute;
          top: 16px;
          left: 50%;
          z-index: 0;
          width: 0;
          height: 0;
          border-right: 7.5px solid transparent;
          border-bottom: 9px solid hsla(0,0%,95.3%,.95);
          border-left: 7.5px solid transparent;
          transform: translateX(-50%);
          opacity: inherit;
          transition: all .6s cubic-bezier(.165,.84,.44,1);
          content: "";
        }
        .content-box__each-point {
          display: block;
          zoom: 1;
          position: relative;
          top: 24px;
          min-width: 38vw;
          padding-left: 19.5px;
          white-space: nowrap;
          ul {
            float: left;
            li {
              position: relative;
              // margin-right: 63px;
              line-height: 24px;
              // opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
