<template>
  <div class="scroll-to-top-container" :class="{ 'active': showBtn }">
    <button class="btn-scroll-up" @click="scrollUp">
      <img class="img-fluid" src="@/assets/images/icons/arrow-up.svg">
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBtn: false
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (window.pageYOffset < 400) {
        this.showBtn = false
      } else {
        this.showBtn = true
      }
    },
    scrollUp () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
