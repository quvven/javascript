import 'package:flutter/material.dart';
import 'package:forms/mixins/validation.dart';
import 'package:forms/models/customer.dart';

class CustomerAdd extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => CustomerAddState();
}

class CustomerAddState extends State with ValidationMixin {
  final formKey = GlobalKey<FormState>();
  final customer = Customer();

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.all(25),
        child: Form(
            child: Column(
              children: <Widget>[
                firstNameField(),
                lastNameField(),
                emailField(),
                passwordField(),
                submitBtn()
              ],
            ),
          key: formKey,
          )
        );
  }

  Widget firstNameField() => TextFormField(
        decoration:
            InputDecoration(labelText: "Adınız", hintText: "e.g. Guven"),
        keyboardType: TextInputType.text,
        validator: validateFirstName,
        onSaved: (String value) {
          customer.firstName = value;
        },
      );
  Widget lastNameField() => TextFormField(
        decoration:
            InputDecoration(labelText: "Soyadınız", hintText: "e.g. Topal"),
        keyboardType: TextInputType.text,
        validator: validateLastName,
        onSaved: (String value) {
          customer.lastName = value;
        }
      );
  Widget emailField() => TextFormField(
        decoration: InputDecoration(
            labelText: "Eposta Adresiniz", hintText: "e.g. examle@mail.com"),
        keyboardType: TextInputType.emailAddress,
        validator: validateEmail,
        onSaved: (String value) {
          customer.email = value;
        }
      );
  Widget passwordField() => TextFormField(
        decoration: InputDecoration(labelText: "Parolanız", hintText: ""),
        obscureText: true,
        validator: validatePassword,
        onSaved: (String value) {
          customer.password = value;
        }
      );

  Widget submitBtn() => RaisedButton(
        onPressed: () {
          if(formKey.currentState.validate()) {
            formKey.currentState.save();
            saveCustomer(customer);
          }
        },
        child: Text("Kaydet"),
      );

  void saveCustomer(Customer customerSave) {
    print(customerSave.firstName);
    print(customerSave.lastName);
    print(customerSave.email);
    print(customerSave.password);
  }
}
