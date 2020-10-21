<template>
  <div>
    <div class="main-page-wrapper">
      <app-header />
      <nuxt />
      <app-footer />
    </div>

    <app-scroll-top />

    <CookieControl :locale="$t('base.cookieLocale')" />
  </div>
</template>

<script>
import AppHeader from '~/layouts/header/index.vue'
import AppFooter from '~/layouts/footer/index.vue'
import AppScrollTop from '~/layouts/scroll-to-top/index.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppScrollTop
  }
}
</script>
