<template>
  <div class="contactUs">
    <div class="mt-5">
      <div class="row">
        <div class="form-section col-md-6 bg-lightgrey ">
          <div class="container">
            <p class="pt-3">Get in touch</p>
            <h1 class="page-title mb-3">Contact Us</h1>
            <b-form name="form" novalidate @submit.prevent="submit">
              <div class="row">
                <!-- mobile no -->
                <b-form-group
                  id="fieldset-1"
                  description="Let us know your mobile no."
                  :class="{ 'form-group--error': $v.form.name.$error }"
                >
                  <b-form-input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    class="col-xs-12"
                    v-model="form.mobile"
                    :maxlength="10"
                    :minlength="10"
                    pattern="^\d{3}-\d{3}-\d{4}$"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.mobile.required && $v.form.mobile.$error"
                  >
                    Mobile is required
                  </div>
                  <div class="error" v-if="!$v.form.mobile.minLength">
                    Number should be
                    {{ $v.form.mobile.$params.minLength.min }} digits.
                  </div>
                </b-form-group>
                <!-- email -->
                <b-form-group
                  id="fieldset-2"
                  description="Let us know your email."
                >
                  <b-form-input
                    id="email"
                    name="email"
                    class="col-xs-12"
                    v-model="form.email"
                    pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$."
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.email.required && $v.form.email.$error"
                  >
                    Email is required
                  </div>
                </b-form-group>
              </div>
              <!--name  -->
              <div class="row">
                <b-form-group
                  id="fieldset-3"
                  description="Let us know your name."
                >
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
                </b-form-group>
                <!-- topic -->

                <b-form-group
                  id="fieldset-3"
                  description="Let us know your name."
                >
                  <b-form-input
                    id="topics"
                    name="topics"
                    class="col-xs-12"
                    v-model="form.topics"
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.topics.required && $v.form.topics.$error"
                  >
                    topic is required
                  </div>
                </b-form-group>
              </div>
              <!-- textarea -->
              <div class="row">
                <b-form-textarea
                  id="textarea"
                  name="textarea"
                  v-model="form.textarea"
                  required
                  placeholder="Enter something..."
                  rows="3"
                  cols="15"
                >
                </b-form-textarea>
              </div>
              <!-- button -->
              <div class="mt-3">
                <!-- <b-button type="submit" variant="primary">Submit</b-button> -->

                <b-button
                  class="btn btn-danger"
                  type="submit"
                  :disabled="submitStatus === 'PENDING'"
                >
                  Submit!
                </b-button>
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
            </b-form>
          </div>
        </div>
        <!-- image section -->
        <div class="col-md-6 image">
          <p class="white box border mx-auto">
            <b class="display-4 mx-auto"
              >Tell us what u need so you can meet your virtual assistant</b
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        mobile: "",
        age: 0,
        topics: " ",
        removeText: "true",
        show: true,
        errors: [],
        submitStatus: null
      }
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
        between: between(20, 30)
      },
      email: {
        required
      },
      topics: {
        required
      }
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
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.contactUs {
  .row {
    margin: 0px;
  }
  .form-section {
    padding: 30px 61px;
  }
  .form-control {
    width: 98%;
  }

  .image {
    background-image: url("../assets/images/img3.jpeg");
    // background-repeat: no-repeat;
    background-size: 80vh;
  }
  .box {
    width: 365px;
    margin: 7rem;
  }
  .btn {
    padding: 6px 22px 5px 22px;
  }
  input[type="text"],
  input[type="phoneno"],
  input[type="email"] {
    border: 1px solid $grey;
  }
  .error-txt {
    color: $red;
  }
}
@media screen and (max-width: 800px) {
  .contactUs {
    .image {
      background-size: cover;
      padding: 0px;
    }
    .form-section {
      padding: 0px;
    }
    .box {
      width: 308px;
    }
  }
}
</style>
