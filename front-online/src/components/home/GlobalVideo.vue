<template>
  <div>
    <div class="banner-text-inner-bg___logo">
      <video src="https://shiyuq.oss-cn-shanghai.aliyuncs.com/hide-on-bush/logo.mp4" loop autoplay></video>
    </div>
    <div class="banner-text-content">
      <div class="banner-text-wrapper">
        <h1>我们相信 技术的发展<br />让天下没有难做的生意</h1>
        <a-icon type="play-circle" style="fontSize: 40px;" class="banner-text-play" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-text-inner-bg___logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  transform: translate(0px, 0px);
  background-size: cover;
  .bg-video {
    object-fit: cover;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
}
.banner-text-content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  .banner-text-wrapper {
    text-align: center;
    h1 {
      color: #fff;
      font-weight: 300;
      font-size: 60px;
      line-height: normal;
      margin-bottom: 32px;
    }
    .banner-text-play {
      color: #fff;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        color: #1677ff;
      }
    }
  }
}
</style>
