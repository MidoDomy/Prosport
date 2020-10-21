<template>
  <div class="header" :class="{ 'header-small': !showHeader }">
    <top-bar />

    <b-container>
      <b-row class="justify-content-between align-items-center">
        <b-col class="logo-col">
          <logo />
        </b-col>

        <b-col cols="3" class="navigation-col text-right">
          <navigation />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TopBar from '~/components/header/top-bar.vue'
import Logo from '~/components/header/logo.vue'
import Navigation from '~/components/header/navigation.vue'

export default {
  components: {
    TopBar,
    Logo,
    Navigation
  },
  data () {
    return {
      showHeader: true,
      lastScrollPosition: 0,
      scrollValue: 0
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
        this.showHeader = true
      } else {
        this.showHeader = false
      }
    }
  }
}
</script>
