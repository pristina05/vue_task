<template>
  <div class="listSection">
    <div class="container mt-5 p-5">
      <div class="row">
        <!-- list group -->
        <div class="col-md-2 col-xs-12">
          <ul class="list-group text-center">
            <li class="list-group-item list-group-item-danger list">
              Democracy
            </li>
            <li class="list-group-item mt-2 list">Family</li>
            <li class="list-group-item mt-2 list">Ecology</li>
            <li class="list-group-item mt-2 list">Social Care</li>
          </ul>
        </div>

        <!-- list content -->
        <div class="list-content col-md-10 col-xs-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. aliquip ex ea commodo consequat.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.listSection {
  padding-top: 60px;
  .list:hover {
    background-color: $swiper-color;
  }
}
@media screen and (min-width: 800px) {
  .list-content {
    padding: 12px 40px;
  }
}
</style>
