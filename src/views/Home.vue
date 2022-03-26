<template>
  <div id="home">
    <!-- Page Wrapper -->
    <div id="background-div" class="page-holder bg-cover">

      <div class="container py-5">
        <h1 style="margin-top: 100px;"><span style="color: Blue; font-size: 60px">W</span>elcome!!<br>
        to Siya's Online Book Store</h1>
      </div>
    </div>

    <div id="start-shopping" class="container">
      <!-- <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div> -->
      <!-- <div class="row">
        <div v-for="index in this.category_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <CategoryBox :category="Category[index-1]">
          </CategoryBox>
        </div>
      </div> -->
    </div>

    <hr>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>
       <div class="row">
         <div class="card">
          <div
            class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src="../assets/360_lock.jpg"
              class="w-100"
            />
            <a href="#!">
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
              <h5 class="card-title mb-3">The Alchemist</h5>
            </a>
            <a href="" class="text-reset">
              <p>Fiction</p>
            </a>
            <h6 class="mb-3">R150.99</h6>
          </div>
        </div>
      </div>
         <div class="card">
          <div
            class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://media.takealot.com/covers_tsins/69659/cc266a6c6576a8616bde1aa92973716e-xlpreview.jpg"
              class="w-100"
            />
            <a href="#!">
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
        </div>
        <div v-for="index in this.product_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <ProductBox :product="products[index-1]">
          </ProductBox>
        </div>
      </div> 
    </div>
</template>

<script>
  import ProductBox from "../components/ProductBox";
  // import CategoryBox from "../components/Category/CategoryBox";
  export default {
    name: 'Home',
    components : { ProductBox }, 
    props : ["baseURL", "products"],
    data(){
      return{
        category_size:0,
        product_size:0
      }
    },
    mounted(){
      // this.category_size = this.category.length;
      // this.category_size = Math.min(6, this.category_size);
      // this.product_size = this.products.length;
      // this.product_size = Math.min(8, this.product_size);
    }
  }
</script>

<style>
  .page-holder {
    min-height: 100vh;
  }
  .bg-cover {
    background-size: cover !important;
  }
   #background-div {
    background: url(../assets/istockphoto.jpg)
  } 
  #heading {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    opacity: 0.8;
    font-family: 'Josefin Sans', sans-serif;
  }
  #content {
    opacity: 0.8;
  }
  h2 {
    font-family: 'Josefin Sans', sans-serif;
  }
</style>
