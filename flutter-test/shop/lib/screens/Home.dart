import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
          alignment: Alignment.center,
          // margin: EdgeInsets.all(50),
          margin: EdgeInsets.only(top: 22, left: 1),
          color: Colors.red,
          child: Column(
            children: <Widget>[
              Row(
                textDirection: TextDirection.ltr,
                children: <Widget>[
                  Expanded(
                      child: Text(
                    "Asus Laptop",
                    textDirection: TextDirection.ltr,
                    style: TextStyle(fontSize: 30, decoration: TextDecoration.none, color: Colors.white),
                  )),
                  Expanded(
                      child: Text(
                    "16GB Ram 128 SSD 15'inc.",
                    textDirection: TextDirection.ltr,
                    style: TextStyle(fontSize: 20, decoration: TextDecoration.none, color: Colors.white),
                  ))
                ],
              ),
              Row(
                textDirection: TextDirection.ltr,
                children: <Widget>[
                  Expanded(
                      child: Text(
                    "Asus Laptop",
                    textDirection: TextDirection.ltr,
                    style: TextStyle(fontSize: 30, decoration: TextDecoration.none, color: Colors.white),
                  )),
                  Expanded(
                      child: Text(
                    "16GB Ram 128 SSD 15'inc.",
                    textDirection: TextDirection.ltr,
                    style: TextStyle(fontSize: 20, decoration: TextDecoration.none, color: Colors.white),
                  ))
                ],
              ),
              Directionality(
                textDirection: TextDirection.ltr,
                child: OrderButton(),
              )
            ],
          )),
    );
  }
}

class OrderButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(40),
      child: RaisedButton(
        child: Text(
          "Go To Checkout",
          textDirection: TextDirection.ltr,
        ),
        onPressed: () {
          onCheckout(context);
        },
        elevation: 5.0,
      ),
    );
  }

  onCheckout(BuildContext context) {
    var alert = AlertDialog(
      title: Text(
        "Gone",
        textDirection: TextDirection.ltr,
      ),
      content: Text(
        "Gone Checkout!",
        textDirection: TextDirection.ltr,
      ),
    );

    showDialog(context: context, builder: (BuildContext context) => alert);
  }
}
