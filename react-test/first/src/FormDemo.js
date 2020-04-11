import React, { Component } from "react";
import alertifyjs from "alertifyjs";
import { Label, Input, FormGroup, Button } from "reactstrap";

export default class FormDemo extends Component {
  state = { email: "", password: "", description: "", city: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertifyjs.success(this.state.email + " ok");
    alertifyjs.success(this.state.password + " ok");
    alertifyjs.success(this.state.description + " ok");
    alertifyjs.success(this.state.city + " ok");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="">{this.state.email}</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E Posta"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="">{this.state.password}</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Parola"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="">{this.state.description}</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Açıklama"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="">{this.state.city}</Label>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="Şehir"
              onChange={this.handleChange}
            >
              <option></option>
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Ordu</option>
              <option>Hatay</option>
              <option>İstanbul</option>
            </Input>
          </FormGroup>
          <Button type="submit">Kaydet</Button>
        </form>
      </div>
    );
  }
}
