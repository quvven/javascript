import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Kategori</th>
              <th>Ürün Adı</th>
              <th>Açıklama</th>
              <th>Fiyat</th>
              <th>Stok</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.products.map(product=>(
                    <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.categoryId}</td>
                        <td>{product.productName}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                        <td>
                            <Button color="info" className="btn-sm"
                                onClick={()=>{this.props.addToCart(product)}}
                                >Sepete Ekle</Button>
                        </td>
                    </tr>
                ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
