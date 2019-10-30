<template>
  <div id="swiperSection">
    <div class="container ">
      <div class="mt-5 " data-aos="fade-down"></div>
      <!--  Swiper Slider -->
      <swiper
        ref="mySwiper"
        :options="swiperOption"
        @someSwiperEvent="callback"
      >
        <!-- slides -->
        <swiper-slide
          v-for="cardcontent in cardcontents"
          :key="cardcontent.index"
          class="swiper-card"
        >
          <div class="card swiper-card-section border-0" data-aos="zoom-in">
            <div class="photo-image">
              <img :src="cardcontent.image" class="image" alt="ceo-photos" />
            </div>

            <div class="card-content mt-3">
              <div class="card-title">
                <h1 class="text-center">{{ cardcontent.title }}</h1>
              </div>
              <div class="card-text">
                <div class="card-text text-center">{{ cardcontent.name }}</div>
                <div class="card-text text-center">
                  {{ cardcontent.designation }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div slot="pagination" class="swiper-pagination"></div>
        <div
          slot="button-prev"
          class="swiper-button swiper-button-prev swiper-button"
        ></div>
        <div
          slot="button-next"
          class="swiper-button swiper-button-next swiper-button"
        ></div>
      </swiper>
      <!-- Swiper Slider End -->
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/images/header_img.jpeg";
import img2 from "@/assets/images/images.jpeg";
import img3 from "@/assets/images/img1.jpeg";
import img4 from "@/assets/images/img2.jpeg";
export default {
  data() {
    return {
      cardcontents: [
        {
          image: img1,
          title: "What people say",
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          designation: "CEO Facebook"
        },
        {
          image: img2,
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          title: "Mary Barra",
          designation: "CEO & Founder"
        },
        {
          image: img3,
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          title: "Laurie Lang",
          designation: "CEO Optima Inc"
        },
        {
          image: img4,
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          title: "Tim Cook",
          designation: "CEO & Founder"
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        // spaceBetween: 10,
        freeMode: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.card {
  // width: 700px;
}
.image {
  width: 123px;
  border-radius: 50%;
  height: 143px;
  display: block;
  margin: auto;
}

.card-content {
  padding: 17px;
}
.swiper-button-next {
  left: auto;
  height: 30px;
}
.swiper-button-prev {
  right: auto;
  height: 30px;
}

@media screen and (min-width: 800px) {
  .swiper-card-section {
    padding: 15px 237px;
    // box-shadow: 2px 2px 13px 10px #888888;
  }
  .swiper-button-next {
    right: 182px;
    left: auto;
    height: 30px;
  }
  .swiper-button-prev {
    left: 180px;
    right: auto;
    height: 30px;
  }
}
</style>
