<template>
  <div id="app">
    <router-view/>
    <toast></toast>
  </div>
</template>

<script>
import Toast from '@/components/toast/toast.vue'

export default {
  name: 'App',
  components: { Toast }
}
</script>

<style>
@import url(./assets/css/common.css);
</style>
