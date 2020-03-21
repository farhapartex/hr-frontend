<template>
  <div class="error error-404 pt-3 pb-3">
    <h3 class="text-center pb-2">Error 500</h3>
    <p class="text-center">Server error! Please try again</p>
    <router-link :to="{name: pathName}" class="d-block text-center mt-3">
      <span>
        <i class="fas fa-angle-double-left"></i>
      </span> Click to go back
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "Error500",
  components: {}
})
export default class Error500 extends Vue {
  @Prop() readonly pathName: string;
}
</script>


<style>
</style>
