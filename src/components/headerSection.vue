<template>
  <div class="headerSection">
    <div class="header">
      <div>
        <b-navbar toggleable="lg">
          <b-navbar-brand>
            <img src="@/assets/company-logo.png" alt="logo" />
          </b-navbar-brand>
          <b-navbar-brand class="mr-5">PoliticsM4</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item class="text-light"><a> Home</a></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav>
              <b-nav-item-dropdown text="Live-demo">
                <b-dropdown-item>EN</b-dropdown-item>
                <b-dropdown-item>ES</b-dropdown-item>
                <b-dropdown-item>RU</b-dropdown-item>
                <b-dropdown-item>FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>Live-demo Blocks</em>
                </template>
                <b-dropdown-item>Profile</b-dropdown-item>
                <b-dropdown-item>Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <b-button variant="primary">Buy now</b-button></b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.btn {
  padding: 5px 28px;
}
a {
  color: $black;
}
</style>
