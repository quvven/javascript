import 'package:clone_watzap/screens/chat_screen.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => new _HomeState();  
}

class _HomeState extends State with SingleTickerProviderStateMixin {
  TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(
      length: 4,
      initialIndex: 1,
      vsync: this
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Watzapp"),
        bottom: TabBar(
          controller: _tabController,
          indicatorColor: Colors.white,
          tabs: <Widget>[
            Tab(icon: Icon(Icons.camera_alt),),
            Tab(text: "Sohbetler"),
            Tab(text: "Durum"),
            Tab(text: "Aramalar"),

          ],
        ),
        actions: <Widget>[Icon(Icons.search), Icon(Icons.more_vert)],
      ),
      body: TabBarView(
        controller: _tabController,
        children: <Widget>[
          Text("Kamera"),
          ChatScreen(),
          Text("Durum"),
          Text("Arama"),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () { 
          print("Sohbet Ekranı");
        },
        child: Icon(Icons.message, color: Colors.white,),
        backgroundColor: Theme.of(context).accentColor,
      ),
    );
  }
}