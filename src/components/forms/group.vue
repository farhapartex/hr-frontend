<template>
  <div class="access-group-form pt-3">
    <Error v-if="showErrorPage == true" :error="errorValue" :pathName="'groupList'"></Error>
    <div v-else class="access-group-form pt-3">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Group Name" v-model="group.name" />
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="groupDeleteModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        v-if="showModal"
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

      <div class="permission-table">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Permission</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(permission, index) in permissions" :key="index">
              <td>{{permission.name}}</td>
              <td>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="permission.id"
                    :id="permission.id"
                    v-model="checkedList"
                    @click="storeCheckValue($event)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="form-group">
        <input
          type="submit"
          class="btn btn-sm btn-primary mr-2"
          value="Save"
          v-if="$route.name == 'newGroup'"
          @click="groupAction"
        />
        <input
          type="submit"
          class="btn btn-sm btn-success mr-2"
          value="Update"
          v-if="$route.name == 'editGroup'"
          @click="groupAction"
        />
        <input
          type="submit"
          class="btn btn-sm btn-warning mr-2"
          v-if="$route.name == 'newGroup'"
          value="Reset"
        />
        <input
          type="submit"
          class="btn btn-sm btn-danger mr-2"
          v-if="$route.name == 'editGroup'"
          value="Delete"
          @click="passData"
          data-toggle="modal"
          data-target="#groupDeleteModal"
        />
        <router-link :to="{ name: 'groupList' }" class="btn btn-sm btn-secondary">Cancel</router-link>
      </div>
    </div>
  </div>
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
import Error from "../errors/Error.vue";

@Component({
  name: "GroupForm",
  components: { Error }
})
export default class GroupForm extends Vue {
  @Action(GET_PERMISSION_LIST) getPermissionList: any;
  @Action(CREATE_GROUP) createGroup: any;
  @Action(RETRIEVE_GROUP) retrieveGroup: any;
  @Action(UPDATE_GROUP) updateGroup: any;
  @Action(DELETE_GROUP) deleteGroup: any;

  @Prop() readonly status: any;

  permissions: any = [];
  checkedList: any = [];
  data: any = null;
  showErrorPage: boolean = false;
  showModal: boolean = false;
  errorValue: number = null;

  group: Group = {
    name: "",
    permissions: []
  };

  storeCheckValue(e: any) {
    if (e.target.checked) {
      this.checkedList.push(parseInt(e.target.value));
    }
  }

  groupFormValidation(val: any) {
    if (val.length == 0 || val == null || val == "") {
      return false;
    }

    return true;
  }

  saveGroup(group: Group) {
    this.createGroup(group)
      .then((result: any) => {
        this.$router.push("/access-group");
      })
      .catch((e: any) => {});
  }

  groupAction() {
    let newGroup = JSON.parse(JSON.stringify(this.group));
    delete newGroup.permissions;

    if (this.groupFormValidation(newGroup.name)) {
      this.group.permissions = this.checkedList;
      if (this.$route.name == "newGroup") {
        this.saveGroup(this.group);
      } else if (this.$route.name == "editGroup") {
        console.log(this.group);
        this.updateGroup(this.group)
          .then((result: any) => {
            this.$router.push("/access-group");
          })
          .catch((e: any) => {
            this.$emit("getStatus", "serverError");
          });
      }
    } else {
      this.$emit("getStatus", "validationError");
    }
  }

  fetchPermissionList() {
    this.getPermissionList()
      .then((result: any) => {
        this.permissions = result;
        // this.checkedList = new Array(this.permissions.length);
      })
      .catch((e: any) => {});
  }

  retrieveData() {
    this.retrieveGroup({ id: this.$route.params.id })
      .then((result: any) => {
        this.showModal = true;
        this.group = result;
        this.checkedList = JSON.parse(JSON.stringify(this.group.permissions));
        // this.checkedList = new Array(this.permissions.length);
      })
      .catch((e: any) => {
        if (e.response.status == 404) {
          this.showErrorPage = true;
          this.errorValue = 404;
        }
      });
  }

  passData() {
    this.showModal = true;
  }

  removeData() {
    this.deleteGroup(this.group)
      .then((result: any) => {
        this.data = null;
        this.showModal = false;
        this.$router.push({ name: "accessGroup" });
      })
      .catch((e: any) => {});
  }

  mounted() {
    this.fetchPermissionList();
    if (this.$route.name == "editGroup") {
      this.retrieveData();
    }
  }
}
</script>


<style>
.permission-table table {
  font-size: 14px;
}
</style>
