<template>
  <div class="banner-slider-section position-relative">
    <div v-swiper:myImageSwiper="swiperOption" class="banner-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="cover-black" />
          <img class="slide-img" src="~/assets/images/banner-slider/banner-image1.jpg">

          <b-container class="slide-content">
            <h1 class="slide-title text-uppercase text-right d-md-none">
              {{ $t('bannerSlider.slide1Text1') }}  {{ $t('bannerSlider.slide1Text2') }}  {{ $t('bannerSlider.slide1Text3') }}  {{ $t('bannerSlider.slide1Text4') }}  {{ $t('bannerSlider.slide1Text5') }}
            </h1>

            <h1 class="slide-title text-uppercase text-right d-none d-md-block">
              {{ $t('bannerSlider.slide1Text1') }} <br>
              {{ $t('bannerSlider.slide1Text2') }} <br>
              {{ $t('bannerSlider.slide1Text3') }} <br>
              {{ $t('bannerSlider.slide1Text4') }} <br>
              {{ $t('bannerSlider.slide1Text5') }}
            </h1>
          </b-container>
        </div>

        <div class="swiper-slide">
          <div class="cover-black" />
          <img class="slide-img" src="~/assets/images/banner-slider/banner-image2.jpg">

          <b-container class="slide-content">
            <h1 class="slide-title text-uppercase text-right">
              {{ $t('bannerSlider.slide2Text1') }} <br> {{ $t('bannerSlider.slide2Text2') }}
            </h1>
          </b-container>
        </div>
      </div>
    </div>

    <div class="slide-button" @click="scrollDown">
      <svg class="slide-btn-icon" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
        <path
          class="slide-btn-path"
          fill="none"
          stroke="rgba(255, 255, 255, .4)"
          stroke-width="2"
          stroke-miterlimit="10"
          d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      swiperOption: {
        // effect: 'fade',
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        clickable: true,
        autoHeight: false,
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
      }
    }
  },
  methods: {
    scrollDown () {
      window.scrollTo(0, 600)
    }
  }
}
</script>
