<template>
  <div class="dataTable">
    <div class="table">
      <div class="page-cnt-head w-100 pt-2 pb-2 overflow-hidden">
        <div class="form-group float-right">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
        <p class="p-2">Data Table</p>
      </div>

      <div class="group-data-table w-100" v-if="$route.name == 'groupList'">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Group Name</th>
              <th scope="col">Permissions</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Super admin</td>
              <td>5</td>
              <td>
                <router-link :to="{ name: 'editGroup' }">
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
            <tr>
              <td>Admin</td>
              <td>10</td>
              <td>
                <a href="#">
                  <span class="mr-1">Edit</span>
                  <span>
                    <i class="far fa-edit"></i>
                  </span>
                </a>
                <span class="ml-2 mr-2">|</span>
                <a href="#" class="text-danger">
                  <span class="mr-1">Delete</span>
                  <span>
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>200</td>
              <td>
                <a href="#">
                  <span class="mr-1">Edit</span>
                  <span>
                    <i class="far fa-edit"></i>
                  </span>
                </a>
                <span class="ml-2 mr-2">|</span>
                <a href="#" class="text-danger">
                  <span class="mr-1">Delete</span>
                  <span>
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Banned</td>
              <td>422</td>
              <td>
                <a href="#">
                  <span class="mr-1">Edit</span>
                  <span>
                    <i class="far fa-edit"></i>
                  </span>
                </a>
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

      <div class="group-data-table w-100" v-else-if="$route.name == 'userList'">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Access Group</th>
              <th scope="col">Last Login</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Md Nazmul Hasan</td>
              <td>hasan08sust@gmail.com</td>
              <td>Super Admin</td>
              <td>03/01/2020 11:00:00 am</td>
              <td>
                <router-link :to="{ name: 'editGroup' }">
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
            <tr>
              <td>Emdadul Huq Minhaj</td>
              <td>e.h.minhaj@gmail.com</td>
              <td>Admin</td>
              <td>03/01/2020 11:00:00 am</td>
              <td>
                <router-link :to="{ name: 'editGroup' }">
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
            <tr>
              <td>Farzana Yesmin</td>
              <td>yesmin.farzana@gmail.com</td>
              <td>Employee</td>
              <td>03/01/2020 11:00:00 am</td>
              <td>
                <router-link :to="{ name: 'editGroup' }">
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

      <div class="employee-data-table w-100" v-else-if="$route.name == 'employeeList'">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Branch</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NH007</td>
              <td>Md Nazmul Hasan</td>
              <td>Software Engineer</td>
              <td>FarHaPartex BD</td>
              <td>
                <router-link :to="{ name: 'editGroup' }">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  name: "DataTable",
  components: {}
})
export default class DataTable extends Vue {}
</script>
