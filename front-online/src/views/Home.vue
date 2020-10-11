<template>
  <a-carousel autoplay>
    <div><h3><img src="../assets/home/banner/banner1.png"></h3></div>
    <div><h3><img src="../assets/home/banner/banner2.png"></h3></div>
    <div><h3><img src="../assets/home/banner/banner3.png"></h3></div>
    <div><h3><img src="../assets/home/banner/banner4.png"></h3></div>
  </a-carousel>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  async created () {
    const options = { limit: 10, offset: 0 }
    await this.$store.dispatch('feedback/getFeedbackList', options)
  }
}
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 250px;
  line-height: 250px;
  overflow: hidden;
  background-color: grey;
}

.ant-carousel >>> .slick-slide h3 {
  color: #976262;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
