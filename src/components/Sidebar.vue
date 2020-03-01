<template>
  <div class="col-md-2 col-lg-2 col-sm-2 px-0 sidebar position-fixed h-100" id="sticky-sidebar">
    <div class="company-header-logo w-100 pt-2 pb-2">
      <h5 class="text-center sidebar-header-text">FarHaPartex</h5>
    </div>

    <div class="w-100 nav-list">
      <ul class="mt-3 navs">
        <li>
          <a href="#">
            <span class="mr-3">
              <i class="fas fa-tachometer-alt"></i>
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" @click="verticalNavToggle(0)">
            <span class="mr-3">
              <i class="far fa-snowflake"></i>
            </span>
            <span>Service</span>
            <span class="float-right" v-if="subMenuList[0]==false">
              <i class="fas fa-angle-right"></i>
            </span>
            <span class="float-right" v-else>
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <transition name="fade">
            <ul class="sub-navlist" v-if="subMenuList[0]==true" transition="v-fade">
              <li>
                <a href="#">Daily Attendence</a>
              </li>
              <li>
                <a href="#">Visit Application</a>
              </li>
              <li>
                <a href="#">Extra Work</a>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <a href="#" @click="verticalNavToggle(1)">
            <span class="mr-3">
              <i class="fas fa-funnel-dollar"></i>
            </span>
            <span>Salary</span>
            <span class="float-right" v-if="subMenuList[1]==false">
              <i class="fas fa-angle-right"></i>
            </span>
            <span class="float-right" v-else>
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <transition name="fade">
            <ul class="sub-navlist" v-if="subMenuList[1]==true" transition="v-fade">
              <li>
                <a href="#">Daily Attendence</a>
              </li>
              <li>
                <a href="#">Visit Application</a>
              </li>
              <li>
                <a href="#">Extra Work</a>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <a href="#" @click="verticalNavToggle(2)">
            <span class="mr-3">
              <i class="fas fa-users-cog"></i>
            </span>
            <span>Employee</span>
            <span class="float-right" v-if="subMenuList[2]==false">
              <i class="fas fa-angle-right"></i>
            </span>
            <span class="float-right" v-else>
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <transition name="fade">
            <ul class="sub-navlist" v-if="subMenuList[2]==true" transition="v-fade">
              <li>
                <a href="#">Employee List</a>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <a href="#" @click="verticalNavToggle(3)">
            <span class="mr-3">
              <i class="fas fa-user-friends"></i>
            </span>
            <span>System User</span>
            <span class="float-right" v-if="subMenuList[3]==false">
              <i class="fas fa-angle-right"></i>
            </span>
            <span class="float-right" v-else>
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <transition name="fade">
            <ul class="sub-navlist" v-if="subMenuList[3]==true" transition="v-fade">
              <li>
                <a href="#">User List</a>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <a href="#" @click="verticalNavToggle(4)">
            <span class="mr-3">
              <i class="fas fa-warehouse"></i>
            </span>
            <span>Management</span>
            <span class="float-right" v-if="subMenuList[4]==false">
              <i class="fas fa-angle-right"></i>
            </span>
            <span class="float-right" v-else>
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <transition name="fade">
            <ul class="sub-navlist" v-if="subMenuList[4]==true">
              <li>
                <a href="#">Leave System</a>
              </li>
              <li>
                <a href="#">Applications</a>
              </li>
              <li>
                <a href="#">Probation System</a>
              </li>
              <li>
                <a href="#">Holyday List</a>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <a href="#" @click="verticalNavToggle(5)">
            <span class="mr-3">
              <i class="fas fa-cog"></i>
            </span>
            <span>Settings</span>
            <span class="float-right" v-if="subMenuList[5]==false">
              <i class="fas fa-angle-right"></i>
            </span>
            <span class="float-right" v-else>
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <transition name="fade">
            <ul class="sub-navlist" v-if="subMenuList[5]==true">
              <li>
                <router-link :to="{ name: 'accessGroup' }">Access Group</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'profile' }">Profile Settings</router-link>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <a href="#">
            <span class="mr-3">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span>Logout</span>
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
export default class Sidebar extends Vue {
  subMenuList: any = [false, false, false, false, false, false, false, false];

  verticalNavToggle(index: number) {
    let listValue = this.subMenuList[index];
    this.subMenuList = JSON.parse(
      JSON.stringify([false, false, false, false, false, false, false, false])
    );
    Vue.set(this.subMenuList, index, !listValue);
  }
}
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

.nav-list > ul > li {
  padding: 15px 15px;
  border-bottom: 0.6px solid #505050;
}

.nav-list > ul > li:hover,
.nav-list > ul > li:hover > a {
  background: #757373;
  color: #f36a5a;
}

.nav-list > ul > li > a {
  text-decoration: none;
  color: #c2b9b9;
  display: block;
}

.sub-navlist {
  list-style: none;
  background: #252424;
  padding: 8px 10px !important;
  margin-top: 12px !important;
}

.sub-navlist li {
  padding-bottom: 5px;
}

.sub-navlist li a {
  text-decoration: none;
  color: #cccccc;
  font-size: 14px;
}

.sub-navlist > li:hover > a {
  color: #f36a5a;
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>