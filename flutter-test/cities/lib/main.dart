import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: CitySelectorW(),
    );
  }
}

class CitySelectorW extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => CitySelectorState();
}

class CitySelectorState extends State<CitySelectorW> {
  var cities = ["Ankara", "İstanbul", "Mardin", "İzmir", "Yozgat"];
  String selectedCity = "Ankara";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Cities"),
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            DropdownButton<String>(
              items: cities.map((String val) {
                return DropdownMenuItem<String>(
                  value: val,
                  child: Text(val),
                );
              }).toList(),
              value: selectedCity,
              onChanged: (String val) {
                setState(() {
                  selectedCity = val;
                });
              },
            ),
            Text("Seçilen şehir: "+ selectedCity)
          ],
        ),
      ),
    );
  }
}
