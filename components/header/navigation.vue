<template>
  <div>
    <div class="menu-bars" :class="[{ 'activate-white-hover' : (this.$route.path.includes('About')) }, { 'active' : navigation} ]" @click="toggleNavigation">
      <div class="bar top" />
      <div class="bar center" />
      <div class="bar bottom" />
    </div>

    <div class="navigation-content" :class="[{ 'active' : navigation}, { 'deactive' : deactive}]">
      <b-container class="navigation-logo-container">
        <div class="logo-container" @click="toggleNavigation">
          <nuxt-link :to="localePath('/', $t('base.language'))">
            <img class="img-fluid navigation-logo" src="@/assets/images/logo-white.png" alt="Logo">
          </nuxt-link>
        </div>
      </b-container>

      <ul class="list-unstyled d-flex d-lg-none justify-content-center mobile-lang-list">
        <li class="mobile-item-lang">
          <nuxt-link :to="switchLocalePath('en')" class="mobile-lang-link">
            EN
          </nuxt-link>
        </li>
        <li class="mobile-item-lang">
          <nuxt-link :to="switchLocalePath('de')" class="mobile-lang-link">
            DE
          </nuxt-link>
        </li>
        <li class="mobile-item-lang">
          <nuxt-link :to="switchLocalePath('es')" class="mobile-lang-link">
            ES
          </nuxt-link>
        </li>
        <li class="mobile-item-lang">
          <nuxt-link :to="switchLocalePath('pt')" class="mobile-lang-link">
            PT
          </nuxt-link>
        </li>
        <li class="mobile-item-lang mr-0">
          <nuxt-link :to="switchLocalePath('si')" class="mobile-lang-link">
            SI
          </nuxt-link>
        </li>
      </ul>

      <ul class="list-unstyled navigation-list">
        <li class="navigation-item" @click="toggleNavigation">
          <nuxt-link :to="localePath('/', $t('base.language'))" class="navigation-link">
            {{ $t('navigation.link1Text') }}
          </nuxt-link>
        </li>
        <li class="navigation-item" @click="toggleNavigation">
          <nuxt-link :to="localePath('AboutUs', $t('base.language'))" class="navigation-link">
            {{ $t('navigation.link2Text') }}
          </nuxt-link>
        </li>
        <li class="navigation-item" @click="toggleNavigation">
          <nuxt-link :to="localePath('OurCompetition', $t('base.language'))" class="navigation-link">
            {{ $t('navigation.link3Text') }}
          </nuxt-link>
        </li>
        <li class="navigation-item" @click="toggleNavigation">
          <nuxt-link :to="localePath('InnovationAndCommitment', $t('base.language'))" class="navigation-link">
            {{ $t('navigation.link4Text') }}
          </nuxt-link>
        </li>
        <li class="navigation-item" @click="toggleNavigation">
          <nuxt-link :to="localePath('Contact', $t('base.language'))" class="navigation-link">
            {{ $t('navigation.link5Text') }}
          </nuxt-link>
        </li>
        <li class="navigation-item" @click="toggleNavigation">
          <nuxt-link :to="localePath('News', $t('base.language'))" class="navigation-link">
            {{ $t('navigation.link6Text') }}
          </nuxt-link>
        </li>
      </ul>

      <div class="navigation-copyright text-center">
        &copy; {{ $t('navigation.copyrightText') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navigation: false,
      deactive: true
    }
  },
  methods: {
    toggleNavigation () {
      this.deactive = !this.deactive

      if (this.navigation === true) {
        setTimeout(() => {
          this.navigation = !this.navigation
        }, 400)
      } else {
        this.navigation = !this.navigation
      }
    }
  }
}
</script>
