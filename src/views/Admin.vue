<template>
    <router-link :to="{name: 'Category'}" >
        <button class="btn btn-success btn-lg"> Admin Category</button>
    </router-link>
    <br />
    <router-link :to="{name: 'AdminProduct'}" >
        <button class="btn btn-secondary btn-lg"> Admin Product</button>
    </router-link>


</template>
<script>
export default {
}
</script>
<style>
    .btn {
        margin-top: 100px;
        margin-bottom: 20px;
    }
</style>