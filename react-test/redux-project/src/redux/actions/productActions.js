import * as actionTypes from "./actionTypes";

export function changeProduct(product) {
  return { type: actionTypes.CHANGE_PRODUCTS, payload: product };
}

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_NEW_PRODUCT, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_NEW_PRODUCT, payload: product };
}

export function saveProductApi(product) {
  let url = "http://localhost:3000/products";
  return fetch(url + (product.id?"/"+product.id:""), {
    method: product.id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function handleResponse(response) {
  if(response.ok) {
    return response.json();
  }
}

export function handleError(error) {
  console.log("Bir hata oluştu!");
  throw error;  
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product).then((savedProduct) => {
      product.id
        ? dispatch(updateProductSuccess(savedProduct))
        : dispatch(createProductSuccess(savedProduct));
    }).catch(error=>{throw error});
  };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getProductsSuccess(response)));
  };
}
