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
            <a
              href="#"
              class="text-danger"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="passData(group)"
            >
              <span class="mr-1">Delete</span>
              <span>
                <i class="far fa-trash-alt"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title text-danger" id="exampleModalLabel">Warning</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Are you sure, want to delete this group?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-danger" @click="removeData()">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { GROUP_LIST, DELETE_GROUP } from "../../store/actions.names";

@Component({
  name: "GroupTable",
  components: {}
})
export default class GroupTable extends Vue {
  @Action(GROUP_LIST) getGroupList: any;
  @Action(DELETE_GROUP) deleteGroup: any;

  groups: any = [];
  data: any = null;

  passData(payload: any) {
    this.data = payload;
  }

  removeData() {
    this.deleteGroup(this.data)
      .then((result: any) => {
        this.data = null;
        location.reload();
        // this.$router.push("/access-group");
      })
      .catch((e: any) => {});
  }

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
