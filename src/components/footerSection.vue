<template>
  <div class="footer-section">
    <div class="mt-5">
      <div class="footer-img">
        <div class="row">
          <!-- logo -->
          <div class="col-md-4 col-xs-12">
            <div class="logo-section">
              <img src="@/assets/company-logo.png" alt="logo" />
              PoliticsM4
            </div>
          </div>
          <!-- contact us -->
          <div class="col-md-4 mt-5">
            <div>
              <p class="title white">Contact US</p>
              <div v-for="list in lists" v-bind:key="list">
                <div class="icon d-flex mt-3">
                  <div class="icons green">
                    <font-awesome-icon :icon="list.icon" class="fa-x " />
                  </div>

                  <div class="icon-content pl-3 ">
                    <b class="white"> {{ list.content }}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- links -->
          <div class="col-md-4  mt-5">
            <p class="title white ml-3">Links</p>
            <div v-for="link in links" v-bind:key="link">
              <div class="icons d-flex col-lg-1 mt-3">
                <font-awesome-icon
                  :icon="['fa', 'chevron-right']"
                  class="fa-1x "
                />
                <div class="icon-content col-lg-3 ">
                  <b class="white"> {{ link.content }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--copyright section  -->
      <div class="copyright">
        <div class="row">
          <div class="col-md-4 col-xs-12 mt-3">
            <p class="copyright-content">
              &copy; Copyright 2019 mobirise - Simple Html Website
            </p>
          </div>
          <div class="col-md-8 col-xs-12 mt-3">
            <div class="icon-section">
              <div class="row">
                <div class="col-md-2">
                  <font-awesome-icon :icon="['fab', 'facebook']" class="fa-x" />
                  facebook
                </div>
                <div class="col-md-2">
                  <font-awesome-icon :icon="['fab', 'twitter']" class="fa-x" />
                  twitter
                </div>
                <div class="col-md-2">
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    class="fa-x"
                  />
                  instagram
                </div>
                <div class="col-md-2">
                  <font-awesome-icon :icon="['fa', 'phone']" class="fa-x" />
                  youtube
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
export default {
  data: function() {
    return {
      icon: "",
      lists: [
        {
          icon: ["fa", "map-marker"],

          content: "1234 Street Name"
        },
        {
          icon: ["fa", "eye-dropper"],

          content: "City, AA 99999"
        },
        {
          icon: ["fa", "envelope"],

          content: "support@mobirise.com"
        },
        {
          icon: ["fa", "phone"],

          content: "+1(0)0000000"
        }
      ],
      links: [
        {
          content: "Contact"
        },
        {
          content: "Programm"
        },
        {
          content: "Events"
        },
        {
          content: "Members"
        },
        {
          content: "Issure"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.footer-section {
  .row {
    margin: 0px;
  }
  .footer-img {
    background-color: $border-bottom-color;
  }
  .logo-section {
    padding-top: 5px;
    color: $white;
    font-size: 24px;
  }
  .copyright {
    background-color: $black;
  }
  .fa-chevron-right {
    color: $gold;
  }
}
@media screen and(min-width: 800px) {
  .footer-section {
    // padding-left: 69px;
    .copyright-content {
      padding-left: 90px;
    }
    .icon-section {
      padding-left: 108px;
    }
    .logo-section {
      padding: 56px 0px 0px 146px;
      color: $white;
      font-size: 24px;
    }
  }
}
</style>
