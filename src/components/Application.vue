<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-3 pb-3 pr-3">
      <router-link
        :to="{ name: 'userApplicationCreate' }"
        class="btn btn-sm btn-secondary float-right mt-1"
        v-if="$route.name != 'userApplicationCreate'"
      >
        <span class="mr-1">
          <i class="far fa-plus-square"></i>
        </span>
        <span>New Application</span>
      </router-link>
      <h3>Application</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Application",
  components: {}
})
export default class Application extends Vue {}
</script>

<style>
</style>
