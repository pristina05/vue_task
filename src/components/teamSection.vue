<template>
  <div class="teamSection">
    <div class="team text-center main-title mt-5"><b>Our Team </b></div>
    <cardSection />
    <listSection />
  </div>
</template>
<script>
import cardSection from "@/components/cardSection.vue";
import listSection from "@/components/listSection.vue";
export default {
  components: {
    cardSection,
    listSection
  }
};
</script>
<style lang="scss" scoped>
.team {
  font-size: 30px;
}
</style>
