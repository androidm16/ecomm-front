<template>
<!-- Where Categories are added -->
<div class="container">
    <div class="row">
       <div class="col-12 text-center">
         <h3 class="pt-3">Add new Category</h3>
       </div>
    </div><br><br>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="categoryName"/>
          </div>
          <div class="form-group">
            <label>Description:</label>
            <textarea type="text" class="form-control" v-model="description"/>
          </div>
           <div class="form-group">
            <label>Image:</label>
            <input type="text" class="form-control" v-model="imageUrl"/>
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
        </form>
        </div>
        <div class="col-3"></div>
    </div>
</div>
</template>
<script>
// I use Axios to perform HTTP requests, that works in both Browser and Node.js platforms.
  const axios = require("axios");
// I am using sweetalert as a replacement for Javascript alert popups.
  const sweetalert = require("sweetalert");
export default {
    data() {
        return {
            categoryName: "",
            descrption: "",
            imageUrl: ""
        };
    },
    methods: {
        addCategory () {
            // console.log(this.categoryName, this.description)
                const newCategory = {
                    categoryName: this.categoryName,
                    descrption: this.description,
                    imageUrl: this.imageUrl,
                };
                const baseURL = "https://my-fullstack-pject1.herokuapp.com/"

                axios({
                  metho: "post",
                  url: `${baseURL}/category/create`,
                  data: JSON.stringify(newCategory),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then(() => {
                  sweetalert({
                    text: "Successfully added a Category!",
                    icon: "success",
                  })
                })
                .catch((err) => {
                  console.log(err);
                });
        },
    },
};
</script>
<style scoped>

</style>