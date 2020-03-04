<template>
  <div class="accessGroup p-4">
    <div class="page-header w-100 pl-3 pt-3 pb-3 pr-3">
      <h3>Company Profile</h3>
    </div>

    <div class="page-content w-100 mt-5 pl-3 pt-2 pb-1 pr-3">
      <div class="profile-form pt-3">
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
                  Type
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <label>Description</label>

                <textarea class="form-control"></textarea>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <label for="image">
                  Select Logo
                  <span class="text-danger">*</span>
                </label>
                <input type="file" class="form-control-file" id="logo" />
              </div>
            </div>
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "CompanyProfile",
  components: {}
})
export default class CompanyProfile extends Vue {}
</script>

<style>
</style>
