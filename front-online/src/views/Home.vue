<template>
  <div>
    <header>
      <GlobalNavigation
        :showTitle="false"
      ></GlobalNavigation>
      <GlobalVideo></GlobalVideo>
    </header>
    <section class="content">
      <GlobalContent></GlobalContent>
    </section>
    <section class="banner">
      <GlobalBannerOne></GlobalBannerOne>
      <GlobalBannerTwo></GlobalBannerTwo>
    </section>
    <section class="report">
      <GlobalReport></GlobalReport>
    </section>
    <section class="socialResponsibility">
      <GlobalSocialResponsibility></GlobalSocialResponsibility>
    </section>
    <footer>
      <GlobalFooter></GlobalFooter>
    </footer>
  </div>
</template>

<script>
import GlobalNavigation from '@/components/home/GlobalNavigation'
import GlobalVideo from '@/components/home/GlobalVideo'
import GlobalContent from '@/components/home/GlobalContent'
import GlobalBannerOne from '@/components/home/GlobalBannerOne'
import GlobalBannerTwo from '@/components/home/GlobalBannerTwo'
import GlobalReport from '@/components/home/GlobalReport'
import GlobalSocialResponsibility from '@/components/home/GlobalSocialResponsibility'
import GlobalFooter from '@/components/home/GlobalFooter'

export default {
  name: 'HomePage',
  components: {
    GlobalNavigation,
    GlobalVideo,
    GlobalContent,
    GlobalBannerOne,
    GlobalBannerTwo,
    GlobalReport,
    GlobalSocialResponsibility,
    GlobalFooter
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
