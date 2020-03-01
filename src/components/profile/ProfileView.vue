<template>
  <div class="profileView pt-5 pb-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-lg-4">
          <div class="w-100 profile-image">
            <img
              src="../../assets/profile-image.jpg"
              class="rounded-circle mx-auto"
              width="210"
              height="240"
              alt
            />
          </div>
        </div>
        <div class="col-md-8 col-sm-8 col-lg-8">
          <div class="w-100">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>Md Nazmul Hasan</td>
                </tr>
                <tr>
                  <td>
                    <b>Email</b>
                  </td>
                  <td>hasan08sust@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <b>Username</b>
                  </td>
                  <td>hasan08sust</td>
                </tr>
                <tr>
                  <td>
                    <b>Designation</b>
                  </td>
                  <td>Software Engineer</td>
                </tr>
                <tr>
                  <td>
                    <b>Joined Date</b>
                  </td>
                  <td>03/02/2020</td>
                </tr>
                <tr>
                  <td>
                    <b>Branch</b>
                  </td>
                  <td>FarHaPartex BD</td>
                </tr>
                <tr>
                  <td>
                    <b>Division</b>
                  </td>
                  <td>Dhaak, Bangladesh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "ProfileView",
  components: {}
})
export default class ProfileView extends Vue {}
</script>

<style>
.profile-image img {
  display: block;
}
</style>
