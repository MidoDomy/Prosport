<template>
  <div class="contact-page subpages">
    <loading-content />

    <div class="main-content">
      <div class="banner">
        <b-container>
          <h1 class="page-title">
            {{ $t('contactSection.title') }}
          </h1>

          <app-contact class="text-left" />
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingContent from '~/layouts/loading/index.vue'
import AppContact from '~/layouts/contact/index.vue'

export default {
  components: {
    LoadingContent,
    AppContact
  }
}
</script>
