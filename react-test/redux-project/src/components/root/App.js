import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import ProductList from "../products/ProductList";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div>
      <Navi></Navi>
      <Container>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route exact path="/saveproduct" component={AddOrUpdateProduct} />
          <Route exact path="/cart" component={CartDetail} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
