<template>
    <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Our Products</h4>
        <router-link id="add-product" :to="{name : 'AddProduct'}" v-show="$route.name=='AdminProduct'">
          <button class="btn">Add a new Product</button>
        </router-link>
      </div>
    </div>
    <div class="row">
        <div v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <ProductBox :product="product">
          </ProductBox>
        </div>
    </div>
  </div>
</template>
<script>
    import ProductBox from "../../components/ProductBox";
    export default {
    name: 'Product',
    components : {ProductBox},
    props : [ "baseURL" , "products" ],
    data() {
        return {
        }
    },
    // fetching product
   mounted() {
    fetch("https://my-fullstack-pject1.herokuapp.com/products", {
        method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
          this.product = json;
      });
  },
    
    

//     mounted(){
    //     if (this.$route.name=='AdminProduct' && !localStorage.getItem('Access_token')) {
//       this.$router.push({name : 'Login'});
//     }
//   }
}


    // export default {
        //     components: {ProductBox},
    //     props:["products"]
    // }
</script>
        <!-- <div class="card"> -->
                  <!-- <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                     <img
                      src="../assets/360_lock.jpg"
                      class="w-100"
                    /> -->
                    <!-- <a href="#!">
                      <div class="mask">
                        <div class="d-flex justify-content-start align-items-end h-100">
                          <h5><span class="badge bg-primary ms-2">New</span></h5>
                        </div>
                      </div>
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style="background-color: rgba(251, 251, 251, 0.15);"
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div class="card-body">
                    <a href="" class="text-reset">
                      <h5 class="card-title mb-3">Product name</h5>
                    </a>
                    <a href="" class="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 class="mb-3">$61.99</h6>
                  </div>
                </div>  -->
                    <!-- <div v-for="product in Products" :key="product.id">
                    <img :src="product.imgUrl" class="card-img-top" alt="No Image" />
                    <div class="card-body">
                      <h5 class="card-title" v-if="product.user">{{ product.user.username }}</h5>
                      <p class="card-text">{{ product.description }}</p>
                    </div>
                  </div> -->