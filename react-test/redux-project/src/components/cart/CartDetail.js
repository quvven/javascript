import React from "react";
import { Button, Table, Alert } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

const CartSummary = (props) => {
  const removeCart = (cartItem) => {
    props.actions.removeFromCart(cartItem);
  };
  const renderEmpty = () => {
    return <Alert color="warning">Sepetiniz Boş</Alert>;
  };

  const renderCart = () => {
    return (
      <div>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Açıklama</th>
              <th>Fiyat</th>
              <th>Sepet Adedi</th>
              <th>/</th>
            </tr>
          </thead>
          <tbody>
            {props.cart.map((item) => (
              <tr key={item.product.id}>
                <td>{item.product.id}</td>
                <td>{item.product.productName}</td>
                <td>{item.product.quantityPerUnit}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => {
                      removeCart(item);
                    }}
                    className="btn-sm"
                  >
                    Çıkart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };
  return (
    <div>
      <h2>Sepet</h2>
      {props.cart.length > 0 ? renderCart() : renderEmpty()}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.changeCartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
