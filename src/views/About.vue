<template>
  <div>
    sdfsdf
    <div class="row">
      <div class="card" v-for="item in items" v-bind:key="item.id">
        <div class="col-md-4">
          <div>{{ item.name }}</div>
          <div>
              <img :src="item.image" class="image img-fluid" alt="photos" />
          </div>
        </div>
      </div>
    </div>

    <validation />
  </div>
</template>
<script>
import img from "@/assets/images/img1.jpeg"
// import validation from "@/components/validation.vue";
export default {
  data() {
    return {
      items: [
        {
          name: "Pic1",
          image:img
        },
        {
          name: "Pic2"
        }
      ]
    };
  },
  components: {
    // validation
  }
};
</script>
