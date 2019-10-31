<template>
  <div id="game-container" v-if="downloaded" />
  <div class="placeholder" v-else>
    Downloading ...
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return {
      downloaded: false
    }
  },
  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ '@/game/bounce')
    this.downloaded = true
    this.$nextTick(() => game.launch())
  }
}
</script>

<style>

</style>