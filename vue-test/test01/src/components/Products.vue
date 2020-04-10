<template>
<div>
    <h3>Product List</h3>
    <p v-if="products.length==0"> Ürün Listesi Boş!</p>
    <table v-else class="table table-hover">
        <thead>
            <tr>
                <th>Id</th>
                <th>Ürün Adı</th>
                <th>Kategori</th>
                <th>Açıklama</th>
                <th>Fiyat</th>
                <th>Stok</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td v-if="updateId===product.id">
                    <input v-model="product.id" type="text" class="form-control" id="id" style="max-width:150px; display:initial" />
                </td>
                <td v-else>{{product.id}}</td>
                
                <td v-if="updateId===product.id">
                    <input v-model="product.productName" type="text" class="form-control" id="productName" style="max-width:150px; display:initial" />
                </td>
                <td v-else>{{product.productName}}</td>
                
                <td v-if="updateId===product.id">
                    <input v-model="product.categoryId" type="text" class="form-control" id="categoryId" style="max-width:150px; display:initial" />
                </td>
                <td v-else>{{product.categoryId}}</td>
                
                <td v-if="updateId===product.id">
                    <input v-model="product.quantityPerUnit" type="text" class="form-control" id="quantityPerUnit" style="max-width:150px; display:initial" />
                </td>
                <td v-else>{{product.quantityPerUnit}}</td>
                
                <td v-if="updateId===product.id">
                    <input v-model="product.unitPrice" type="text" class="form-control" id="unitPrice" style="max-width:150px; display:initial" />
                </td>
                <td v-else>{{product.unitPrice}}</td>
                
                
                <td v-if="updateId===product.id">
                    <input v-model="product.unitsInStock" type="text" class="form-control" id="unitsInStock" style="max-width:150px; display:initial" />
                </td>
                <td v-else>{{product.unitsInStock}}</td>
                
                <td v-if="updateId===product.id">
                    <button class="btn btn-sm btn-success mr-2" @click="handleSave(product)">Kaydet</button>
                    <button class="btn btn-sm btn-danger" @click="handleCancel()">İptal</button>
                </td>
                <td v-else>
                    <button class="btn btn-sm btn-warning mr-2" @click="handleUpdate(product)">Güncelle</button>
                    <button class="btn btn-sm btn-danger" @click="handleDelete(product)">Sil</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    
</template>
<script>
export default {
    name:'product-list',
    props: {
        products:Array
    },
    data() {
        return { updateId: null }
    },
    methods:{
        handleDelete(product) {
            this.$emit("delete:product", product)
        },
        handleUpdate(product) {
            this.updateId = product.id
        },
        handleSave(product) {
            this.$emit("update:product", product)
            this.updateId = null
        },
        handleCancel() {
            this.updateId = null
        },
    }
}
</script>
<style scoped>

</style>