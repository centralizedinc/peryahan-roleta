<template>
  <bounce/>
</template>

<script>
import Bounce from '@/components/Spin'
export default {
  name: 'App',
  components: { Bounce }
}
</script>

<style>
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
