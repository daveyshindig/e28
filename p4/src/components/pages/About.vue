<template>
  <b-container>
    <b-row>
      <b-col data-test="logo-image" cols="3" class="logo-img">
        <b-img src="./../../../public/img/logo.png" />
      </b-col>
    </b-row>
    <b-row>
      <b-col data-test="about-text" cols="9" class="about-text">
        <p>808 MIX is a radio show and podcast series, showcasing the talents of local DJs as well as those who visit Hawaiʻi. You can listen to it live on KTUH every Friday night from 6 p.m. to 9 p.m., or via the web at the show's podcast page.</p>
        <p>The show is hosted by Davey Shindig. It was born in June of 2012 out of a love for the many local DJs who work and play in Hawaiʻi, with the aim of serving listeners as a standard-bearer of DJ culture in the islands and beyond our shores.</p>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <mailchimp-form></mailchimp-form>
    </b-row>
  </b-container>
</template>

<script>
import MailchimpForm from "./../MailChimpForm";

export default {
  components: {
    MailchimpForm
  }
};
</script>

<style scoped>
.logo-img {
  margin: 18px 0;
}

.about-text {
  margin: 18px 0;
  font-family: "Courier New", Courier, monospace;
}
</style>