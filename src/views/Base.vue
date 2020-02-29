<template>
  <div class="dashboard h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <Sidebar></Sidebar>
        <div class="col-md-10 col-lg-10 col-sm-10 offset-2 h-100 px-0" id="main">
          <div class="box-header pt-1 pb-1 w-100">
            <ul class="nav justify-content-end mr-3 box-header-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span class="mr-1">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span>(11)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span class="mr-1">
                    <i class="far fa-bell"></i>
                  </span>
                  <span>(6)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span class>
                    <i class="far fa-user"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  name: "Base",
  components: { Sidebar }
})
export default class Base extends Vue {}
</script>


<style>
.box-header {
  background: #cccccc;
}

.box-header-nav li a {
  color: #3a3434;
}
</style>
