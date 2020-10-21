<template>
  <div class="title-section">
    <b-container>
      <h1 class="title text-uppercase">
        {{ $t('titleSection.text') }}
        <nuxt-link :to="localePath('OurCompetition', $t('base.language'))">
          {{ $t('titleSection.linkText') }}.
        </nuxt-link>
      </h1>
    </b-container>
  </div>
</template>
