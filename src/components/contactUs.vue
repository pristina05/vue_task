<template>
  <div class="contactUs">
    <div class=" mt-5">
      <div class="row">
        <div class="form-section col-md-6 bg-lightgrey ">
          <div class="container">
            <p class="pt-3">Get in touch</p>
            <h1 class="page-title">Contact Us</h1>

            <div class="form justify-content-center mt-5">
              <!-- form -->
              <form class="form-inline" action="/action_page.php">
                <input
                  type="phoneno"
                  class="form-control  "
                  placeholder="phoneno"
                />

                <input type="email" class="form-control " placeholder="email" />
                <br />
                <input
                  type="fullname"
                  class="form-control  mt-2"
                  placeholder="fullname"
                />

                <input
                  type="topic"
                  class="form-control mt-2"
                  placeholder="topic"
                /><br />

                <textarea
                  name="message"
                  class="mt-2 "
                  rows="6"
                  cols="47"
                  placeholder="message"
                >
                </textarea>

                <br />

                <div></div>
              </form>

              <button type="submit" class="btn btn-danger mt-3 mb-3">
                Send
              </button>
            </div>
          </div>
        </div>
        <!-- image section -->
        <div class="col-lg-6 image">
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
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

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
@media screen and (max-width: 800px) {
  .image {
    background-size: cover;
    padding: 0px;
  }
  .form-section {
    padding: 0px;
  }
}
</style>
