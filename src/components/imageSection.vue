<template>
  <div>
    <div class="image">
      <img src="../assets/images/img3.jpeg" alt="" class="img-section" />
      <div class="card-section white">
        Together we will make our State great again
        <div>
          <small> Simple html website candidate Example</small>
        </div>
        <div class="page-title">abc</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.image {
  position: relative;
  .img-section {
    width: 100%;
    height: 500px;
  }
  .card-section {
    position: absolute;
    padding: 38px;
    top: 85px;
    background-color: transparent;
    font-size: 31px;
    width: 300px;
    border: 1px solid white;
    border-bottom: 0px;
    left: 96px;
  }
  small {
    font-size: 20px;
  }
  .page-title{
    bottom: -61px;
  }
}
.card-section:after {
  content: "";
  display: block;
  left: 0;
  bottom: 0;
  position: absolute;
  width: 10%;
  border-bottom: 1px solid $white;
}
.page-title:after {
  content: "";
  display: block;
  /* margin: 0 auto; */
  position: absolute;
  bottom: 22px;
  right: -38px;
  width: 190px;

  border-bottom: 1px solid $white;
}
</style>
