<template>
  <div>
    <div class="b-global-navigation">
      <GlobalNavigation></GlobalNavigation>
    </div>
    <!-- <HomePictures></HomePictures> -->
  </div>
</template>

<script>
import HomePictures from '@/components/home/HomePictures'
import GlobalNavigation from '@/components/home/GlobalNavigation'

export default {
  name: 'HomePage',
  components: {
    HomePictures,
    GlobalNavigation
  },
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
<style scoped lang="scss">
.b-global-navigation {
  display: flex;
  // justify-content: center;
  border-bottom: 1px solid $light-grey;
}
</style>
