<template>
  <div>
      <!-- <Header/> -->
      <main>
          <Left/>
          <Right/>
      </main>
  </div>
</template>

<script>
import Header from '@/view/Main/Header'
import Left from '@/view/Main/Left'
import Right from '@/view/Main/Right'
export default {
  data () {
    return {
    }
  },
  components: {
    Header: Header,
    Left: Left,
    Right: Right
  }
}
</script>

<style>
main{
  display: flex;
}
</style>
