<template>
  <div class="about-us-page subpages">
    <loading-content />

    <div class="main-content">
      <div class="banner">
        <b-container>
          <h1 class="page-title">
            {{ $t('about.pageTitle') }}
          </h1>

          <p>
            {{ $t('about.text1') }}
          </p>
          <p>
            {{ $t('about.text2') }}
          </p>
          <p>
            {{ $t('about.text3') }}
          </p>
          <p>
            {{ $t('about.text4') }}
          </p>
          <p>
            {{ $t('about.text5') }}
          </p>
          <p>
            {{ $t('about.text6') }}
          </p>
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
