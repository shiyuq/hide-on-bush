<template>
  <a-carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script>
export default {
  data () {
    return {
      name: 'syq'
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
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
