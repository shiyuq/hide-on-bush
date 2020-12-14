<template>
  <header class="header-content" :class="[{'header-active__content': !isTop}]">
  </header>
</template>

<script>
export default {
  data () {
    return {
      isTop: true
    }
  },
  methods: {},
  mounted () {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isTop = !scrollTop
    }, true)
  }
}
</script>

<style scoped lang="scss">
</style>
