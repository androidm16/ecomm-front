<template>
    <div class="container" style="margin-top: 100px">
<div class="card bg-light">
<article class="card-body mx-auto" style="max-width: 400px;">
  <h4 class="card-title mt-3 text-center">Create Account</h4>
  <p class="text-center">Get started with your free account</p>
  <form @submit.prevent="signup">
  <div class="form-group input-group">
    <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-user"></i></span>
     </div>
        <input name="" class="form-control" placeholder="Full name" type="text">
    </div>
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-envelope"></i></span>
     </div>
        <input name="" class="form-control" placeholder="Email address" type="email">
    </div> 
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-phone"></i></span>
    </div>
    <select class="custom-select" style="max-width: 120px;">
        <option selected="">+27</option>
    </select>
      <input name="" class="form-control" placeholder="Phone number" type="text">
    </div> 
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-lock"></i></span>
    </div>
        <input class="form-control" placeholder="Create password" type="password">
    </div> 
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-lock"></i></span>
    </div>
        <input class="form-control" placeholder="Repeat password" type="password">
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Create Account </button>
    </div>   
    <p class="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
</form>
</article>
</div>
    </div>
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
        .patch(`https://my-fullstack-pject1.herokuapp.com/users/signup`, user)
        .then((res) => {
          localStorage.setItem("jwt", res.data.jwt);
          axios
            })
            .then((res) => {
              if (res.data.signup == true) {
                alert("Registration successful!");
                this.signup = res.data.signup;
                this.$router.push({ name: "Home" });
              }
              else{
                this.$router.push({ name: "login" });
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
        }
    },
  };
  
</script>
<style>
    .divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;   
    z-index: 2;
}
.divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
}
.bg-light {
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
</style>