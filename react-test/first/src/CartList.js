import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderTable() {
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Ürün Fiyatı</th>
            <th>Adet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.productName}</td>
              <td>{item.product.unitPrice}</td>
              <td>{item.quantity}</td>
              <td>
                  <Button
                    color="danger"
                    onClick={()=>{this.props.removeFromCart(item.product)}}
                    >Sepetten Çıkar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
  return <div>{this.renderTable()}</div>;
  }
}
