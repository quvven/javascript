import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions"
import { Link } from "react-router-dom";

const CartSummary = (props) => {
  const removeCart = (cartItem) => {
    props.actions.removeFromCart(cartItem);
  }
  const renderEmpty = () => {
    return <DropdownToggle nav>Sepetiniz Boş</DropdownToggle>;
  };

  const renderCart = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet
        </DropdownToggle>

        <DropdownMenu right>
          {props.cart.map((item) => (
            <DropdownItem keu={item.product.id}>
              <Badge color="danger" onClick={() => {removeCart(item)}}>
                X
              </Badge>
              &nbsp; {item.product.productName} &nbsp;
              <Badge color="warning">{item.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart" className="nav-link">Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  return <div>{props.cart.length > 0 ? renderCart() : renderEmpty()}</div>;
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
  return {
    cart: state.changeCartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
