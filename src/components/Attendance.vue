<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-2 pb-1 pr-3">
      <h3>Attendance</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <div class="w-100 d-flex flex-row justify-content-center">
        <div class="form-group mr-5">
          <p class="mb-2">
            <span class="mr-2">
              <i class="far fa-calendar-alt"></i>
            </span>
            <span>Date</span>
          </p>
          <p>03/03/2020</p>
        </div>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Attendance",
  components: {}
})
export default class Attendance extends Vue {}
</script>

<style>
</style>
