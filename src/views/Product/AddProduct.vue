<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4>Add New Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control" v-model="categoryId" required>
                            <option v-for="category in categories" :key="category.id"
                                    :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="name" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" v-model="description" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Image Url</label>
                        <input type="text"  v-model="imageURL" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" v-model="price" class="form-control" >
                    </div>
                    <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>

<!--        Form-->
    </div>
</template>
<script>
     import axios from 'axios';
     import swal from 'sweetalert';
export default {
  data(){
    return {
      id : "",
      categoryId : "",
      name : "",
      description : "",
      imageURL : "",
      price : ""
    }
  },
  props : ["baseURL", "products", "categories"],
  methods : {
    async addProduct() {
      const newProduct = {
        id : this.id,
        categoryId : this.categoryId,
        name : this.name,
        description : this.description,
        imageURL : this.imageURL,
        price : this.price
      };

      console.log(this.baseURL+"Product/Product/add");
      console.log(newProduct);
      await axios({
        method: 'post',
        url: this.baseURL+"Product/Product/add",
        data : JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        //sending the event to parent to handle
        this.$emit("fetchData");
        this.$router.push({name : 'AdminProduct'});
        swal({
          text: "Product is Added",
          icon: "success",
          closeOnClickOutside: false,
        });
        return res;
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({name : 'Login'});
    }
  }
}
</script>
<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>


















//     import axios from 'axios'
//     import swal from 'sweetalert'
//     export default {
//         props: ["baseURL", "categories"],
//         data() {
//             return {
//                 id: null,
//                 categoryId: null,
//                 name: null,
//                 description: null,
//                 imageURL: null,
//                 price: null
//             }
//         },
//         methods: {
//             addProduct() {
//                 const newProduct = {
//                     categoryId: this.categoryId,
//                     description: this.description,
//                     name: this.name,
//                     imageURL: this.imageURL,
//                     price: this.price
//                 };
//                 axios.post(this.baseURL+"product/add", newProduct)
//                 .then(() => {
//                     this.$router.push({name: 'AdminProduct'});
//                     swal({
//                         text: "Product added",
//                         icon: "success"
//                     })
//                 }).catch((err)=> {
//                     console.log("err", err);
//                 })
//             }
//         }
//     }
