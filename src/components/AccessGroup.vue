<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-3 pb-3 pr-3">
      <router-link
        :to="{ name: 'newGroup' }"
        class="btn btn-sm btn-secondary float-right mt-1"
        v-if="$route.name != 'newGroup'"
      >
        <span class="mr-1">
          <i class="far fa-plus-square"></i>
        </span>
        <span>New Group</span>
      </router-link>
      <router-link
        :to="{ name: 'groupList' }"
        class="btn btn-sm btn-secondary float-right mt-1"
        v-else
      >
        <span class="mr-1">
          <i class="far fa-list-alt"></i>
        </span>
        <span>Group List</span>
      </router-link>
      <h3>Access Group</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "AccessGroup",
  components: {}
})
export default class AccessGroup extends Vue {}
</script>

<style>
</style>
