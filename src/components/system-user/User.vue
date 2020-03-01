<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-2 pb-1 pr-3">
      <router-link
        :to="{ name: 'userCreate' }"
        class="btn btn-sm btn-secondary float-right mt-1"
        v-if="$route.name != 'userCreate'"
      >
        <span class="mr-1">
          <i class="far fa-plus-square"></i>
        </span>
        <span>New User</span>
      </router-link>
      <router-link
        :to="{ name: 'userList' }"
        class="btn btn-sm btn-secondary float-right mt-1"
        v-else
      >
        <span class="mr-1">
          <i class="far fa-list-alt"></i>
        </span>
        <span>User List</span>
      </router-link>
      <h3>System User</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "User",
  components: {}
})
export default class User extends Vue {}
</script>

<style>
</style>
