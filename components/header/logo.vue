<template>
  <div class="logo-container position-relative">
    <nuxt-link :to="localePath('/', $t('base.language'))">
      <img class="img-fluid logo-normal" src="@/assets/images/prosportcoin-logo-full.png" alt="Logo" :class="{ 'activate-dark-logo' : (this.$route.path.includes('Competition') || this.$route.path.includes('InnovationAndCommitment') || this.$route.path.includes('Contact') || this.$route.path.includes('News'))}">
      <img
        class="img-fluid logo-white"
        src="@/assets/images/logo-white.png"
        alt="Logo"
        :class="{ 'deactivate-white-logo' : (this.$route.path.includes('Competition') || this.$route.path.includes('InnovationAndCommitment') || this.$route.path.includes('Contact') || this.$route.path.includes('News'))}"
      >
    </nuxt-link>
  </div>
</template>
