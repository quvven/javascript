<template>
  <div id="app">
    <Products :products="products" @delete:product="deleteProduct" @update:product="updateProduct"/>
    <ProductAdd @add:product="addProduct"/>
  </div>
</template>

<script>
// 
//import HelloWorld from './components/HelloWorld.vue'
import Products from './components/Products.vue'
import ProductAdd from './components/ProductAdd.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Products,
    ProductAdd
  },
  data() {
    return {
      // products: [
      //   {id:1, categoryId:1, productName:'Laptop', quantityPerUnit:'Acer Laptop', unitPrice:5000,unitsInStock:2},
      //   {id:2, categoryId:1, productName:'Laptop', quantityPerUnit:'Lenovo Laptop', unitPrice:4400,unitsInStock:1},
      //   {id:3, categoryId:2, productName:'Mouse', quantityPerUnit:'Logitech Mouse', unitPrice:500,unitsInStock:20},
      //   {id:4, categoryId:3, productName:'Webcam', quantityPerUnit:'A4 Tech Camera', unitPrice:200,unitsInStock:6},
      // ]
      products: []
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const result = await fetch('http://localhost:3000/products')
      const data = await result.json()
      this.products = data
    },
    async deleteProduct(product) {
      const result = await fetch('http://localhost:3000/products/'+product.id, {
        method: 'DELETE'
      })

      console.log(result.status);
      if(result.status===200) {
        this.products = this.products.filter(
          filteredProd=>filteredProd.id!==product.id
        )
      } else {
        alert('Silme işlemi başarısız')
      }
    },
    async updateProduct(product) {
      const result = await fetch('http://localhost:3000/products/'+product.id, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {'Content-Type': 'application/json'}
      })
      
      const updatedProduct = await result.json()

      this.products = this.products.map( product=>product.id===updatedProduct.id?updatedProduct:product )
    },
    async addProduct(product) {
      const result = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {'Content-Type': 'application/json'}
      })
      const newProduct = await result.json()
      this.products = {...this.products,newProduct}

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
