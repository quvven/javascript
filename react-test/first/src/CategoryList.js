import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              onClick={() => {
                this.props.changeCategory(category);
              }}
              key={category.id}
              active={(category.categoryName===this.props.currentCategory)?true:false}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
