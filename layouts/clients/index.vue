<template>
  <div class="clients-section">
    <b-container class="clients-container">
      <h1 class="clients-title text-center">
        Clients
      </h1>

      <div v-swiper:myImageSwiper="swiperOption" class="clients-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="client-img img-fluid" src="~/assets/images/clients/client-img1.png">
          </div>

          <div class="swiper-slide">
            <img class="client-img img-fluid" src="~/assets/images/clients/client-img2.png">
          </div>

          <div class="swiper-slide">
            <img class="client-img img-fluid" src="~/assets/images/clients/client-img3.png">
          </div>

          <div class="swiper-slide">
            <img class="client-img img-fluid" src="~/assets/images/clients/client-img4.png">
          </div>

          <div class="swiper-slide">
            <img class="client-img img-fluid" src="~/assets/images/clients/client-img5.png">
          </div>
        </div>

        <div slot="button-prev" class="swiper-button-prev d-none d-lg-block" />
        <div slot="button-next" class="swiper-button-next d-none d-lg-block" />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      swiperOption: {
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        clickable: true,
        autoHeight: false,
        loop: true,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 0,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
