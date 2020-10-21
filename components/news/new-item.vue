<template>
  <div class="news-item ">
    <div class="news-item-inner">
      <div v-if="newItem.img" class="img-container">
        <a v-if="newItem.link" target="_blank" :href="newItem.link"><img class="img-fluid w-100 h-100" :src="newItem.img" alt="News img"></a>
        <img v-else class="img-fluid w-100 h-100" :src="newItem.img" alt="News img">
      </div>

      <!-- <div v-if="newItem.dateTime" class="date-time">
            {{ newItem.dateTime }}
        </div> -->

      <div class="news-item--content">
        <p v-if="newItem.author" class="author-text">
          Author: {{ newItem.author }}
        </p>

        <h2 v-if="newItem.subtitle" class="subtitle">
          {{ newItem.subtitle }}
        </h2>

        <h1 v-if="newItem.title" class="title">
          <a v-if="newItem.link" :href="newItem.link" target="_blank">{{ newItem.title }}</a>
          <span v-else>{{ newItem.title }}</span>
        </h1>

        <p v-if="newItem.description" class="teaser-text">
          {{ newItem.description }}
        </p>

        <a v-if="newItem.link" target="_blank" :href="newItem.link" class="item-news--btn">{{ $t('news.itemLinkText') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newItem: {
      type: Object,
      default: null
    }
  }
}
</script>
