<template>
  <Error404 v-if="error==404" :pathName="name"></Error404>
  <Error500 v-else-if="error==500" :pathName="name"></Error500>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Error404 from "./Error404.vue";
import Error500 from "./Error500.vue";

@Component({
  name: "Error",
  components: { Error404, Error500 }
})
export default class Error extends Vue {
  @Prop() readonly error!: number;
  @Prop() readonly name!: string;
}
</script>


<style>
</style>
