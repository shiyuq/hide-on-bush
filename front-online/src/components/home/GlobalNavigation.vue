<template>
  <header class="header-home" :class="[{'header-active__nav': !isTop || showTitle}]">
    <div class="header-box__nav">
      <a class="header-box-logo__link" href="/">
        <div class="header-box-logo__picture">
          <img v-if="isTop && !showTitle" src="@/assets/home/logo/white-logo.png" alt="logo" />
          <img v-else src="@/assets/home/logo/black-logo.png" alt="logo" />
        </div>
      </a>
      <nav class="header-box-nav" style="margin-left: 76px; flex: 100% 1 1;">
        <ul class="header-box-nav__items" :class="[{'header-active__nav-items': !isTop || showTitle}]">
          <li class="header-box-nav__item">
            <a href="/about">关于我们</a>
            <div class="content-box__company-point">
              <div class="content-box__each-point">
                <ul>
                  <li>
                    <a
                      href="/about/introduction"
                      class="content-box__each-point-link"
                    >集团介绍
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/history"
                      class="content-box__each-point-link"
                    >公司历程
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/leadership"
                      class="content-box__each-point-link"
                    >管理团队
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="/about/join-us"
                      class="content-box__each-point-link"
                    >加入我们
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/social-responsibility"
                      class="content-box__each-point-link"
                    >社会责任
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/our-offices"
                      class="content-box__each-point-link"
                    >办公地点
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="/about/integrity-compliance"
                      class="content-box__each-point-link"
                    >诚信合规
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
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
            <div class="content-box__company-point">
              <div class="content-box__each-point">
                <ul>
                  <li>
                    <a
                      href="/news-media/press-releases"
                      class="content-box__each-point-link"
                    >新闻中心
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/news-media/media-library"
                      class="content-box__each-point-link"
                    >资料库
                      <a-icon type="right" style="fontSize: 12px; color: #1677ff" class="each-point-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="header-box-locale___language">
        <div class="header-box-locale-text__language">
          <span
            class="header-box-locale-text-span___language"
            :class="[{'header-active__locale': !isTop || showTitle}]"
          >
            {{ languages[activeLanguageIndex].displayName }}
          </span>
          <!-- <span class="arrow-down"></span> -->
          <div class="locale-overlay__language">
            <ul>
              <li v-for="language in languages" :key="language.id">
                <a href="/" v-if="language.id === activeLanguageIndex" style="color: #1677ff">{{ language.fullName }}</a>
                <a href="/" v-else>{{ language.fullName }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-box-ipv6">
        <div class="ipv6_support">
          <img src="@/assets/ipv6-blue.png" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      requires: false,
      default: true
    }
  },
  data () {
    return {
      isTop: true,
      activeLanguageIndex: 0,
      languages: [
        { id: 0, displayName: '简', fullName: '简体中文' },
        { id: 1, displayName: '繁', fullName: '繁体中文' },
        { id: 2, displayName: 'EN', fullName: 'English' },
        { id: 3, displayName: 'KR', fullName: '한국어' },
        { id: 4, displayName: 'JP', fullName: '日本語' }
      ]
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
.header-home {
  background-color: transparent;
  position: fixed;
  top: -14px;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 109px;
  overflow: visible;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
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
      padding: 0 12px;
      color: #383735;
      line-height: 60px;
      cursor: pointer;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      a {
        color: white;
        font-size: 16px;
        letter-spacing: 1.2px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        content: "";
      }
      &:hover {
        max-height: 200px;
        margin-top: 0;
        opacity: 1;
        pointer-events: auto;
        .content-box__company-point {
          display: block;
          max-height: 200px;
          margin-top: 0;
          opacity: 1;
          pointer-events: auto;
          li {
            margin-top: 0;
            opacity: 1;
          }
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
        display: none;
        width: 100%;
        height: auto;
        padding: 21px 0 15px;
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        will-change: transform;
        &::before {
          position: absolute;
          top: 24px;
          left: -100vw;
          width: 300vw;
          height: 100%;
          background: hsla(0, 0%, 95.3%, 0.95);
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
          border-bottom: 9px solid hsla(0, 0%, 95.3%, 0.95);
          border-left: 7.5px solid transparent;
          transform: translateX(-50%);
          opacity: inherit;
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
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
              margin-right: 63px;
              line-height: 24px;
              &:hover {
                a {
                  color: #1677ff;
                }
                .each-point-icon {
                  visibility: initial;
                }
              }
              a {
                color: #383735;
                font-weight: 300;
                font-size: 15px;
                .each-point-icon {
                  visibility: hidden;
                  margin-left: 6px;
                  transition: all .3s cubic-bezier(.645,.045,.355,1);
                }
              }
            }
          }
          &::after {
            display: block;
            clear: both;
            height: 0;
            font-size: 0;
            visibility: hidden;
            content: " ";
          }
        }
      }
    }
  }
  .header-active__nav-items {
    .header-box-nav__item {
      a {
        color: #383735;
      }
    }
  }
  .header-box-locale___language {
    height: 109px;
    margin-right: 8px;
    color: #fff;
    line-height: 109px;
    .header-box-locale-text__language {
      display: inline-block;
      text-align: center;
      cursor: pointer;
      height: 100%;
    }
    .header-box-locale-text-span___language {
      position: relative;
      font-size: 16px;
      letter-spacing: 1.2px;
      vertical-align: middle;
      &::after {
        content: "";
        width: 12px;
        height: 12px;
        border: solid #1677ff;
        border-width: 0 0 2px 2px;
        transform: translate(-50%, -50%) rotate(-45deg);
        position: absolute;
        left: 200%;
        top: 30%;
      }
    }
    .header-active__locale {
      color: #383735;
    }
    .locale-overlay__language {
      position: relative;
      max-height: 0;
      margin-top: -20px;
      opacity: 0;
      transition: all .45s cubic-bezier(.165,.84,.44,1);
      pointer-events: none;
      ul {
        width: 124px;
        padding: 16px 18px;
        text-align: left;
        background: hsla(0,0%,95.3%,.95);
        li {
          margin: 8px 0;
          line-height: 19px;
          a {
            color: #383735;
            font-size: 13px;
            line-height: 19px;
            letter-spacing: .97px;
            white-space: nowrap;
            &:hover {
              color: #01a1eb;
            }
          }
        }
      }
      &::after {
        position: absolute;
        top: -7.5px;
        left: 50%;
        z-index: 0;
        width: 0;
        height: 0;
        border-right: 7.5px solid transparent;
        border-bottom: 9px solid hsla(0,0%,95.3%,.95);
        border-left: 7.5px solid transparent;
        transform: translateX(-50%);
        opacity: inherit;
        content: "";
      }
    }
    &:hover {
      .locale-overlay__language {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
  .header-box-ipv6 {
    display: flex;
    flex: auto 1 1;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 109px;
    .ipv6_support {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: unset;
        height: 26px;
      }
    }
  }
}
.header-active__nav {
  background-color: #fff;
}
</style>
