<template>
  <div class="group-data-table w-100">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Group Name</th>
          <th scope="col">Total Permission</th>
          <th scope="col">Total User</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(group , index) in groups" :key="index">
          <td>{{group.name}}</td>
          <td>{{group.total_permission}}</td>
          <td>{{group.total_user}}</td>
          <td>
            <router-link :to="{ name: 'editGroup', params: {id: group.id} }">
              <span class="mr-1">Edit</span>
              <span>
                <i class="far fa-edit"></i>
              </span>
            </router-link>
            <span class="ml-2 mr-2">|</span>
            <a href="#" class="text-danger">
              <span class="mr-1">Delete</span>
              <span>
                <i class="far fa-trash-alt"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { GROUP_LIST } from "../../store/actions.names";

@Component({
  name: "GroupTable",
  components: {}
})
export default class GroupTable extends Vue {
  @Action(GROUP_LIST) getGroupList: any;

  groups: any = [];

  mounted() {
    this.getGroupList()
      .then((result: any) => {
        this.groups = result;
        // this.checkedList = new Array(this.permissions.length);
      })
      .catch((e: any) => {});
  }
}
</script>
