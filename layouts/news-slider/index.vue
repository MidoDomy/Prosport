<template>
  <div class="news-slider-section">
    <b-container class="news-container">
      <h1 class="news-title text-center">
        {{ $t('newsSlider.title') }}
      </h1>

      <div v-swiper:myImageSwiper="swiperOption" class="news-slider">
        <div class="swiper-wrapper align-items-center">
          <div v-for="(item, i) in items" :key="i" class="swiper-slide">
            <new-item :new-item="item" />
          </div>
        </div>

        <div slot="button-prev" class="swiper-button-prev d-none d-md-block" />
        <div slot="button-next" class="swiper-button-next d-none d-md-block" />
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import NewItem from '~/components/news/new-item.vue'

export default {
  components: {
    NewItem
  },
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
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 0,
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          991: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [],
      feed: 'https://www.transfermarkt.co.uk/rss/news'
    }
  },
  created () {
    this.getItems()
  },
  methods: {
    getItems () {
      let fullTitle = ''
      let fullDate = ''
      let fullDescription = ''

      let itemTitle = ''
      let itemSubtitle
      let itemDateTime = ''
      let itemLink = ''
      let itemDescription = ''

      axios.get(this.feed).then((response) => {
        const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml')
        const items = xmlDoc.getElementsByTagName('item')

        for (let i = 0; i < 10; i++) {
          fullTitle = items[i].getElementsByTagName('title')[0].innerHTML
          fullDate = items[i].getElementsByTagName('pubDate')[0].innerHTML
          fullDescription = items[i].getElementsByTagName('description')[0].innerHTML

          itemTitle = fullTitle.substr(fullTitle.indexOf('|') + 2, fullTitle.length)
          itemSubtitle = fullTitle.substr(0, fullTitle.indexOf('|') - 1)
          itemDateTime = fullDate.substr(fullDate.indexOf(',') + 1, fullDate.indexOf('+') - 9)
          itemLink = items[i].getElementsByTagName('link')[0].innerHTML
          itemDescription = fullDescription.substr(10, fullDescription.length - 13)

          this.items.push({ title: itemTitle, subtitle: itemSubtitle, dateTime: itemDateTime, link: itemLink, description: itemDescription })
        }
      })
    }
  }
}
</script>
