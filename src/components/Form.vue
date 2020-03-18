<template>
  <div class="form">
    <div
      class="alert alert-danger text-center mt-3"
      role="alert"
      v-if="loginError==true"
    >{{errorMessage}}</div>
    <GroupForm v-if="$route.name == 'editGroup' || $route.name == 'newGroup'"></GroupForm>

    <div class="profile-form pt-3" v-else-if="$route.name == 'profileEdit'">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                First Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Last Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Username
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Email
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Joing Date
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Designation
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Branch
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select Branch</option>
                <option value>FarHaPartex Inc</option>
                <option value>FarHaPartex BD</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label for="image">Select Avatar</label>
              <input type="file" class="form-control-file" id="image" />
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <input type="submit" class="btn btn-sm btn-success mr-2" value="Save" />
              <input type="submit" class="btn btn-sm btn-primary mr-2" value="Update" />
              <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
              <router-link :to="{ name: 'profileView' }" class="btn btn-sm btn-danger">Cancel</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-form pt-3" v-else-if="$route.name == 'userCreate'">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                First Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Last Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Username
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Email
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Access Group
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select group</option>
                <option value>Super Admin</option>
                <option value>Admin</option>
                <option value>Employee</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label for="image">Select Avatar</label>
              <input type="file" class="form-control-file" id="image" />
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <input type="submit" class="btn btn-sm btn-success mr-2" value="Save" />
              <input type="submit" class="btn btn-sm btn-primary mr-2" value="Update" />
              <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
              <router-link :to="{ name: 'userList' }" class="btn btn-sm btn-danger">Cancel</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="profile-form pt-3"
      v-else-if="$route.name == 'employeeCreate' || $route.name == 'employeeDetail'"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                User
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select User</option>
                <option value>Md Nazmul Hasan</option>
                <option value>Farzana Yesmin</option>
                <option value>Employee</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Designation
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select Designation</option>
                <option value>No Probation</option>
                <option value>3 month</option>
                <option value>6 month</option>
                <option value>1 year</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Joining Date
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Branch
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select Branch</option>
                <option value>devadmin</option>
                <option value>fazananiloy</option>
                <option value>Employee</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Salary
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Porbation Time
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select Porbation</option>
                <option value>No Probation</option>
                <option value>3 month</option>
                <option value>6 month</option>
                <option value>1 year</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <input type="submit" class="btn btn-sm btn-success mr-2" value="Save" />
              <input type="submit" class="btn btn-sm btn-primary mr-2" value="Update" />
              <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
              <router-link :to="{ name: 'employeeList' }" class="btn btn-sm btn-danger">Cancel</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="profile-form pt-3"
      v-else-if="$route.name == 'newDesignation' || $route.name == 'editDesignation'"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Experience
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Salary
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6"></div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <input type="submit" class="btn btn-sm btn-success mr-2" value="Save" />
              <input type="submit" class="btn btn-sm btn-primary mr-2" value="Update" />
              <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
              <router-link :to="{ name: 'designationList' }" class="btn btn-sm btn-danger">Cancel</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="profile-form pt-3"
      v-else-if="$route.name == 'branchCreate' || $route.name == 'branchDetail'"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Division
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <input type="submit" class="btn btn-sm btn-success mr-2" value="Save" />
              <input type="submit" class="btn btn-sm btn-primary mr-2" value="Update" />
              <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
              <router-link :to="{ name: 'branchList' }" class="btn btn-sm btn-danger">Cancel</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-form pt-3" v-else-if="$route.name == 'userApplicationCreate'">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-4">
            <div class="form-group">
              <label>
                From Date
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-4">
            <div class="form-group">
              <label>
                To Date
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-4">
            <div class="form-group">
              <label>
                Type
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select Type</option>
                <option value>Casual</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <label>
                Application Purpose
                <span class="text-danger">*</span>
              </label>
              <textarea class="form-control"></textarea>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <input type="submit" class="btn btn-sm btn-success mr-2" value="Save" />
              <input type="submit" class="btn btn-sm btn-primary mr-2" value="Update" />
              <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
              <router-link
                :to="{ name: 'userApplicationList' }"
                class="btn btn-sm btn-danger"
              >Cancel</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-form pt-3" v-else-if="$route.name == 'extraWorkCreate'">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Date
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <label>
                Weekday
                <span class="text-danger">*</span>
              </label>
              <select class="form-control">
                <option value>Select Weekday</option>
                <option value>Casual</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <label>
                Cause
                <span class="text-danger">*</span>
              </label>
              <textarea class="form-control"></textarea>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="form-group">
              <input type="submit" class="btn btn-sm btn-success mr-2" value="Save" />
              <input type="submit" class="btn btn-sm btn-primary mr-2" value="Update" />
              <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
              <router-link :to="{ name: 'extraWorkList' }" class="btn btn-sm btn-danger">Cancel</router-link>
            </div>
          </div>
        </div>
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
  GROUP_LIST
} from "../store/actions.names";
import { Group } from "../store/store.types";
import GroupForm from "../components/forms/group.vue";

@Component({
  name: "Form",
  components: { GroupForm }
})
export default class Form extends Vue {
  @Action(CREATE_GROUP) createGroup: any;

  errorMessage: string = "";
  loginError: boolean = false;

  setErrorMessege(message: string) {
    this.loginError = true;
    this.errorMessage = message;
  }

  removeErrorMessege() {
    this.loginError = false;
    this.errorMessage = "";
  }

  mounted() {}
}
</script>


<style>
.permission-table table {
  font-size: 14px;
}
</style>
