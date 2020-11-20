<template>
  <div>
    <a-affix :offset-top="offsetTop">
      <a-menu class="b-menu-display" mode="horizontal" @click="handleClick">
        <a-menu-item key="1">
          <a-icon type="mail" />
          Navigation One
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="calendar" />
          Navigation Two
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
          <a-menu-item key="3">
            Option 3
          </a-menu-item>
          <a-menu-item key="4">
            Option 4
          </a-menu-item>
          <a-sub-menu key="sub1-2" title="Submenu">
            <a-menu-item key="5">
              Option 5
            </a-menu-item>
            <a-menu-item key="6">
              Option 6
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-menu-item key="10">
            Option 10
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="login">
          <a-icon type="login" />
          login
        </a-menu-item>
      </a-menu>
    </a-affix>
  </div>
</template>

<script>
export default {
  data () {
    return {
      offsetTop: 0
    }
  },
  methods: {
    handleClick (e) {
      if (e.key === 'login') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.b-menu-display {
  border-bottom: 0px;
}
</style>
