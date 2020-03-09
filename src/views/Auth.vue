<template>
  <div class="auth">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-lg-5 col-xl-5">
          <div class="w-100 mt-7">
            <h4 class="text-center">FarHaPartex It Tech</h4>
          </div>
          <div class="company-logo mx-auto">
            <img src="../assets/company-logo.png" alt />
          </div>
          <div class="w-100 mt-5 copyright-text">
            <p class="text-center">2020 All right reserve by FarHaPartex IT Inc.</p>
          </div>
        </div>
        <div class="col-md-7 col-lg-7 col-sm-7">
          <div class="w-100 mt-7">
            <h4 class="text-center">Login</h4>
          </div>
          <div class="auth-box mx-auto mt-3 mb-7">
            <div
              class="alert alert-danger text-center"
              role="alert"
              v-if="loginError==true"
            >{{errorMessage}}</div>
            <div class="w-100">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  v-model="user.username"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="user.password"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  class="btn btn-sm btn-primary w-100"
                  value="Login"
                  @click="userLogin"
                />
              </div>
            </div>

            <div class="w-100 text-center mt-5 forgotpass-text">
              <p
                class="text-center"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >Forgot passowrd?</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body pt-3 pb-3">Please contact with your HR to reset your password.</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 login-footer pt-2 pb-2">
      <p class="text-center">A product of FarHaPartex It Inc.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import HelloWorld from "@/components/HelloWorld.vue";
import { AuthCredential } from "../store/store.types";
import { LOGIN } from "../store/actions.names";

@Component({
  name: "Auth",
  components: {}
})
export default class Auth extends Vue {
  @Action(LOGIN) login: any;

  user: AuthCredential = {
    username: "",
    password: ""
  };
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

  loginValidation() {
    if (this.user == null) {
      this.setErrorMessege("User credential can't be empty");
      return false;
    } else if (this.user.username == "" || this.user.password == "") {
      this.setErrorMessege("User credential can't be empty");
      return false;
    } else {
      return true;
    }
  }

  userLogin() {
    if (this.loginValidation()) {
      this.login(this.user)
        .then((result: any) => {
          this.removeErrorMessege();
          this.$router.push("/");
        })
        .catch((e: any) => {
          this.setErrorMessege("Login Failed! Username/Password is wrong");
        });
    }
  }
}
</script>

<style>
.auth {
  height: 100%;
}
.auth-box {
  max-width: 300px;
}

.company-logo {
  max-width: 200px;
}

.company-logo img {
  display: block;
  width: 100%;
}

.mt-7 {
  margin-top: 7rem !important;
}
.mb-7 {
  margin-bottom: 7rem !important;
}

.login-footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: rgb(182, 181, 181);
}

.copyright-text p {
  font-size: 12px;
}

.forgotpass-text p {
  font-size: 14px;
  cursor: pointer;
}
</style>
