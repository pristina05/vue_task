<template>
  <div class="ideaSection">
    <div class="container p-5">
      <div class="card-section text-center">
        <div class="row justify-content-center">
          <!-- card-section -->

          <div
            class="col-md-3 m-4 justify-content-center"
            v-for="item in items"
            v-bind:key="item"
          >
            <div class="img ">
              <img :src="item.image" class="image" alt="image" />
              <div class="content-section ">
                <div class="bg-color border-0">
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- know more section -->
        <div class="mx-auto">
          <div class="mt-5">
            <p>know more of our ideas</p>
            <button class="btn btn-danger">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/images/img2.jpeg";
import img2 from "@/assets/images/img4.jpeg";
import img3 from "@/assets/images/img5.jpeg";
export default {
  data() {
    return {
      items: [
        { image: img1, content: "legal information" },
        {
          image: img2,
          content: "political program"
        },
        {
          image: img3,
          content: "party value"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.ideaSection {
  .img-section {
    // position: relative;
    // width: 400px;
    // height: 200px;
  }

  .content-section {
    position: absolute;
    top: 155px;
    right: 13px;
    padding: 9px 49px 4px 46px;
    background-color: white;
  }
}
@media screen and(max-width:800px) {
  .ideaSection .content-section[data-v-660779e4] {
    position: absolute;
    top: 155px;
    right: 48px;
    padding: 9px 49px 4px 46px;
    background-color: white;
  }
}
</style>
