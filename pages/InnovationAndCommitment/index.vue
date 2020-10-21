<template>
  <div class="inovations-page subpages">
    <loading-content />

    <div class="main-content">
      <div class="banner">
        <b-container>
          <h1 class="page-title">
            {{ $t('innovation.pageTitle') }}
          </h1>

          <ul class="list-unstyled inovations-list">
            <li>{{ $t('innovation.text1') }}</li>
            <li>{{ $t('innovation.text2') }}</li>
            <li>{{ $t('innovation.text3') }}</li>
            <li>{{ $t('innovation.text4') }}</li>
            <li>{{ $t('innovation.text5') }}</li>
            <li>{{ $t('innovation.text6') }}</li>
            <li>{{ $t('innovation.text7') }}</li>
            <li>{{ $t('innovation.text8') }}</li>
          </ul>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingContent from '~/layouts/loading/index.vue'

export default {
  components: {
    LoadingContent
  }
}
</script>
