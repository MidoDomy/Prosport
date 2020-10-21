<template>
  <div class="page-wrapper">
    <loading-content />
    <app-banner-slider />
    <app-title-section />
    <app-grid-area />
    <app-industry />
    <app-info />
    <app-news-slider />
    <!-- <app-clients />
    <app-properties /> -->
  </div>
</template>

<script>
import LoadingContent from '~/layouts/loading/index.vue'
import AppBannerSlider from '~/layouts/banner-slider/index.vue'
import AppTitleSection from '~/layouts/title-section/index.vue'
import AppGridArea from '~/layouts/grid-area/index.vue'
import AppIndustry from '~/layouts/industry/index.vue'
import AppInfo from '~/layouts/info/index.vue'
import AppNewsSlider from '~/layouts/news-slider/index.vue'
// import AppClients from '~/layouts/clients/index.vue'
// import AppProperties from '~/layouts/properties/index.vue'

export default {
  components: {
    LoadingContent,
    AppBannerSlider,
    AppTitleSection,
    AppGridArea,
    AppIndustry,
    AppInfo,
    AppNewsSlider
    // AppClients,
    // AppProperties
  }
}
</script>
