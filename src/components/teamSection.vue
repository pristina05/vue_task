<template>
  <div class="container">
    <div class="text-center main-title mt-3"><b>Our Team </b></div>
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
