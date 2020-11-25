<template>
  <header class="header-home">
    <div class="header-box__nav">
      <a class="header-box-logo__link" href="/">
        <div class="header-box-logo__picture">
          <img src="@/assets/home/logo/black-logo.png" alt="logo">
        </div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.header-home {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 109px;
  overflow: visible;
  transition: all 3s cubic-bezier(.645,.045,.355,1);
  will-change: transform;
  .header-box__nav {
    display: flex;
    height: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    max-width: 1350px;
    margin-right: auto;
    margin-left: auto;
  }
  .header-box-logo__link {
    display: inline-block;
    color: #383735;
    vertical-align: middle;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
  }
  .header-box-logo__link img {
    display: inline-block;
    max-width: 266px;
    border: none;
  }
 .header-box-logo__picture {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 78px;
    margin: 15.5px 0;
  }
}
</style>
