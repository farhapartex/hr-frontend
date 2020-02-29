<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-2 pb-1 pr-3">
      <button class="btn btn-sm btn-secondary float-right mt-1">
        <span class="mr-1">
          <i class="far fa-plus-square"></i>
        </span>
        <span>New Group</span>
      </button>
      <h3>Access Group</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  name: "AccessGroup",
  components: {}
})
export default class AccessGroup extends Vue {}
</script>

<style>
.page-header,
.page-content {
  background: #e6e6e6;
}

.data-table {
  background: #ffffff;
}
</style>
