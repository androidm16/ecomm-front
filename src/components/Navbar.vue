<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Navbar content -->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
    <li id="title"><a href="#"><strong><span style="color: Blue; font-size: 30px">S</span>iyabonga <span style="color: Blue; font-size: 30px">S</span>tore</strong></a></li>
      <!-- <img id="logo" src="../assets/logo.png" /> -->
    </router-link>
    <!-- My Navbar Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Search Bar (still in progress)-->
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>

            <!--Bootstrap navbar Dropdowns-->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'Home' }"
              >Home</router-link
            >

            <router-link class="dropdown-item" :to="{ name: 'Category' }"
              >Category</router-link
            >

            <router-link class="dropdown-item" :to="{ name: 'Product' }"
              >Product</router-link
            >
          </div>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'login' }"
              >Log In</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'signup' }"
              >Signup</router-link
            >
  
            <a class="dropdown-item" v-if="token" href="#" @click="signout"
              >Sign Out</a
            >
          </div>
        </li>

        <li class="nav-item">

        </li>
        <li class="nav-item">
          <div id="cart">
            <!-- <span id="nav-cart-count">{{ cartCount }}</span> -->

          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
    // props: ["cartCount"],
  data() {
    return {
      token: null,
    };
  },
  methods: {
    signout() {
      localStorage.removeItem("jwt");
      this.token = null;
      // this.$emit("resetCartCount");
      this.$router.push({ name: "Home" });

    },
  },
  mounted() {
    this.token = localStorage.getItem("jwt");
  },
};
</script>
<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}
a {
  color: white;
}
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-link {
  color: rgba(255, 255, 255);
}
#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 15px;
  margin-left: 10px;
}
#cart {
  position: relative;
}
.dropdown-item {
  color: black;
  background: (rgba(18, 102, 241, 0.5));
      box-shadow: 0 0 1px #ccc;
    -webkit-transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    -webkit-transform-origin: 0 0;
    box-shadow:0px 0px 0 100px lightseagreen inset;
}
.dropdown-item:hover{
      -webkit-box-shadow:0px 0px 0 0px lightseagreen inset;
      -webkit-transform: scale(1);
}

.navbar {
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
