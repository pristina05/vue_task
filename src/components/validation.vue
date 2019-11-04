<template>
  <div>
    <form @submit.prevent="submit">
      <!-- <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model" />
      </div>
      <div class="error" v-if="!$v.name.required">Name is required</div>
      <div class="error" v-if="!$v.name.minLength">
        Name must have at least {{ $v.name.$params.minLength.min }} letters.
      </div> -->

      <b-form-group id="fieldset-3" description="Let us know your username.">
        <b-form-input
          id="name"
          name="name"
          class="col-xs-12"
          v-model="form.name"
          required
        ></b-form-input>
        <div
          class="error-list"
          v-if="!$v.form.name.required && $v.form.name.$error"
          removeText
        >
          name is required
        </div>
        <div class="error-list" v-if="!$v.form.name.minLength">
          Name should be more than <br />
          {{ $v.form.name.$params.minLength.min }} chars
        </div>
      </b-form-group>

      <button
        class="button"
        type="submit"
        :disabled="submitStatus === 'PENDING'"
      >
        Submit!
      </button>
      <p class="typo__p" v-if="submitStatus === 'OK'">
        Thanks for your submission!
      </p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Please fill the form correctly.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        // emailRules: [
        //   v =>
        //     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        //     "E-mail must be valid"
        // ],
        // emailRules: value => {
        //   if (value.length > 0) {
        //     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return pattern.test(value) || "Invalid e-mail.";
        //   }
        // },
        mobile: "",
        age: "",
        topic: "",
        removeText: "true",
        show: true,
        date: "",
        errors: [],
        password: "",
        repeatPassword: "",
        selectedGender: "",
        submitStatus: null
      }
      // name: "",
      // age: 0,
      // submitStatus: null
    };
  },
  validations: {
   form: {
      mobile: {
        required,
        minLength: minLength(10)
      },
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        required,
        between: between(20, 30)
      },
      email: {
        required,
        email
      },
      topic: {
        required
      },
      date: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      selectedGender: {
        required
      }
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>
