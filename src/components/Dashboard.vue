<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-2 pb-1 pr-3">
      <h3>Dashboard</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="w-100 profile-short-info mt-4">
              <img
                src="../assets/profile-image.jpg"
                class="rounded-circle mx-auto"
                width="190"
                height="200"
                alt
              />
              <h4 class="text-center mt-3">Md Nazmul Hasan</h4>
              <h6 class="text-center pt-2">Software Engineer</h6>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Dashboard",
  components: {}
})
export default class Dashboard extends Vue {}
</script>

<style>
.profile-short-info img {
  display: block;
}
</style>
