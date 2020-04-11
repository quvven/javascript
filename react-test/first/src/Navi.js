import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  renderBasket() {
    return (
      <DropdownMenu right>
        {this.props.cart.map((item) => (
          <DropdownItem key={item.product.id}>
            <Badge
              color="danger"
              onClick={() => {
                this.props.removeFromCart(item.product);
              }}
            >
              X
            </Badge>
            &nbsp; {item.product.productName} &nbsp;
            <Badge color="warning">{item.quantity}</Badge>
          </DropdownItem>
        ))}
        <DropdownItem divider />
        <DropdownItem>Sepeti Boşalt</DropdownItem>
      </DropdownMenu>
    );
  }

  renderEmpty() {
    return (
      <DropdownMenu>
        <DropdownItem>Sepet Boş</DropdownItem>
      </DropdownMenu>
    );
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Shop</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/form">Form Demo</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/">Ürünler</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cart">Sepet</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sepet &nbsp;
                <Badge color="info">{this.props.cart.length}</Badge>
              </DropdownToggle>
              {this.props.cart.length > 0
                ? this.renderBasket()
                : this.renderEmpty()}
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
