<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
      <GlobalVideo></GlobalVideo>
    </header>
    <section class="content">
      <GlobalContent></GlobalContent>
    </section>
  </div>
</template>

<script>
import GlobalNavigation from '@/components/home/GlobalNavigation'
import GlobalVideo from '@/components/home/GlobalVideo'
import GlobalContent from '@/components/home/GlobalContent'

export default {
  name: 'HomePage',
  components: {
    GlobalNavigation,
    GlobalVideo,
    GlobalContent
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
