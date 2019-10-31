<template>
  <div class="contactUs">
    <div class="mt-5">
      <div class="row">
        <div class="form-section col-md-6 bg-lightgrey ">
          <div class="container">
            <p class="pt-3">Get in touch</p>
            <h1 class="page-title">Contact Us</h1>

            <div class="form justify-content-center mt-5">
              <form
                class="form-inline needs-validation"
                action="/action_page.php"
                novalidate
              >
                <div class="form-group ">
                  <input
                    type="tel"
                    class="form-control col-md-12"
                    placeholder="Phone Number"
                  />
                </div>
                <!-- <input type="email" class="form-control " placeholder="Email" />
                 -->
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.email.$error }"
                >
                  <input
                    type="email"
                    class="form-control col-md-12"
                    placeholder=" email"
                    v-model.trim="$v.email.$model"
                  />
                </div>
                <div class="error" v-if="!$v.email.required">
                  Field is required
                </div>
                <br />

                <!-- name -->

                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.name.$error }"
                >
                  <input
                    class="form-control col-md-12"
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
                <tree-view
                  :data="$v.name"
                  :options="{ rootObjectKey: '$v.name', maxDepth: 2 }"
                ></tree-view>
                <!-- topic -->
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control col-md-12 "
                    placeholder="Topic"
                  /><br />
                </div>

                <!--  -->
                <textarea
                  name="text"
                  class="mt-2 "
                  rows="6"
                  cols="47"
                  placeholder="message"
                >
                </textarea>

                <br />
                <!--  -->
                <div>
                  <button type="submit" class="btn btn-danger mt-3 mb-3">
                    Send
                  </button>
                </div>
              </form>
            </div>

            <!-- <div>
              <form @submit.prevent="submit">
              
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.age.$error }"
                >
                  <label class="form__label">Age</label>
                  <input
                    class="form__input"
                    v-model.trim.lazy="$v.age.$model"
                  />
                </div>
                <div class="error" v-if="!$v.age.between">
                  Must be between {{ $v.age.$params.between.min }} and
                  {{ $v.age.$params.between.max }}
                </div>

                <tree-view
                  :data="$v.age"
                  :options="{ rootObjectKey: '$v.age', maxDepth: 2 }"
                ></tree-view>
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
              </form>
            </div> -->
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

} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      age: 0
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
      required,
    
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
