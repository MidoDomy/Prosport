<template>
  <div class="top-bar">
    <b-container>
      <ul class="list-unstyled d-none d-lg-flex justify-content-end desktop-lang-list">
        <li class="desktop-item-lang">
          <nuxt-link :to="switchLocalePath('en')" class="desktop-lang-link">
            EN
          </nuxt-link>
        </li>
        <li class="desktop-item-lang">
          <nuxt-link :to="switchLocalePath('de')" class="desktop-lang-link">
            DE
          </nuxt-link>
        </li>
        <li class="desktop-item-lang">
          <nuxt-link :to="switchLocalePath('es')" class="desktop-lang-link">
            ES
          </nuxt-link>
        </li>
        <li class="desktop-item-lang">
          <nuxt-link :to="switchLocalePath('pt')" class="desktop-lang-link">
            PT
          </nuxt-link>
        </li>
        <li class="desktop-item-lang mr-0">
          <nuxt-link :to="switchLocalePath('si')" class="desktop-lang-link">
            SI
          </nuxt-link>
        </li>
      </ul>
    </b-container>
  </div>
</template>
