<template>
  <div class="card-section">
    <div>
      <div class="row m-0">
        <div
          class="cards col-xl-6  col-md-6"
          v-for="item in items"
          v-bind:key="item.color"
          v-bind:style="bgc"
        >
          <!-- <font-awesome-icon :icon="['fas', 'tv']" /> -->
          <div class="icon">
            <div class="icons">
              <font-awesome-icon :icon="item.icon" class="fa-3x " />
            </div>
            <div>
              <div class="icon-content mt-2 title">
                <b> {{ item.name }}</b>
              </div>
              <div class="icon-info mt-4">
                <small>{{ item.content }}</small>
              </div>
              <div class="mt-4">
                <font-awesome-icon
                  :icon="['fa', 'chevron-circle-right']"
                  class="fa-2x "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      icon: "",
      bgc: { backgroundColor: "" },

      items: [
        {
          icon: ["far", "file"],
          // icon: "fas fa-tv",
          name: "Democracy",
          color: "#297afb",
          content: "Democracy is a system of government where we live"
        },
        {
          icon: ["fa", "user"],
          name: "Family",
          content: "Family is integral part of democracy"
        },
        {
          icon: ["fa", "globe"],
          name: "Ecology",

          content: "Their is a problem of ecology today"
        },
        {
          icon: ["fa", "thumbs-up"],
          name: "Social Care",

          content: "We are going to improve our social care in our system"
        },
        {
          icon: ["fa", "check-square"],
          name: "Policy",

          content: "Work with policy is an integral part of work"
        },
        {
          icon: ["fas", "tv"],
          name: "Education",

          content: "We are going to improve our social care in our system"
        }
      ],
      colors: [
        {
          id: "ssmf",
          hex: ["#297afb", "#2898fb", "#01d8fd"],
          title: "Sleek, Sophisticated, Mature & Formal"
        },
        {
          id: "hlfss",
          hex: ["#297afb", "#2898fb", "#01d8fd"],
          title: "Honest, Loyal, Friendly, Stable, & Strong"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.cards {
  height: 300px;
  background-color: $blue;
  border: 1px solid;
  .icon {
    padding: 65px;
    .icon-content,
    .icon-info {
      color: $white;
    }
  }
}

.fa-file,
.fa-user,
.fa-globe,
.fa-thumbs-up,
.fa-check-square,
.fa-tv {
  color: $pink;
}
.fa-chevron-circle-right {
  color: $white;
}
</style>
