<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-3 pb-3 pr-3">
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
                width="120"
                height="130"
                alt
              />
              <h5 class="text-center mt-3">Md Nazmul Hasan</h5>
              <h6 class="text-center pt-2">Software Engineer</h6>
            </div>
            <div class="w-100 mt-3 pt-3 pb-3">
              <h5 class="text-center">Attendence</h5>
              <div class="w-100 d-flex flex-row justify-content-center mt-3">
                <div class="form-group mr-5">
                  <p class="mb-2">
                    <span class="mr-2">
                      <i class="far fa-clock"></i>
                    </span>
                    <span>In Time</span>
                  </p>
                  <button class="btn btn-sm btn-info">Set In-Time</button>
                  <!-- <p>11:00 am</p> -->
                </div>
                <div class="form-group">
                  <p class="mb-2">
                    <span class="mr-2">
                      <i class="far fa-clock"></i>
                    </span>
                    <span>Out Time</span>
                  </p>
                  <button class="btn btn-sm btn-secondary">Set Out-Time</button>
                  <!-- <p>07:00 pm</p> -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8">
            <div class="w-100 summary-box mt-3 shadow p-3 mb-5 bg-white rounded">
              <div class="box-heading">
                <h6>Leave Status</h6>
              </div>
              <div class="box-content w-100 mt-3">
                <table class="table table-md table-hover">
                  <tbody>
                    <tr>
                      <th scope="row">Casual Leave</th>
                      <td>Allowed: 10</td>
                      <td>Taken: 3</td>
                      <td>Remaining: 6</td>
                      <td>Excess: 0</td>
                    </tr>
                    <tr>
                      <th scope="row">Sick Leave</th>
                      <td>Allowed: 10</td>
                      <td>Taken: 3</td>
                      <td>Remaining: 6</td>
                      <td>Excess: 0</td>
                    </tr>
                    <tr>
                      <th scope="row">Paternity Leave</th>
                      <td>Allowed: 7</td>
                      <td>Taken: 0</td>
                      <td>Remaining: 6</td>
                      <td>Excess: 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="w-100 summary-box mt-3 shadow p-3 mb-5 bg-white rounded">
              <div class="box-heading">
                <h6 class="float-right">March 2020</h6>
                <h6>Monthly Attendence Summary</h6>
              </div>
              <div class="box-content w-100 mt-3">
                <table class="table table-sm text-center table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Sun</th>
                      <th scope="col">Mon</th>
                      <th scope="col">Tue</th>
                      <th scope="col">Wed</th>
                      <th scope="col">Thu</th>
                      <th scope="col">Fri</th>
                      <th scope="col">Sat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(index,i) in weeks" :key="i">
                      <td v-for="(j) in days" :key="j">
                        <span v-if="(j+index)<32">{{j+index}}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
export default class Dashboard extends Vue {
  weeks: any = [1, 8, 15, 22, 29];
  days: any = [0, 1, 2, 3, 4, 5, 6];
}
</script>

<style>
.profile-short-info img {
  display: block;
}

.summary-box {
  background: #ffffff;
}
</style>
