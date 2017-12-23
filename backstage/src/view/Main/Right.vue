<template>
  <div class="right">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/view/Main/Header'
export default {
  components: {
    Header: Header
  }
}
</script>

<style>
.right{
  flex: 1;
}
</style>
