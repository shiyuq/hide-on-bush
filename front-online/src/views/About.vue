<template>
  <div>
    <header>
      <GlobalNavigation></GlobalNavigation>
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
import GlobalNavigation from '@/components/about/GlobalNavigation'
import GlobalContent from '@/components/about/GlobalContent'
import GlobalBannerOne from '@/components/home/GlobalBannerOne'
import GlobalBannerTwo from '@/components/home/GlobalBannerTwo'
import GlobalReport from '@/components/home/GlobalReport'
import GlobalSocialResponsibility from '@/components/home/GlobalSocialResponsibility'
import GlobalFooter from '@/components/home/GlobalFooter'

export default {
  name: 'About',
  components: {
    GlobalNavigation,
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
