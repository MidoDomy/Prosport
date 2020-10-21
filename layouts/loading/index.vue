<template>
  <transition name="load">
    <div v-if="isLoading" class="loading-container justify-content-center align-items-center">
      <div class="circle-container">
        <div class="circle circle1" />
        <div class="circle circle2" />
        <div class="circle circle3" />
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.loadContent()
  },
  methods: {
    loadContent () {
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    }
  }
}
</script>
