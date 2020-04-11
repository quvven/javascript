import React, { Component } from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import alertifyjs from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from "./FormDemo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "",
      categories: [],
      products: [],
      cart: [],
      productInfo: { title: "Ürün Listesi" },
      cartInfo: { title: "Sepet" },
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "/?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  setCurrentCategory = (category) => {
    let newProductInfo = { ...this.state.productInfo };
    newProductInfo.title = "Ürünler";
    this.setState({
      currentCategory: category.categoryName,
      productInfo: newProductInfo,
    });
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((i) => i.product.id === product.id);
    if (!addedItem) {
      newCart.push({ product: product, quantity: 1 });
    } else {
      addedItem.quantity++;
    }
    this.setState({ cart: newCart });
    alertifyjs.success(product.productName + " sepette");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((i) => i.product.id !== product.id);
    this.setState({ cart: newCart });
    alertifyjs.error(product.productName + " sepetten çıktı");
  };

  render() {
    let categoryInfo = { title: "Kategori Listesi" };
    return (
      <div className="App">
        <Navi
          removeFromCart={this.removeFromCart}
          cart={this.state.cart}
        ></Navi>
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList
                changeCategory={this.setCurrentCategory}
                currentCategory={this.state.currentCategory}
                categories={this.state.categories}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      info={this.state.productInfo}
                      products={this.state.products}
                      addToCart={this.addToCart}
                    ></ProductList>
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      info={this.state.cartInfo}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    ></CartList>
                  )}
                />
                <Route exact path="/form" component={FormDemo}/>
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
