<template>
  <div class="col-md-2 col-lg-2 col-sm-2 px-0 sidebar position-fixed h-100" id="sticky-sidebar">
    <div class="company-header-logo w-100 pt-2 pb-2">
      <h5 class="text-center sidebar-header-text">FarHaPartex</h5>
    </div>

    <div class="w-100 nav-list">
      <ul class="mt-3">
        <li>
          <a href="#">
            <span class="mr-3">
              <i class="fas fa-tachometer-alt"></i>
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="mr-3">
              <i class="fas fa-users-cog"></i>
            </span>
            <span>User</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="mr-3">
              <i class="fas fa-cog"></i>
            </span>
            <span>Settings</span>
          </a>
        </li>
      </ul>
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

<style>
.sidebar {
  background: #404040;
}

.company-header-logo {
  background: #f36a5a;
  overflow: hidden;
}

.company-header-logo .sidebar-header-text {
  color: #ffffff;
}

.nav-list ul li {
  padding: 15px 15px;
  border-bottom: 0.6px solid #505050;
}

.nav-list ul li:hover,
.nav-list ul li:hover a {
  background: #757373;
  color: #f36a5a;
}

.nav-list ul li a {
  text-decoration: none;
  color: #c2b9b9;
  display: block;
}
</style>