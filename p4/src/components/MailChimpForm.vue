<template>
  <b-container>
    <b-row>
      <b-col>
        <h5>Join the 808mix mailing list now!</h5>
        <h6>Sign up to receive occasional event invitations, new mixes and free swag.</h6>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <mailchimp-subscribe
          url="https://808mix.us4.list-manage.com/subscribe/post-json"
          user-id="4efedca14807487d1b30d3815"
          list-id="e44c55620a"
          @error="onError"
          @success="onSuccess"
        >
          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <form @submit.prevent="subscribe">
              <input
                type="email"
                v-model.trim="$v.email.$model"
                @input="setEmail($event.target.value)"
                placeholder="E-Mail Address"
              />
              <button
                type="submit"
                :disabled="$v.email.$invalid || $v.email.$model.length == 0"
              >Join Now</button>
              <div v-if="error">{{ error }}</div>
              <div v-if="success">Success!</div>
              <div v-if="loading">Loading…</div>
            </form>
          </template>
        </mailchimp-subscribe>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MailchimpSubscribe from "vue-mailchimp-subscribe";
import { email } from "vuelidate/lib/validators";

export default {
  name: "MailchimpForm",
  components: { MailchimpSubscribe },
  data: function() {
    return {
      email: ""
    };
  },
  methods: {
    onError() {
      // handle error
    },
    onSuccess() {
      // handle success
    }
  },
  validations: {
    email: {
      email
    }
  }
};
</script>

<style scoped>
button:disabled {
  color: #bbbbbb;
}
</style>
