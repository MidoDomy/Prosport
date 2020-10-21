<template>
  <div class="industry-section text-center">
    <b-container>
      <h1 class="industry-title">
        <nuxt-link :to="localePath('InnovationAndCommitment', $t('base.language'))">
          {{ $t('industry.title') }}
        </nuxt-link>
      </h1>

      <div class="industry-actions">
        <nuxt-link :to="localePath('InnovationAndCommitment', $t('base.language'))" class="btn-industry">
          <span>{{ $t('industry.linkText') }}</span>

          <img class="arrow-right" src="~/assets/images/icons/arrow-right.svg">
        </nuxt-link>
      </div>
    </b-container>
  </div>
</template>
