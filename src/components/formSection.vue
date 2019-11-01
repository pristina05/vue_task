<template>
  <div class="container">
    <div class="column">
      <div class="text-left main-form-section">
        <b-form name="form">
          <!-- Personal Details -->
          <div class="card inception">
            <div class="tab-heading tab-heading-one inception">
              <h3 class="text animated-scrolling-function-one">
                Personal Details
              </h3>
            </div>
            <div class="form-content">
              <!-- first name -->
              <b-form-group label="First Name:" label-for="firstName">
                <b-form-input
                  id="firstName"
                  type="text"
                  v-model="form.firstName"
                  required
                  placeholder="Enter First Name"
                  @click="firstNameTouch()"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.firstName.$error &&
                      !$v.form.firstName.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  first name is required
                </div>
              </b-form-group>
              <!-- middle name -->
              <b-form-group label="Middle Name:" label-for="middleName">
                <b-form-input
                  id="middleName"
                  type="text"
                  v-model="form.middleName"
                  required
                  placeholder="Enter Last Name"
                  @click="middleNameTouch()"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.middleName.$error &&
                      !$v.form.middleName.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  middle name is required
                </div>
              </b-form-group>

              <!-- last name -->
              <b-form-group label="Last Name:" label-for="lastName">
                <b-form-input
                  id="lastName"
                  type="text"
                  v-model="form.lastName"
                  required
                  placeholder="Enter Last Name"
                  @click="lastNameTouch()"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.lastName.$error &&
                      !$v.form.lastName.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  last name is required
                </div>
              </b-form-group>

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
                  v-if="
                    $v.form.selectedGender.$error &&
                      !$v.form.selectedGender.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  gender is required
                </div>
              </b-form-group>

              <!-- date -->
              <b-form-group>
                <div class="row">
                  <div class="col-sm-8 d-flex">
                    <div class="col-xs-12">
                      <b-form-group
                        class
                        id="calendar"
                        name="calendar"
                        label="Date Of Birth:"
                        required
                      >
                        <no-ssr>
                          <datepicker
                            v-model="form.dob"
                            v-on:change="selectDate(form.dob)"
                            type="number"
                            :lang="'en'"
                            :first-day-of-week="1"
                            :format="'dd-MM-yyyy'"
                            :placeholder="'Select your Date of Birth'"
                            class="mb-5 datepicker"
                            name="birth-date"
                            id="birth-date"
                            input-class="datepicker-input"
                            calendar-class="datepicker-calendar"
                            @click="dobTouch()"
                          ></datepicker>
                          <!-- :max-datetime="maxDateTime" -->
                        </no-ssr>
                        <!-- <date-picker
 v-model="form.dob"
 v-on:change="selectDate(form.dob)"
 type="number"
 :lang="'es'"
 :first-day-of-week="1"
 :format="'YYYY-MM-DD'"
 class
 :placeholder="'Select Date'"
 ></date-picker> -->
                      </b-form-group>
                    </div>
                    <div class="col-xs-12">
                      <b-form-group label="age:" label-for="age">
                        <b-form-input
                          id="age"
                          type="text"
                          v-model="form.age"
                          required
                          placeholder="age"
                        ></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-infonote">
                      Kindly enter the date of birth mentioned on your Aadhar
                      card/ Pan Card/ Birth Certificate
                    </div>
                  </div>
                </div>
                <div
                  v-if="
                    $v.form.dob.$error && !$v.form.dob.required && removeText
                  "
                  class="error-txt"
                >
                  first select date
                </div>
              </b-form-group>
              <div class="row">
                <div class="col-md-8 ">
                  <!-- password -->
                  <b-form-group label="Create Password:" label-for="password">
                    <b-form-input
                      id="password"
                      type="password"
                      name="password"
                      v-model="form.password"
                      required
                      placeholder="Minimum 8 Characters"
                      @click="passwordTouch()"
                    ></b-form-input>
                    <div
                      v-if="$v.form.password.$error && removeText"
                      class="error-txt"
                    >
                      <span v-if="!$v.form.password.required"
                        >Password is required</span
                      >
                      <span v-if="!$v.form.password.minLength"
                        >Password must be at least 8 characters</span
                      >
                    </div>
                  </b-form-group>

                  <!-- Confirm Password-->
                  <b-form-group
                    label="Confirm Password:"
                    label-for="Confirm Password"
                  >
                    <b-form-input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      v-model="form.confirmPassword"
                      required
                      placeholder="Re-enter Password"
                      @click="confirmPasswordTouch()"
                    ></b-form-input>
                    <div
                      v-if="$v.form.confirmPassword.$error && removeText"
                      class="error-txt"
                    >
                      <span v-if="!$v.form.confirmPassword.required">
                        Confirm Password is required</span
                      >
                      <span v-else-if="!$v.form.confirmPassword.sameAsPassword"
                        >Passwords must match</span
                      >
                    </div>
                  </b-form-group>
                </div>
                <div class="col-sm-4">
                  <div class="form-infonote">
                    You will need this password to login, check and edit sport
                    details (if required). The password must be kept
                    confidential.
                  </div>
                </div>
              </div>
              <!-- mobile no -->
              <b-form-group label="Mobile No:" label-for="mobileNO">
                <b-form-input
                  id="mobileNO"
                  type="number"
                  v-model="form.mobileNO"
                  :maxlength="10"
                  :minlength="10"
                  required
                  placeholder="Enter Mobile no "
                  @click="mobileNOTouch()"
                ></b-form-input>
                <div
                  v-if="$v.form.mobileNO.$error && removeText"
                  class="error-txt"
                >
                  <span v-if="!$v.form.mobileNO.required">
                    mobile no is required
                  </span>
                  <span v-if="!$v.form.mobileNO.minLength"
                    >mobile number must be 10 digits</span
                  >
                </div>
              </b-form-group>

              <!-- email -->
              <b-form-group label="Email:" label-for="email">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  v-model="form.email"
                  pattern=".+@gmail.com"
                  required
                  placeholder="Enter Email"
                  @click="emailTouch()"
                />
                <div
                  v-if="$v.form.email.$error && removeText"
                  class="error-txt"
                >
                  <span v-if="!$v.form.email.required">gmail is required</span>
                  <span v-if="!$v.form.email.email">Email is invalid</span>
                </div>
              </b-form-group>
            </div>
          </div>
          <!-- Personal Details End-->
          <!-- School Details -->
          <div class="card inception">
            <div class=" tab-heading tab-heading-two inception">
              <h3 class="text animated-scrolling-function-two">
                School Details
              </h3>
            </div>
            <div class="form-content">
              <!-- first name -->
              <b-form-group label="School Name:" label-for="firstName">
                <v-select
                  v-model="form.SchoolName"
                  label="text"
                  :options="schoolOptions"
                  placeholder="Select School Name"
                ></v-select>
                <div
                  v-if="
                    $v.form.SchoolName.$error &&
                      !$v.form.SchoolName.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  school name is required
                </div>
              </b-form-group>
              <!--Address section -->

              <b-form-group label="Residential Address:" label-for>
                <b-form-textarea
                  id="textarea"
                  v-model="form.Address"
                  placeholder="Enter Residential Address..."
                  rows="3"
                  max-rows="6"
                  class="scroll-color"
                ></b-form-textarea>
                <div
                  v-if="
                    $v.form.Address.$error &&
                      !$v.form.Address.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  Address is required
                </div>
              </b-form-group>
              <!-- state input -->
              <b-form-group label="State:" label-for="state">
                <v-select
                  placeholder="Select state"
                  v-model="form.state"
                  label="text"
                  class="v-select"
                  :options="stateOptions"
                  @click="stateTouch()"
                ></v-select>
                <div
                  v-if="
                    $v.form.state.$error &&
                      !$v.form.state.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  State is required
                </div>
              </b-form-group>
              <!-- city input -->
              <b-form-group label="City:" label-for="city">
                <multiselect
                  v-model="form.city"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="name"
                  track-by="code"
                  class="v-select"
                  :options="cityOptions"
                  :multiple="true"
                  @click="cityTouch()"
                ></multiselect>
                <div
                  v-if="
                    $v.form.city.$error && !$v.form.city.required && removeText
                  "
                  class="error-txt"
                >
                  State is required
                </div>
              </b-form-group>
            </div>
          </div>
          <!-- School Details End-->
          <!-- Upload Document -->
          <div class="card inception">
            <div class=" tab-heading tab-heading-three inception">
              <h3 class="text animated-scrolling-function-four">
                Upload Document
              </h3>
            </div>
            <div class="form-content">
              <div class="row">
                <!-- School ID -->
                <div class="col-md-8">
                  <label for="" class="control-label"
                    >*Upload School ID Proof:</label
                  >
                  <b-form-file
                    v-model="form.file2"
                    class="mt-3"
                    plain
                    accept=".jpg, .png, .gif"
                  ></b-form-file>
                  <div
                    v-if="
                      $v.form.file2.$error &&
                        !$v.form.file2.required &&
                        removeText
                    "
                    class="error-txt"
                  >
                    School ID Proof is required
                  </div>
                  <!-- <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }} -->
                  <!-- <img :src="file2 ? file2.name : ''" height="160" /> -->
                  <!-- </div> -->
                </div>
                <div class="col-md-4">
                  <div class="form-infonote">
                    Kindly upload your most recent School ID or Report Card.
                    This is to verify that you are an athlete from the selected
                    school. Kindly upload only .jpg or .png format. Maximum file
                    size 5MB
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-8">
                  <label for="" class="control-label">*Upload Age Proof:</label>
                  <v-select
                    v-model="form.ageProof"
                    label="text"
                    :options="ageProof"
                    placeholder="Select Document"
                    class="v-select"
                  ></v-select>
                  <div
                    v-if="
                      $v.form.ageProof.$error &&
                        !$v.form.ageProof.required &&
                        removeText
                    "
                    class="error-txt"
                  >
                    Age Proof is required
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-infonote">For age verification</div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-8">
                  <label for="" class="control-label"
                    >*Upload Address Proof:</label
                  >
                  <b-form-file
                    v-model="form.file"
                    :state="Boolean(file)"
                    placeholder="Choose a file"
                  >
                  </b-form-file>
                  <div
                    v-if="
                      $v.form.file.$error &&
                        !$v.form.file.required &&
                        removeText
                    "
                    class="error-txt"
                  >
                    Address Proof is required
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-infonote">For address verification</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Upload Document End -->
          <!-- Bank Details -->
          <div class="card inception">
            <div class="tab-heading tab-heading-three inception">
              <h3 class="text animated-scrolling-function-three">
                Bank Details
              </h3>
            </div>
            <div class="form-content">
              <div class="row">
                <div class="col-md-8">
                  <!-- Bank Name -->
                  <b-form-group label="*Bank Name:" label-for="Bank Name">
                    <v-select
                      placeholder="Select Bank Name"
                      v-model="form.bankName"
                      label="text"
                      class="v-select"
                      :options="bankNameOptions"
                    ></v-select>
                    <div
                      v-if="
                        $v.form.bankName.$error &&
                          !$v.form.bankName.required &&
                          removeText
                      "
                      class="error-txt"
                    >
                      Bank Name is required
                    </div>
                  </b-form-group>
                  <!-- Bank Name End -->
                </div>
                <div class="col-md-4"></div>
              </div>
              <!-- Card number -->
              <div class="row mt-3">
                <div class="col-md-8">
                  <b-form-group label="*Card number:">
                    <the-mask
                      :mask="['#### #### #### ####']"
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="Enter Card Number"
                      class="mask-input"
                      v-model="form.cardNumber"
                      required
                    />
                    <div
                      class="error-txt"
                      v-if="$v.form.cardNumber.$error && removeText"
                    >
                      <span v-if="!$v.form.cardNumber.required"
                        >Card Number required</span
                      >
                      <span v-if="!$v.form.password.minLength"
                        >Card Number must be at least 8 characters</span
                      >
                    </div>
                  </b-form-group>
                </div>
                <div class="col-md-4">
                  <div class="form-infonote">
                    Kindly enter the 16 Digits bank Card Number
                  </div>
                </div>
              </div>
              <!-- Card Number End -->
              <!-- Date of Expiry -->
              <div class="row mt-3">
                <div class="col-md-8">
                  <b-form-group label="*Date of Expiry:">
                    <the-mask
                      :mask="['##/##']"
                      type="text"
                      id="dateOfExpiry"
                      name="dateOfExpiry"
                      placeholder="00/00"
                      class="mask-input"
                      v-model="form.dateOfExpiry"
                      required
                      :maxlength="5"
                    />
                    <div
                      class="error-txt"
                      v-if="
                        $v.form.dateOfExpiry.$error &&
                          !$v.form.dateOfExpiry.required &&
                          removeText
                      "
                    >
                      Card Number required
                    </div>
                  </b-form-group>
                </div>
                <div class="col-md-4"></div>
              </div>
              <!-- Date of Expiry End -->
              <!-- CVV -->
              <div class="row mt-3">
                <div class="col-md-8">
                  <b-form-group label="*CVV:">
                    <the-mask
                      :mask="['###']"
                      type="password"
                      id="cvv"
                      name="cvv"
                      placeholder="CVV"
                      class="mask-input"
                      v-model="form.cvv"
                      :maxlength="3"
                      required
                    />
                    <div
                      class="error-txt"
                      v-if="
                        $v.form.cvv.$error &&
                          !$v.form.cvv.required &&
                          removeText
                      "
                    >
                      Card Number required
                    </div>
                  </b-form-group>
                </div>
                <div class="col-md-4"></div>
              </div>
              <!-- CVV End-->
              <!-- <div class="row mt-3">
 <div class="col-md-8">
 <div class="toggle-custom">
 <label class="switch">
 <input type="checkbox" id="togBtn" />
 <div class="slider round"></div>
 </label>
 </div>
 </div>
 </div> -->
            </div>
          </div>
          <!-- Bank Details End -->
          <!-- Submit Section -->
          <div class="card inception">
            <div class="tab-heading tab-heading-three inception">
              <h3 class="text animated-scrolling-function-five">
                Submit Section
              </h3>
            </div>
            <div class="form-content">
              <!-- Terms and Conditions -->
              <div class="row">
                <div class="col-md-8">
                  <label for="" class="control-label"
                    >*Terms & Conditions:</label
                  >
                  <div>
                    To continue accept our terms and conditions, loan agreement
                    and privacy policy.
                  </div>
                  <b-form-group class="sms-checkbox">
                    <b-form-checkbox-group
                      id="flavour1a"
                      name="flavour1a"
                      required
                      v-model="form.flavour1a"
                      :options="termsOptions"
                    ></b-form-checkbox-group>
                  </b-form-group>
                  <div
                    class="error-txt"
                    v-if="
                      $v.form.flavour1a.$error &&
                        !$v.form.flavour1a.required &&
                        removeText
                    "
                  >
                    Select atleast one is mandatory
                  </div>
                </div>
                <div class="col-md-4"></div>
              </div>
              <!-- Terms and Conditions End -->
              <!-- submit and reset button -->
              <div class="text-center pb-5 mb-5">
                <b-button
                  type="submit"
                  v-on:click="onSubmit(form)"
                  to="#"
                  variant="primary"
                  >Submit</b-button
                >
                <b-button
                  class="ml-4"
                  type="reset"
                  v-on:click="ResetBtn()"
                  variant="danger"
                  >Reset</b-button
                >
                <!-- <b-button class="ml-4"
 variant="danger"
 v-b-modal.modal
 >Reset</b-button> -->
              </div>
              <!--modal-->
              <b-modal
                class="modal fade"
                id="modal"
                tabindex="-1"
                hide-footer
                role="dialog"
                aria-labelledby="footTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="text-center">
                    Are you sure you want to reset information?
                  </div>
                </div>
                <div id="footer" class="text-right">
                  <!-- <b-button variant="success" aria-label="Close">Cancel</b-button> -->
                  <b-button
                    variant="danger"
                    v-on:click="ResetBtn()"
                    type="reset"
                    >Reset</b-button
                  >
                </div>
              </b-modal>
              <!--modal-->
            </div>
          </div>
          <!-- Terms and Conditions -->

          <!-- Submit Section End -->
        </b-form>
      </div>
    </div>
  </div>
</template>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuejs-datepicker"></script>
<script>
import VueMoment from "vue-moment";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      // maxDateTime: moment().format(),
      file2: null,
      date: null,
      file: null,
      value: "",
      show: true,
      removeText: "true",
      errors: [],
      bootstrapBtnPromise: "",
      submitStatus: "true",
      schoolOptions: [
        // { value: "", text: "Select Documents" },
        { value: "a", text: "kt vidyalaya" },
        { value: "b", text: "saraswati vidyalaya" },
        { value: "c", text: "diva vidyalaya" },
        { value: "d", text: "don bosko high school" },
        { value: "e", text: "vikas high school" },
        { value: "f", text: "jk hight school" }
      ],
      cityOptions: [
        { value: "thane", name: "Thane" },
        { value: "mulund", name: "Mulund" },
        { value: "nahur", name: "Nahur" },
        { value: "bhandup", name: "Bhandup" },
        { value: "kanjur", name: "Kanjur" },
        { value: "kalyan", name: "Kalyan" },
        { value: "badlapur", name: "Badlapur" },
        { value: "diva", name: "Diva" }
      ],
      termsOptions: [
        { text: "sms", value: "SMS" },
        { text: "email", value: "Email" },
        { text: "phone", value: "Phone" }
      ],
      ageProof: [
        // { value: "", text: "Select Documents"},
        { value: "aadharCard", text: "Aadhar Card" },
        { value: "birthCert", text: "Birth Certificate + Photo ID" },
        { value: "panCard", text: "PAN Card" },
        { value: "passport", text: "Passport" }
      ],
      stateOptions: [
        // { value: "", text: "Select State" },
        { value: "a", text: "Maharashtra" },
        { value: "b", text: "Gujrat" },
        { value: "c", text: "Bihar" },
        { value: "d", text: "Rajstan" },
        { value: "e", text: "Ranchi" },
        { value: "f", text: "Madya Pradesh" }
      ],
      bankNameOptions: [
        // { value: null, text: "Select Bank Name" },
        { value: "a", text: "Axis Bank" },
        { value: "b", text: "ICICI Bank" },
        { value: "c", text: "HDFC Bank" },
        { value: "d", text: "State Bank of India" },
        { value: "e", text: "Dena Bank" },
        { value: "f", text: "Hitesh Bank" }
      ],
      form: {
        firstName: "",
        middleName: "",
        lastName: "",
        selectedGender: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
        age: "",
        mobileNO: "",
        SchoolName: "",
        Address: "",
        state: "",
        required: "",
        ageProof: "",
        file: "",
        file2: "",
        cardNumber: "",
        bankName: "",
        dateOfExpiry: "",
        cvv: "",
        flavour1a: "",
        checked: []
      }

      // custom range shortcuts
      // shortcuts: [
      // {
      // text: "Today",
      // onClick: () => {
      // this.time3 = [new Date(), new Date()];
      // }
      // }
      // ],
    };
  },
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      middleName: {
        required
      },
      selectedGender: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      dob: {
        required
      },
      mobileNO: {
        required,
        min: minLength(10),
        max: maxLength(10)
      },
      SchoolName: {
        required
      },
      Address: {
        required
      },
      state: {
        required
      },
      city: {
        required
      },
      ageProof: {
        required
      },
      file2: {
        required
      },
      file: {
        required
      },
      cardNumber: {
        required,
        minLength: minLength(8)
        // maxLength: maxLength(19)
      },
      bankName: {
        required
      },
      dateOfExpiry: {
        required
      },
      cvv: {
        required
      },
      flavour1a: {
        required
      }
    }
  },
  methods: {
    ResetBtn() {
      this.removeText = false;
    },
    emailTouch() {
      this.$v.form.email.$touch();
    },
    firstNameTouch() {
      this.$v.form.firstName.$touch();
    },
    middleNameTouch() {
      this.$v.form.middleName.$touch();
    },
    lastNameTouch() {
      this.$v.form.lastName.$touch();
    },
    dobTouch() {
      this.$v.form.dob.$touch();
    },
    passwordTouch() {
      this.$v.form.password.$touch();
    },
    confirmPasswordTouch() {
      this.$v.form.confirmPassword.$touch();
    },
    mobileNOTouch() {
      this.$v.form.mobileNO.$touch();
    },
    confirmPasswordTouch() {
      this.$v.form.confirmPassword.$touch();
    },
    stateTouch() {
      this.$v.form.state.$touch();
    },
    cityTouch() {
      this.$v.form.city.$touch();
    },
    onSubmit() {
      console.log("Token", this.$globalValue);
      this.removeText = true;
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        this.$toaster.error("Please fill all details.");
        return;
      }
      this.$toaster.success("Successfully registration done.");
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.firstName = "";
      this.form.middleName = "";
      this.form.lastName = "";
      this.form.selectedGender = "";
      this.form.email = "";
      this.form.password = "";
      this.form.dob = "";
      this.form.age = "";
      this.form.mobileNO = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = true;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    selectDate: function(value) {
      this.form.age =
        moment(new Date()).format("YYYY") - moment(value).format("YYYY");
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/main.scss";
.error-txt {
  color: $red;
}
.datepicker-input {
  background-color: transparent;
  border: 1px solid $black;
  box-shadow: none;
  border-radius: 0.25rem;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
}
// .scroll-color::-webkit-scrollbar-track {
// border: 1px solid $black;
// padding: 2px 0;
// background-color: transparent;
// }

// .scroll-color::-webkit-scrollbar {
// width: 10px;
// }

// .scroll-color::-webkit-scrollbar-thumb {
// border-radius: 10px;
// // box-shadow: inset 0 0 6px rgba(0,0,0,.3);
// background-color: transparent;
// // border: 1px solid #000;
// }
.animated-scrolling-function-one {
  -webkit-animation: ps 50s infinite; /* Safari 4.0 - 8.0 */
  animation: ps 50s infinite;
}
.animated-scrolling-function-two {
  -webkit-animation: sd 50s infinite; /* Safari 4.0 - 8.0 */
  animation: sd 50s infinite;
}
.animated-scrolling-function-three {
  -webkit-animation: ud 50s infinite; /* Safari 4.0 - 8.0 */
  animation: ud 50s infinite;
}
.animated-scrolling-function-four {
  -webkit-animation: bd 50s infinite; /* Safari 4.0 - 8.0 */
  animation: bd 50s infinite;
}
.animated-scrolling-function-five {
  -webkit-animation: su 50s infinite; /* Safari 4.0 - 8.0 */
  animation: su 50s infinite;
}

.form-infonote {
  padding: 8px;
  color: #757575;
  background-color: #e5e5e5;
  font-style: italic;
  font-size: 12px;
}
.v-select {
  width: 50%;
  border: 1px solid $black;
  border-radius: 4px;
}
.multiselect__tags {
  background-color: transparent;
  .multiselect__placeholder {
    color: #576462;
    line-height: 1.4;
    font-size: 1em;
  }
}

.mask-input {
  margin: 0;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid $black;
  border-radius: 4px;
}
.column {
  .main-form-section {
    margin: 0 3rem;
    color: $black;
    .card {
      font-size: 1.1rem;
      font-weight: 400;
      margin: 7rem 0;
      padding: 0 0 1rem 0;
      width: 100%;
      box-shadow: 0.3rem 1.3rem 2rem 2px rgba(56, 65, 56, 0.41);
      background-color: $light-white;
      p {
        margin: 0 1rem 1rem 1rem;
        color: #333;
        font-size: 1.2rem;
        font-weight: 300;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .tab-heading {
        font-family: "Open Sans";
        font-weight: 600;
        border-top: 0.3rem solid #03a9f4;
        margin: 0 0 1rem 0;
        color: $fg-color;
        background-color: transparent;
        display: flex;
        justify-content: flex-start;
        position: relative;
        &:before,
        &:after {
          content: "";
          display: block;
          width: 1rem;
          height: 1rem;
          background-color: transparent;
          background-image: $inverted-corner;
          background-size: contain;
          background-repeat: no-repeat;
          margin-top: -1px;
        }
        &:before {
          margin: 0 0 0 1rem;
        }
        &:after {
          transform: rotateZ(270deg);
        }
        .text {
          display: block;
          background-color: $heading-bg-color;
          padding: 0.2rem 1rem 0.5rem;
          border-color: $heading-bg-color;
          border-bottom-right-radius: 1rem;
          border-bottom-left-radius: 1rem;
          position: relative;
          box-shadow: 0.1rem 0.4rem 0.5rem -3px rgba(0, 0, 0, 0.56);
          margin-top: -1px;
          &:before,
          &:after {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
          }
          &:before {
            bottom: 0.4rem;
            right: 0.9rem;
            width: 75%;
            height: 1.6rem;
            box-shadow: 0.8rem 0.4rem 1rem -0.9px rgba(0, 0, 0, 0.76);
            transform: rotate(6deg);
            border-bottom-right-radius: 1rem;
          }
          &:after {
            top: -0.7rem;
            right: 0.65rem;
            transform: rotate(20deg);
            content: "(";
            color: transparent;
            font-size: 1.7rem;
            font-weight: 900;
            text-shadow: 1rem 0 0.4rem $black;
          }
        }
      }
      .form-content {
        margin: 0 2rem;
      }
      .btn-upload {
        background-color: transparent;
        color: $btn-upload-blue;
        border-color: $btn-upload-blue;
      }
      .btn-upload:hover {
        color: $btn-upload-white;
        background-color: $btn-upload-green;
        border-color: $btn-upload-green;
      }
    }
  }
}
/*
 ##Device = Low Resolution Tablets, Mobiles (Landscape)
 ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  //CSS
}

/*
 ##Device = Most of the Smartphones Mobiles (Portrait)
 ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .animated-scrolling-function-one,
  .animated-scrolling-function-two,
  .animated-scrolling-function-three,
  .animated-scrolling-function-four,
  .animated-scrolling-function-five {
    -webkit-animation: ps 50s infinite;
    animation: ps 50s infinite;
  }
  .form-control {
    width: 100%;
  }
  .v-select {
    width: 100%;
  }
  .column {
    .main-form-section {
      margin: 0rem;
    }
  }
}
.modal-dialog-centered::before {
  height: 0;
}
</style>
