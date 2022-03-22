<template>
  <section class="h-100 gradient-form" style="background-color: #eee">
    <div class="container py-5 h-50">
      <!--    Logo Div-->
      <div class="row">
        <div class="col-12 text-center pt-3">
          <router-link :to="{ name: 'Home' }"> </router-link>
        </div>
      </div>

      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <!-- <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style="width: 185px;" alt="logo"> -->
                    <h4 class="mt-1 mb-5 pb-1">Siyabonga's Store</h4>
                  </div>

                  <form @submit.prevent="login">
                    <p>Please login to your account</p>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example11"
                        class="form-control"
                        placeholder="Email address"
                        v-model="email"
                        required
                      />
                      <label class="form-label" for="form2Example11"
                        >Email</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        class="form-control"
                        v-model="password"
                        required
                      />
                      <label class="form-label" for="form2Example22"
                        >Password</label
                      >
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button
                        class="btn btn-secondary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Log in
                      </button>
                      <a class="text-muted" href="#!">Forgot password?</a>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <button type="button" class="btn btn-outline-danger"><a href=""></a>
                        Create new
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">About our store</h4>
                  <p class="small mb-0">
                    The main objective for our store is to get the world
                    reading, we are also inspired by the digital age. You can
                    order tangible and digital books.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  props: ["baseURL"],
  data() {
    return {
      email: "",
      password: "",
      isAdmin: false,
    };
  },
  methods: {
    async login() {
      const user = {
        email: this.email,
        password: this.password,
      };

      await axios
        .patch(`https://my-fullstack-pject1.herokuapp.com/users/login`, user)
        .then((res) => {
          localStorage.setItem("jwt", res.data.jwt);
          axios
            .get(`https://my-fullstack-pject1.herokuapp.com/users/oneuser/`,{
              headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                  },
            })
            .then((res) => {
              if (res.data.isAdmin == true) {
                alert("You are admin");
                this.isAdmin = res.data.isAdmin;
                this.$router.push({ name: "Admin" });
              }
              else{
                this.$router.push({ name: "Home" });
              }

            })
            .catch((err) => {
                // sweetalert({
                //     Text: "unable to log in!",
                //     icon: "error",
                //     closeOnClickOutside: false,
                // });
                console.log(err);
            })
        })
        .catch((err) => {
          // sweetalert({
          //     Text: "unable to log in!",
          //     icon: "error",
          //     closeOnClickOutside: false,
          // });
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>
<style>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    #ee7724,
    #d8363a,
    #dd3675,
    #b44593
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
   .gradient-form {
    background: url(../assets/360_lock.jpg)
  } 
</style>
