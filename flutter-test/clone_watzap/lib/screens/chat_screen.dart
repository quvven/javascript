import 'dart:ui';

import 'package:clone_watzap/models/chat.dart';
import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => new ChatScreenState();
  
}

class ChatScreenState extends State {
  Chat chat;
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemBuilder: (context, i) => Column(
        children: <Widget>[
          Divider(height: 10.0,),
          ListTile(
            leading: CircleAvatar(backgroundImage: NetworkImage(fakeData[i].avatarUrl),),
            title: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
              Text(fakeData[i].name, style: TextStyle(fontWeight: FontWeight.bold),),
              Text(fakeData[i].time, style: TextStyle(fontSize: 14.0, color: Colors.grey),),
            ],),
            subtitle: Container(
              padding: EdgeInsets.only(top: 5.0),
              child: Text(fakeData[i].message, style: TextStyle(fontSize: 15.0, color: Colors.grey),),
            ),
          ),
        ],
      ),
      itemCount: fakeData.length,);
  }
  
}