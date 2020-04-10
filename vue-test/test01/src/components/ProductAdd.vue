<template>
<div class="container">
    <div class="card">
        <div class="card-header">
            <h3>Ürün Ekle</h3>
        </div>
        <div class="card-body">
        <form @submit.prevent="handleAdd">
            <div class="form-group">
                <label for="id">Id</label>
                <input v-model="product.id" type="text" class="form-control" id="id">
            </div>
            <div class="form-group">
                <label for="categoryId">Kategori</label>
                <input v-model="product.categoryId" type="text" class="form-control" id="categoryId">
            </div>
            <div class="form-group">
                <label for="productName">Ürün Adı</label>
                <input v-model="product.productName" type="text" class="form-control" id="productName">
            </div>
            <div class="form-group">
                <label for="quantityPerUnit">Açıklama</label>
                <input v-model="product.quantityPerUnit" type="text" class="form-control" id="quantityPerUnit">
            </div>
            <div class="form-group">
                <label for="unitPrice">Fiyat</label>
                <input v-model="product.unitPrice" type="text" class="form-control" id="unitPrice">
            </div>
            <div class="form-group">
                <label for="unitsInStock">Stok</label>
                <input v-model="product.unitsInStock" type="text" class="form-control" id="unitsInStock">
            </div>
            <button class="btn btn-success" type="submit">Kaydet</button>
        </form>
    </div>
    </div>
</div>
</template>
<script>
export default {
    name:'product-add', 
    data() {
        return {
            product: {id:'', categoryId:'', productName:'', quantityPerUnit:'', unitPrice:'',unitsInStock:''}
        }
    },
    methods: {
        handleAdd() {
            this.$emit("add:product",this.product)
        }
    }    
}
</script>
<style scoped>

</style>