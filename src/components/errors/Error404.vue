<template>
  <div class="error error-404 pt-3">Error 404</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import {
  GET_PERMISSION_LIST,
  CREATE_GROUP,
  GROUP_LIST,
  RETRIEVE_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP
} from "../../store/actions.names";
import { Group } from "../../store/store.types";

@Component({
  name: "Error404",
  components: {}
})
export default class Error404 extends Vue {}
</script>


<style>
</style>
