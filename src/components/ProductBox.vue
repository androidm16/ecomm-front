<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img
                class="card-img-top embed-responsive-item"
                :src="product.imageURL"
                alt="Card image cap"
            />
        </div>
        <div class="card-body">
            <router-link :to="{ name: 'ShowDetails', params: {id: product.id} }"><h5 class="card-title">{{ product.name }}</h5></router-link>
            <!-- Here I used the superscript element   -->
            <p class="card-text"><sup>R</sup>{{ product.price }}</p>
            <p class="card-text">
                {{ product.description.substring(0, 65) }}...
            </p>
            <router-link :to="{ name: 'AlterProduct', params: {id: product.id} }"
            id="alter-product" v-show="$route.name == 'AdminProduct'">Edit</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ProductBox",
        props: ["product"],
        methods: {
            showDetails(){
                this.$router.push({
                    name: "ShowDetails",
                    params: {id: this.product.id},
                });
            },
        },
    };
</script>
<style scoped>
    .card-img-top .embed-responsive {
        object-fit: cover;
    }
    #alter-product {
  float: right;
}
</style>