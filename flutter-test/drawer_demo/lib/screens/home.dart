import 'dart:io';

import 'package:drawer_demo/screens/customer_screens.dart';
import 'package:drawer_demo/screens/product_screens.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => new HomeState();
}

class HomeState extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Drawer Demo")),
      body: Container(
        child: Center(
          child: Text("Anasayfa"),
        ),
      ),
      drawer: buildDrawer(context),
    );
  }

  Drawer menuItems(BuildContext context) {
    createNavigationItem(var icon, String page, String routeName) {
      return ListTile(
        leading: Icon(icon),
        title: Text(page),
        onTap: () {
          setState(() {
            if(routeName == "/exit") {
              exit(0);
            }

            Navigator.of(context).pop();
            Navigator.of(context).pushNamed(routeName);
          });
        },
      );
    }

    var navigationList = [
      createNavigationItem(
          Icons.account_box, "Customers", CustomerScreen.routeName),
      createNavigationItem(Icons.shop, "Products", ProductScreen.routeName),
      createNavigationItem(Icons.home, "Home", "/"),
      createNavigationItem(Icons.close, "Exit", "/exit"),
    ];

    ListView menuItems = new ListView(children: navigationList);

    return Drawer(
      child: menuItems,
    );
  }

  buildDrawer(BuildContext context) {
    return new Drawer(child: menuItems(context));
  }
}
