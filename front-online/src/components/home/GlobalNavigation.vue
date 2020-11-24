<template>
  <header class="home-nav home-logo">
    <div class="header-box__nav">
      <a class="header-box-logo-link___1Ffut" href="/">
        <div class="header-box-logo___24G68">
          <img src="https://gw.alipayobjects.com/mdn/rms/afts/img/A*yc04S4iiJI8AAAAAAAAAAAAAARQnAQ" alt="logo">
        </div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.home-nav .home-logo {
  background-color: transparent;
}

.home-logo {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 109px;
  overflow: visible;
  transition: all 3s cubic-bezier(.645,.045,.355,1);
  will-change: transform;
}

.header-box__nav {
  display: flex;
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
}

.home-logo .header-box-logo-link___1Ffut {
    display: inline-block;
    color: #383735;
    vertical-align: middle;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}

.home-logo .header-box-logo-link___1Ffut img {
    display: inline-block;
    max-width: 266px;
    border: none;
}

.home-logo .header-box-logo___24G68 {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 78px;
    margin: 15.5px 0;
}
</style>
