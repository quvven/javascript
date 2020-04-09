import 'package:drawer_demo/screens/customer_screens.dart';
import 'package:drawer_demo/screens/home.dart';
import 'package:drawer_demo/screens/product_screens.dart';
import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Home(),
      routes: <String, WidgetBuilder>{
        CustomerScreen.routeName: (BuildContext context) => new CustomerScreen(),
        ProductScreen.routeName: (BuildContext context) => new ProductScreen(),
      },
    );
  }
}
