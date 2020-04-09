import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return StDialogBoxState();
  }
  
}

class StDialogBoxState extends State<MyHomePage> {
  String name = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Öğrenci : ")
      ),
      body: Column(children: <Widget>[
        TextField(
          onChanged: (String tx){
            setState(() {
              name = tx;
            });
          },
        ),
        Text("Öğrenci: " + name)
      ],),
    );
  }
  
}