<template>
  <div class="cardSection">
    <div class="container p-3">
      <div class="row">
        <!-- card-section -->
        <div class="col-md-4" v-for="team in teams" v-bind:key="team">
          <div class="img-section">
            <img :src="team.image" class="image img-fluid" alt="photos" />
            <div class="content-section bg-color border-0">
              <div class="content text-center mt-3">
                <div>
                  <b> {{ team.name }}</b>
                </div>
                <div>
                  <b class="pink">{{ team.content }}</b>
                </div>

                <div class="icons green mt-2">
                  <font-awesome-icon
                    :icon="['fab', 'skype']"
                    class="fa-x mr-3"
                  />
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    class="fa-x mr-3"
                  />
                  <font-awesome-icon :icon="['fa', 'globe']" class="fa-x " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/images/images.jpeg";
// import img1 from "@/assets/images/img1.jpeg";
import img2 from "@/assets/images/img2.jpeg";
import img3 from "@/assets/images/img3.jpeg";
export default {
  data() {
    return {
      teams: [
        {
          image: img1,
          name: "Stephen Jefferson",
          content: "Director"
        },
        {
          image: img2,
          name: "Kathy Hughes",
          content: "Coordinator"
        },
        {
          image: img3,
          name: "Greg Morgon",
          content: "Manager"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.cardSection {
  .image {
    width: 290px;
    height: 300px;
  }
  .img-section {
    position: relative;
    width: 400px;
    height: 200px;
  }

  .content-section {
    position: absolute;
    top: 247px;
    right: 152px;
    width: 215px;
    height: 120px;
    border: 3px solid $green;
  }
}
</style>
