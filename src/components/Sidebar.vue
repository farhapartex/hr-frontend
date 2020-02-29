<template>
  <div class="col-md-2 col-lg-2 col-sm-2 px-0 sidebar position-fixed h-100" id="sticky-sidebar">
    <div class="company-header-logo w-100 pt-2 pb-2">
      <h5 class="text-center sidebar-header-text">FarHaPartex</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  name: "Sidebar",
  components: {}
})
export default class Sidebar extends Vue {}
</script>
