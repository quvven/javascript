import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addCart(product) {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " sepette");
  }
  render() {
    return (
      <div>
        <h2>Ürünler - {this.props.currentCategory.categoryName}</h2>
        <h5>
          <Link to="/saveproduct">Yeni Ürün</Link>
        </h5>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Kategori</th>
              <th>Açıklama</th>
              <th>Fiyat</th>
              <th>Stok</th>
              <th>/</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <Link to={"/saveproduct/"+product.id}>{product.productName}</Link>
                </td>
                <td>{product.categoryId}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => {
                      this.addCart(product);
                    }}
                    className="btn-sm"
                  >
                    Sepete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h4>{this.props.products.length}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentProduct: state.changeProductReducer,
    products: state.productListReducer,
    currentCategory: state.changeCategoryReducers,
    cart: state.changeCartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      changeProduct: bindActionCreators(productActions.changeProduct, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
