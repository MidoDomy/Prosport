<template>
  <b-container class="form-container">
    <form action="" class="contact-form">
      <b-row class="flex-column">
        <b-col class="contact-column">
          <input class="contact-input" type="text" name="your-name" value="" size="40">
          <label class="contact-label" for=""><div>{{ $t('contactSection.name') }} ({{ $t('contactSection.required') }})</div></label>
        </b-col>

        <b-col class="contact-column">
          <input class="contact-input" type="email" name="your-email" value="" size="40">
          <label class="contact-label" for=""><div>{{ $t('contactSection.email') }} ({{ $t('contactSection.required') }})</div></label>
        </b-col>

        <b-col class="contact-column">
          <input class="contact-input" type="text" name="your-subject" value="" size="40">
          <label class="contact-label" for=""><div>{{ $t('contactSection.subject') }}</div></label>
        </b-col>

        <b-col class="contact-column">
          <textarea class="contact-textarea" name="your-message" cols="40" rows="3" />
          <label class="contact-label" for=""><div>{{ $t('contactSection.message') }}</div></label>
        </b-col>

        <b-col>
          <input class="contact-submit" type="submit" :value="$t('contactSection.submit')">
        </b-col>
      </b-row>
    </form>
  </b-container>
</template>
