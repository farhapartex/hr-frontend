<template>
  <div class="form">
    <div class="access-group-form pt-3">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Group Name" />
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
            <tr>
              <td>Add Super User</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>Update Super User Details</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>View Super User</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>Delete Super User</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>Add Employee</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>View Employee Details</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>View Employee Details</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>View Employee Details</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>View Employee Details</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
            <tr>
              <td>View Employee Details</td>
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-sm btn-primary mr-2" value="Save" />
        <input type="submit" class="btn btn-sm btn-warning mr-2" value="Reset" />
        <router-link :to="{ name: 'groupList' }" class="btn btn-sm btn-danger">Cancel</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  name: "Form",
  components: {}
})
export default class Form extends Vue {}
</script>


<style>
.permission-table table {
  font-size: 14px;
}
</style>
