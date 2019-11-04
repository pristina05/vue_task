<template>
  <div class="contactUs">
    <div class="mt-5">
      <div class="row">
        <div class="form-section col-md-6 bg-lightgrey ">
          <div class="container">
            <p class="pt-3">Get in touch</p>
            <h1 class="page-title mb-3">Contact Us</h1>
            <!-- <b-form name="form" novalidate v-on:submit.prevent="onSubmit"> -->
            <b-form name="form" v-on:submit.prevent="submitForm">
              <!--name-->
              <div class="row">
                <b-form-group id="fieldset-3">
                  <b-form-input
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    class="col-xs-12"
                    v-model="form.name"
                    required
                  ></b-form-input>
                  <div
                    class="error-list"
                    v-if="!$v.form.name.required && $v.form.name.$error"
                    removeText
                  >
                    Name is required
                  </div>
                  <div class="error-list" v-if="!$v.form.name.minLength">
                    Name should be more than <br />
                    {{ $v.form.name.$params.minLength.min }} chars
                  </div>
                </b-form-group>
                <!--age  -->

                <b-form-group id="fieldset-5">
                  <b-form-input
                    id="age"
                    name="age"
                    placeholder="Enter Age"
                    class="col-xs-12"
                    v-model="form.age"
                    required
                  ></b-form-input>
                  <div
                    class="error-list"
                    v-if="!$v.form.age.required && $v.form.age.$error"
                    removeText
                  >
                    Age is required
                  </div>
                  <div
                    class="error-list"
                    v-if="!$v.form.age.between"
                    removeText
                  >
                    Age should be between
                    {{ $v.form.age.$params.between.min }} and
                    {{ $v.form.age.$params.between.max }}
                  </div>
                </b-form-group>
              </div>

              <!-- password -->
              <div class="row">
                <b-form-group id="fieldset-7">
                  <b-form-input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    class="col-xs-12"
                    v-model="form.password"
                    required
                  ></b-form-input>
                  <div
                    class="error-list"
                    v-if="!$v.form.password.required && $v.form.password.$error"
                    removeText
                  >
                    Password is required
                  </div>
                  <div
                    class="error-list"
                    v-if="!$v.form.password.minLength"
                    removeText
                  >
                    Password should be more than
                    {{ $v.form.password.$params.minLength.min }}chars
                  </div>
                </b-form-group>
                <!-- repeat password-->

                <b-form-group id="fieldset-8">
                  <b-form-input
                    type="password"
                    id="repeatpassword"
                    name="repeatpassword"
                    placeholder="Enter Confirm Password"
                    class="col-xs-12"
                    v-model="form.repeatPassword"
                    required
                  ></b-form-input>
                  <div
                    class="error-list"
                    v-if="!$v.form.repeatPassword.sameAsPassword"
                    removeText
                  >
                    Password must be identical
                  </div>
                </b-form-group>
              </div>

              <div class="row">
                <!-- mobile no -->
                <b-form-group
                  id="fieldset-1"
                  :class="{ 'form-group--error': $v.form.name.$error }"
                >
                  <b-form-input
                    id="mobile"
                    name="mobile"
                    placeholder="Enter Mobile No"
                    type="tel"
                    class="col-xs-12"
                    v-model="form.mobile"
                    :maxlength="10"
                    :minlength="10"
                    required
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  ></b-form-input>
                  <div
                    class="error-list"
                    v-if="!$v.form.mobile.required && $v.form.mobile.$error"
                  >
                    Mobile is required
                  </div>
                  <div class="error-list" v-if="!$v.form.mobile.minLength">
                    Number should be
                    {{ $v.form.mobile.$params.minLength.min }} digits.
                  </div>
                </b-form-group>
                <!-- email -->
                <b-form-group id="fieldset-2">
                  <b-form-input
                    id="email"
                    name="email"
                    placeholder="Enter name@gmail.com"
                    type="email"
                    class="col-xs-12"
                    v-model="form.email"
                    pattern=".+@gmail.com"
                    required
                    onkeypress="return ( \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b.)"
                    v-on:click="setEmail()"
                  ></b-form-input>
                  <div
                    class="error-list"
                    v-if="!$v.form.email.required && $v.form.email.$error"
                  >
                    Email is required
                  </div>
                  <div class="error-list" v-if="!$v.form.email.email">
                    Email is in invalid format
                  </div>
                </b-form-group>
              </div>

              <!-- gender -->
              <b-form-group label="Select Gender:">
                <div class="d-flex">
                  <div>
                    <b-form-radio
                      v-model="form.selectedGender"
                      name="some-radios"
                      value="A"
                      >Male</b-form-radio
                    >
                  </div>
                  <div class="ml-5">
                    <b-form-radio
                      v-model="form.selectedGender"
                      name="some-radios"
                      value="B"
                      >Female</b-form-radio
                    >
                  </div>
                </div>
                <div
                  class="error-txt"
                  v-if="
                    $v.form.selectedGender.$error &&
                      !$v.form.selectedGender.required
                  "
                  removeText
                >
                  Gender is required
                </div>
              </b-form-group>

              <!-- date -->
              <div class="row">
                <b-form-group>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Enter 00/00/0000"
                    class=" col-xs-12 mr-0"
                    v-model="form.date"
                    required
                    :maxlength="10"
                  />
                  <div
                    class="error-list"
                    v-if="$v.form.date.$error && !$v.form.date.required"
                    removeText
                  >
                    Date required
                  </div>
                </b-form-group>
              </div>
              <!-- textarea -->
              <!-- <div class="row">
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
              </div> -->
              <!-- button -->
              <div class="row mt-2">
                <div class="col-md-6">
                  <button
                    type="submit"
                    class="btn btn-primary  
                  "
                    @click="$v.$touch()"
                  >
                    Submit
                  </button>
                </div>
                <div class="col-md-6">
                  <button
                    type="reset"
                    class="btn btn-primary  col-xs-12"
                    v-on:click="resetForm()"
                  >
                    Reset
                  </button>
                </div>
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
import {
  required,
  minLength,
  between,
  email,
  sameAs
} from "vuelidate/lib/validators";

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
        removeText: "true",
        show: true,
        date: "",
        errors: [],
        password: "",
        repeatPassword: "",
        selectedGender: "",
        submitStatus: true
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
        required,
        between: between(20, 30)
      },
      email: {
        required,
        email
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
    setEmail() {
      this.$v.form.setEmail.$touch();
    },
    submitForm() {
      // eslint-disable-next-line no-console
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        this.$toaster.error("Please fill all details.");
      } else {
        this.$toaster.success("Successfully submitted.");
        this.form = "blank";
        this.$v.$reset();
      }
    },
    resetForm() {
      this.form = "blank";
      this.$nextTick(() => {
        this.$v.$reset();
      });
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

  .error-list {
    color: red;
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
  // input[type="text"],
  // input[type="phoneno"],
  // input[type="email"] {
  //   border: 1px solid $grey;
  // }
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
