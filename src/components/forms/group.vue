<template>
  <div class="access-group-form pt-3">
    <div
      class="access-group-form pt-3"
      v-if="$route.name == 'editGroup' || $route.name == 'newGroup'"
    >
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Group Name" v-model="group.name" />
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
  UPDATE_GROUP
} from "../../store/actions.names";
import { Group } from "../../store/store.types";

@Component({
  name: "GroupForm",
  components: {}
})
export default class GroupForm extends Vue {
  @Action(GET_PERMISSION_LIST) getPermissionList: any;
  @Action(CREATE_GROUP) createGroup: any;
  @Action(RETRIEVE_GROUP) retrieveGroup: any;
  @Action(UPDATE_GROUP) updateGroup: any;

  @Prop() readonly status: any;

  permissions: any = [];
  checkedList: any = [];
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
        this.group = result;
        this.checkedList = JSON.parse(JSON.stringify(this.group.permissions));
        // this.checkedList = new Array(this.permissions.length);
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
