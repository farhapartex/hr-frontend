<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-3 pb-3 pr-3">
      <router-link
        :to="{ name: 'branchCreate' }"
        class="btn btn-sm btn-secondary float-right mt-1"
        v-if="$route.name != 'branchCreate'"
      >
        <span class="mr-1">
          <i class="far fa-plus-square"></i>
        </span>
        <span>New Branch</span>
      </router-link>
      <router-link
        :to="{ name: 'branchList' }"
        class="btn btn-sm btn-secondary float-right mt-1"
        v-else
      >
        <span class="mr-1">
          <i class="far fa-list-alt"></i>
        </span>
        <span>Branch List</span>
      </router-link>
      <h3>Company Branch</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Branch",
  components: {}
})
export default class Branch extends Vue {}
</script>

<style>
</style>
