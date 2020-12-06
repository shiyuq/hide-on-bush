<template>
  <div>
    <GlobalNavigation></GlobalNavigation>
    <GlobalVideo></GlobalVideo>
  </div>
</template>

<script>
import GlobalNavigation from '@/components/home/GlobalNavigation'
import GlobalVideo from '@/components/home/GlobalVideo'

export default {
  name: 'HomePage',
  components: {
    GlobalNavigation,
    GlobalVideo
  },
  data () {
    return {}
  },
  created () {
  }
}
</script>
<style scoped lang="scss">
</style>
