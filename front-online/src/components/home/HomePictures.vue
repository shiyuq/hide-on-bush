<template>
  <div>
    <a-carousel autoplay>
      <div><h3><img src="@/assets/home/banner/banner1.png"></h3></div>
      <div><h3><img src="@/assets/home/banner/banner2.png"></h3></div>
      <div><h3><img src="@/assets/home/banner/banner3.png"></h3></div>
      <div><h3><img src="@/assets/home/banner/banner4.png"></h3></div>
    </a-carousel>
  </div>
</template>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.ant-carousel >>> .slick-slide h3 {
  color: #976262;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%,-50%);
}
</style>
