import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http_rest/apis/api.dart';
import 'package:http_rest/models/todos.dart';

void main() => runApp(TodosApp());

class TodosApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TodosListApp(),
    );
  }
}

class TodosListApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => TodosListAppState();
}

class TodosListAppState extends State {
  List<Todos> list = new List<Todos>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Todo List"),
      ),
      body: ListView.builder(
          itemBuilder: (context, position) {
            return ListTile(title: Text(list[position].title));
          },
          itemCount: list.length),
    );
  }

  getUsers() {
    Api.getTodos().then((response) {
      setState(() {
        Iterable list = json.decode(response.body);
        this.list = list.map((todo) => Todos.fromJson(todo)).toList();
      });
    });
  }

  @override
  void initState() {
    super.initState();
    getUsers();
  }
}
