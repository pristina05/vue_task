<template>
  <div>
    <headerSection />
    <imageSection />
    <democracySection />
    <youthSection />
    <ideaSection />
    <socialSection />
    <validation/>
    <formSection/>
    <subscription />
    <cardSection />
    <teamSection />
    <listSection />
    <contactSection />
    <swiperSection />

    <footerSection />
  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/headerSection.vue";
import imageSection from "@/components/imageSection.vue";
import democracySection from "@/components/democracySection.vue";
import youthSection from "@/components/youthSection.vue";
import ideaSection from "@/components/ideaSection.vue";
import subscription from "@/components/subscription.vue";
import socialSection from "@/components/socialSection.vue";
// import validation from "@/components/validation.vue";
// import formSection from "@/components/formSection.vue";
// import cardSection from "@/components/cardSection.vue";
import teamSection from "@/components/teamSection.vue";
// import listSection from "@/components/listSection.vue";
import contactSection from "@/components/contactUs.vue";
import swiperSection from "@/components/swiperSection.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "home",
  components: {
    headerSection,
    imageSection,
    democracySection,
    youthSection,
    ideaSection,
    subscription,
    socialSection,
    // validation,
    // formSection,
    // cardSection,
    teamSection,
    // listSection,
    contactSection,
    swiperSection,
    footerSection
  }
};
</script>
