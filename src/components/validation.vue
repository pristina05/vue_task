<template>
  <div>
    <div class="form justify-content-center mt-5">
      <form
        class="form-inline needs-validation"
        action="/action_page.php"
        novalidate
        @submit.prevent="submit"
      >
        <div class="row">
          <!-- tel -->
          <div class="form-group ">
            <input
              id="phoneno"
              type="tel"
              class="form-control col-xs-12"
              placeholder="Phone Number"
            />
          </div>
          <!-- <input type="email" class="form-control " placeholder="Email" />
                 -->

          <!-- email -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.email.$error }"
          >
            <input
              id="email"
              type="email"
              class="form-control col-xs-12"
              placeholder=" email"
              v-model.trim="$v.email.$model"
            />
          </div>
          <div class="error" v-if="!$v.email.required">
            Field is required
          </div>
          <br />
        </div>

        <div class="row">
          <!-- name -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.name.$error }"
          >
            <input
              id="name"
              class="form-control col-xs-12"
              placeholder=" name"
              v-model.trim="$v.name.$model"
            />
          </div>
          <div class="error" v-if="!$v.name.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.name.minLength">
            Name must have at least
            {{ $v.name.$params.minLength.min }} letters.
          </div>

          <!-- topic -->
          <div
            class="form-group "
            :class="{ 'form-group--error': $v.topic.$error }"
          >
            <input
              id="topic"
              class="form-control col-xs-12 "
              placeholder="Topic"
              v-model.trim="$v.topic.$model"
            /><br />
          </div>
          <div class="error" v-if="!$v.topic.required">
            Field is required
          </div>
        </div>

        <div class="row">
          <!--textarea  -->
          <textarea
            id="message"
            name="text"
            class="mt-2 "
            rows="6"
            cols="47"
            placeholder="message"
          >
          </textarea>
        </div>
        <br />
        <!--Submit  -->
        <div class="row">
          <!-- <button type="submit" class="btn btn-danger mt-3 mb-3">
                    Send
                  </button> -->
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
          <p class="typo__p" v-if="submitStatus === 'PENDING'">
            Sending...
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      age: 0,
      topic: " ",
      removeText: "true",
      show: true,
      errors: [],
      submitStatus: null
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    },
    email: {
      required
    },
    topic: {
      required
    }
  },
  methods: {
    submit() {
      // eslint-disable-next-line no-console
      console.log("submit!");
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
