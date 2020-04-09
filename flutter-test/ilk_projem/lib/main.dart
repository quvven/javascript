import 'package:flutter/material.dart';

void main() {
  runApp(Hello());
}

class Hello extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: "İlk Projem",
        home: Scaffold(
          appBar: AppBar(title: Text("init")),
          body: MainPage(),
        ));
  }
}

class MainPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Text(
          selamVer(),
          textDirection: TextDirection.ltr,
          style: TextStyle(fontSize: 40),
        ),
      ),
    );
  }
}


String selamVer() {
  DateTime now = new DateTime.now();
  int hour = now.hour;
  return (hour<12) ? "Günaydın": "İyi Akşamlar";
}