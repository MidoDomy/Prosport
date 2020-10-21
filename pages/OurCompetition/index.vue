<template>
  <div class="competition-page subpages">
    <loading-content />

    <div class="main-content">
      <div class="banner">
        <b-container>
          <h1 class="page-title">
            {{ $t('competition.pageTitle') }}
          </h1>

          <table class="compentition-table">
            <tr>
              <th class="text-left">
                {{ $t('competition.tabel.title1') }}
              </th>
              <th class="text-center text-md-right">
                {{ $t('competition.tabel.title2') }}
              </th>
              <th class="text-center text-md-right">
                {{ $t('competition.tabel.title3') }}
              </th>
              <th class="text-center text-md-right">
                {{ $t('competition.tabel.title4') }}
              </th>
            </tr>

            <tr>
              <td class="text-left">
                {{ $t('competition.tabel.data1col1') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data1col2') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data1col3') }}
              </td>
            </tr>

            <tr>
              <td class="text-left">
                {{ $t('competition.tabel.data2col1') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data2col2') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data2col3') }}
              </td>
            </tr>

            <tr>
              <td class="text-left">
                {{ $t('competition.tabel.data3col1') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data3col2') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data3col3') }}
              </td>
            </tr>

            <tr>
              <td class="text-left">
                {{ $t('competition.tabel.data4col1') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data4col2') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data4col3') }}
              </td>
            </tr>

            <tr>
              <td class="text-left">
                {{ $t('competition.tabel.data5col1') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data5col2') }}
              </td>
              <td class="text-center text-md-right">
                {{ $t('competition.tabel.data5col3') }}
              </td>
            </tr>
          </table>

          <p>{{ $t('competition.text1') }}</p>
          <p>{{ $t('competition.text2') }}</p>
          <p>{{ $t('competition.text3') }}</p>
          <p><b>{{ $t('competition.text4') }}</b></p>
          <p>{{ $t('competition.text5') }}</p>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingContent from '~/layouts/loading/index.vue'

export default {
  components: {
    LoadingContent
  }
}
</script>
