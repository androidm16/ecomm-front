<template>
    <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
    <img :src="category.imageUrl" 
    class="card-img-top embed-responsive-item" 
    alt="Card image cap" 
    />
    </div>
    <div class="card-body">
       <router-link :to="{ name: 'ListProducts', params: { id: category.id } }"><h5 class="card-title">{{ category.categoryName }}</h5></router-link>
        <p class="card-text">
            {{ category.description.substring(0, 65) }}
        </p>
        <a href="#" class="btn btn-primary">Edit</a>
    </div>
    </div>
</template>
<script>
export default {
    name: "CategoryBox",
    props: ["category"],
    methods: {
            listProducts() {
      this.$router.push({
        name: "ListProducts",
        params: { id: this.category.id },
      });
    },
  },
}
</script>
<style scoped>
.card-img-top {
    object-fit: cover;
}
</style>