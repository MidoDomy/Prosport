<template>
  <div class="news-page subpages">
    <loading-content />

    <div class="main-content">
      <div class="main-content-inner">
        <b-container>
          <h1 class="page-title">
            {{ $t('news.pageTitle') }}
          </h1>

          <b-row class="justify-content-center">
            <b-col cols="12" lg="10" class="news-column">
              <div class="pagination-wrapper pagination-top">
                <button :disabled="currentPage == 1" class="btn btn-pagination btn-prev" @click="previousPage(currentPage - 2)">
                  <img class="img-fluid arrow-icon" src="@/assets/images/icons/left-chevron.svg">
                </button>

                <template v-for="i in Math.round((items.length + 9) / 20)">
                  <button :key="i" class="btn btn-pagination" :class="{ 'active' : i == currentPage }" @click="uploadVisibleItems(i - 1)">
                    {{ i }}
                  </button>
                </template>

                <button :disabled="currentPage == Math.round((items.length + 9) / 20)" class="btn btn-pagination btn-next" @click="nextPage(currentPage)">
                  <img class="img-fluid arrow-icon" src="@/assets/images/icons/right-chevron.svg">
                </button>

                Current page: {{ currentPage }}
              </div>

              <b-row>
                <b-col cols="12" lg="6">
                  <b-row class="main-news">
                    <template v-for="(item, i) in visibleItems">
                      <new-item v-if="i < (visibleItems.length / 2)" :key="i" :new-item="item" class="col-12" />
                    </template>
                  </b-row>
                </b-col>

                <b-col cols="12" lg="6">
                  <b-row class="main-news">
                    <template v-for="(item, i) in visibleItems">
                      <new-item v-if="i > (visibleItems.length / 2)" :key="i" :new-item="item" class="col-12" />
                    </template>
                  </b-row>
                </b-col>
              </b-row>

              <div class="pagination-wrapper">
                <button :disabled="currentPage == 1" class="btn btn-pagination btn-prev" @click="previousPage(currentPage - 2)">
                  <img class="img-fluid arrow-icon" src="@/assets/images/icons/left-chevron.svg">
                </button>

                <template v-for="i in Math.round((items.length + 9) / 20)">
                  <button :key="i" class="btn btn-pagination" :class="{ 'active' : i == currentPage }" @click="uploadVisibleItems(i - 1)">
                    {{ i }}
                  </button>
                </template>

                <button :disabled="currentPage == Math.round((items.length + 9) / 20)" class="btn btn-pagination btn-next" @click="nextPage(currentPage)">
                  <img class="img-fluid arrow-icon" src="@/assets/images/icons/right-chevron.svg">
                </button>

                Current page: {{ currentPage }}
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LoadingContent from '~/layouts/loading/index.vue'
import NewItem from '~/components/news/new-item.vue'

export default {
  components: {
    LoadingContent,
    NewItem
  },
  data () {
    return {
      items: [],
      visibleItems: [],
      currentPage: 1,
      feed1: 'https://www.transfermarkt.co.uk/rss/news',
      feed2: 'https://www.goal.com/feeds/en/news',
      feed3: 'https://www.90min.com/posts.rss',
      feed4: 'https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=soccer',
      feed5: 'https://www.espn.com/espn/rss/soccer/news'
      // feed6: 'https://www.101greatgoals.com/feed/'
    }
  },
  created () {
    this.getItems()
  },
  methods: {
    getItems () {
      let fullTitle = ''
      let fullDate = ''
      let fullLink = ''
      let fullDescription = ''
      let fullImg = ''

      let itemTitle = ''
      let itemSubtitle = ''
      let itemDateTime = ''
      let itemLink = ''
      let itemDescription = ''
      let itemImg = ''
      let itemAuthor = ''

      axios.get(this.feed1).then((response) => {
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

          this.items.push({ title: itemTitle, subtitle: itemSubtitle, dateTime: itemDateTime, link: itemLink, description: itemDescription, author: 'Redaktion Transfermarkt' })

          this.items = this.randomList(this.items)

          this.visibleItems = this.items.slice(0, 20)
        }
      })

      // ovaj je problem ostali rade
      axios.get(this.feed2).then((response) => {
        const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml')
        const items = xmlDoc.getElementsByTagName('item')

        for (let i = 0; i < items.length; i++) {
          fullTitle = items[i].getElementsByTagName('title')[0].innerHTML
          fullDate = items[i].getElementsByTagName('pubDate')[0].innerHTML
          fullLink = items[i].getElementsByTagName('link')[0].innerHTML
          fullDescription = items[i].getElementsByTagName('description')[0].innerHTML
          fullImg = items[i].getElementsByTagName('media:content')[0]

          itemTitle = fullTitle.substr(9, fullTitle.length - 12)
          itemDateTime = fullDate.substr(fullDate.indexOf(',') + 1, fullDate.length - 11)
          itemLink = fullLink.substr(9, fullLink.length - 12)
          itemDescription = fullDescription.substr(9, fullDescription.length - 12)
          itemImg = fullImg.getAttribute('url')
          itemAuthor = items[i].getElementsByTagName('dc:creator')[0].innerHTML

          this.items.push({ title: itemTitle, dateTime: itemDateTime, link: itemLink, description: itemDescription, img: itemImg, author: itemAuthor })

          this.items = this.randomList(this.items)

          this.visibleItems = this.items.slice(0, 20)
        }
      })

      axios.get(this.feed3).then((response) => {
        const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml')
        const items = xmlDoc.getElementsByTagName('item')

        for (let i = 0; i < items.length; i++) {
          fullDate = items[i].getElementsByTagName('pubDate')[0].innerHTML
          fullImg = items[i].getElementsByTagName('media:thumbnail')[0]

          itemTitle = items[i].getElementsByTagName('title')[0].innerHTML
          itemDateTime = fullDate.substr(fullDate.indexOf(',') + 1, fullDate.indexOf('+') - 9)
          itemLink = items[i].getElementsByTagName('link')[0].innerHTML
          itemDescription = items[i].getElementsByTagName('description')[0].innerHTML
          itemImg = fullImg.getAttribute('url')
          itemAuthor = items[i].getElementsByTagName('author')[0].innerHTML

          this.items.push({ title: itemTitle, dateTime: itemDateTime, link: itemLink, description: itemDescription, img: itemImg, author: itemAuthor })

          this.items = this.randomList(this.items)

          this.visibleItems = this.items.slice(0, 20)
        }
      })

      axios.get(this.feed4).then((response) => {
        const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml')
        const items = xmlDoc.getElementsByTagName('item')

        for (let i = 0; i < items.length; i++) {
          fullTitle = items[i].getElementsByTagName('title')[0].innerHTML
          fullDate = items[i].getElementsByTagName('pubDate')[0].innerHTML
          fullImg = items[i].getElementsByTagName('enclosure')[0]
          fullDescription = items[i].getElementsByTagName('description')[0].innerHTML

          itemTitle = fullTitle.substr(15, fullTitle.length - 23)
          itemLink = items[i].getElementsByTagName('link')[0].innerHTML
          itemDescription = fullDescription.substr(15, fullDescription.length - 23)
          itemDateTime = fullDate.substr(fullDate.indexOf(',') + 1, fullDate.indexOf('+') - 9)

          if (fullImg) {
            itemImg = fullImg.getAttribute('url')
          } else {
            itemImg = ''
          }

          this.items.push({ title: itemTitle, dateTime: itemDateTime, link: itemLink, description: itemDescription, img: itemImg })

          this.items = this.randomList(this.items)

          this.visibleItems = this.items.slice(0, 20)
        }
      })

      axios.get(this.feed5).then((response) => {
        const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml')
        const items = xmlDoc.getElementsByTagName('item')

        for (let i = 0; i < items.length; i++) {
          fullTitle = items[i].getElementsByTagName('title')[0].innerHTML
          fullDate = items[i].getElementsByTagName('pubDate')[0].innerHTML
          fullImg = items[i].getElementsByTagName('image')[0].innerHTML
          fullDescription = items[i].getElementsByTagName('description')[0].innerHTML

          itemTitle = fullTitle.substr(9, fullTitle.length - 12)
          itemLink = items[i].getElementsByTagName('link')[0].innerHTML
          itemDescription = fullDescription.substr(9, fullDescription.length - 12)
          itemDateTime = fullDate
          itemImg = fullImg.substr(9, fullImg.length - 12)

          this.items.push({ title: itemTitle, dateTime: itemDateTime, link: itemLink, description: itemDescription, img: itemImg })

          this.items = this.randomList(this.items)

          this.visibleItems = this.items.slice(0, 20)
        }
      })

      // axios.get(this.feed6).then((response) => {
      //   const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml')
      //   console.log(xmlDoc)
      // })
    },
    randomList (rand) {
      return rand.sort(function () { return 0.5 - Math.random() })
    },
    uploadVisibleItems (page) {
      const lenght = page * 20
      this.visibleItems = this.items.slice(lenght, lenght + 20)

      this.currentPage = page + 1

      window.scrollTo(0, 0)
    },
    previousPage (page) {
      this.uploadVisibleItems(page)
    },
    nextPage (page) {
      this.uploadVisibleItems(page)
    }
  }
}
</script>
