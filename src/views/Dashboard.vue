<template>
  <div class="dashboard h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <Sidebar></Sidebar>
        <div class="col-md-10 col-lg-10 col-sm-10 offset-2 h-100" id="main">sdfsd</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  name: "Dashboard",
  components: { Sidebar }
})
export default class Dashboard extends Vue {}
</script>


<style>
.sidebar {
  background: #404040;
}
#main {
}

.company-header-logo {
  background: #f36a5a;
  overflow: hidden;
}

.company-header-logo .sidebar-header-text {
  color: #ffffff;
}
</style>
