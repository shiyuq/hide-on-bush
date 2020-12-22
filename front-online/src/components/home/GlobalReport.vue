<template>
  <div class="header-report">
    <div class="header-report__container">
      <div class="report-header">
        <h1>最新报道</h1>
        <div class="report-header__more-news">
          <span class="more-text">更多新闻</span>
          <span class="gg-arrow-long-right"></span>
        </div>
      </div>
      <div class="header-report__items">
        <div class="header-report__item" v-for="news in newsList" :key="news.id">
          <div :style="'background-image: url(' + news.imgUrl + ')'" class="report-image"></div>
          <p>{{ news.date }}</p>
          <div class="item-desc">{{ news.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'GlobalReport',
  data () {
    return {
      newsList: [
        {
          id: 0,
          imgUrl: require('@/assets/home/report/report1.jpg'),
          date: moment().add(-2, 'day').format('YYYY年MM月DD日'),
          title: '香港蚂蚁银行正式营业'
        },
        {
          id: 1,
          imgUrl: require('@/assets/home/report/report2.jpg'),
          date: moment().add(-1, 'day').format('YYYY年MM月DD日'),
          title: '科技赋能 蚂蚁集团“外滩大会”助力更普惠的未来'
        },
        {
          id: 2,
          imgUrl: require('@/assets/home/report/report3.jpg'),
          date: moment().format('YYYY年MM月DD日'),
          title: '蚂蚁链全新发布 将致力于构建全球最大的价值网络社会责任'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.header-report {
  max-width: 1000px;
  margin: 0 auto;
  height: 200px;
  margin-bottom: 200px;
  .header-report__container {
    height: 200px;
    .report-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px;
      h1 {
        position: relative;
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 15px;
        color: #383735;
        font-weight: 400;
        font-size: 26px;
        white-space: nowrap;
        &::before {
          position: absolute;
          top: 1px;
          left: 0;
          width: 96px;
          height: 1px;
          background: #1677ff;
          content: "";
        }
      }
      .report-header__more-news {
        display: flex;
        flex-flow: rows nowrap;
        align-items: center;
        cursor: pointer;
        .more-text {
          position: relative;
          display: inline-block;
          margin-right: 20px;
          vertical-align: middle;
          font-weight: 300;
          font-size: 15px;
          line-height: 30px;
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
    .header-report__items {
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      .header-report__item {
        width: 33.333%;
        padding: 10px;
        cursor: pointer;
        position: relative;
        .report-image {
          height: 188px;
          width: 100%;
          background-size: 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          margin-bottom: 16px;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: hsla(0,0%,100%,.2);
            opacity: 0;
            transition: all .45s cubic-bezier(.165,.84,.44,1);
            content: "";
            pointer-events: none;
          }
          &:hover::before {
            opacity: 1;
          }
        }
        p {
          color: #1677ff;
          font-size: 14px;
          line-height: 35px;
        }
        .item-desc {
          color: #383735;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
