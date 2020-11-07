<template>
  <div>
    <div class="left-top-nav">
      <router-link class="link-item"
                   to="demoAndApi"
                   target="_blank">API</router-link><br />
      <router-link class="link-item"
                   to="demoAndApi">示例</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // console.log('app.vue');
  },
  beforeDestroy () {

  },
  methods: {

  }
}
</script>

<style lang="less">
body {
  padding: 20px;
}
</style>
