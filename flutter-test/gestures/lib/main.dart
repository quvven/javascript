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
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  int taps = 0;
  int dtaps = 0;
  int ltaps = 0;

  double xpos = 0.0;
  double ypos = 0.0;

  double boxSize = 0.0;
  double fullBoxSize = 150.0;

  AnimationController animationController;
  Animation<double> animation;

  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
        duration: const Duration(milliseconds: 1000), vsync: this);
    animation =
        CurvedAnimation(parent: animationController, curve: Curves.bounceInOut);
    animation.addListener(() {
      setState(() {
        boxSize = fullBoxSize * animation.value;
      });
      centerBox(context);
    });
    animationController.forward();
  }

  @override
  void dispose() {
    animationController.dispose();
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
    // if(xpos==0.0) {
    //   centerBox(context);
    // }

    return Scaffold(
        appBar: AppBar(title: Text("Gestures demo")),
        body: GestureDetector(
          child: Stack(
            children: <Widget>[
              Positioned(
                top: ypos,
                left: xpos,
                child: Container(
                  width: boxSize,
                  height: boxSize,
                  decoration: BoxDecoration(color: Colors.deepOrangeAccent),
                ),
              )
            ],
          ),
          onTap: () {
            setState(() {
              this.taps++;
            });
          },
          onDoubleTap: () {
            setState(() {
              this.dtaps++;
            });
          },
          onLongPress: () {
            setState(() {
              this.ltaps++;
            });
          },
          onVerticalDragUpdate: (DragUpdateDetails value) {
            setState(() {
              ypos += value.delta.dy;
            });
          },
          onHorizontalDragUpdate: (DragUpdateDetails value) {
            setState(() {
              xpos += value.delta.dx;
            });
          },
        ),
        bottomNavigationBar: Material(
            child: Padding(
          padding: EdgeInsets.all(10),
          child: Text("Tabs: $taps , Double Taps: $dtaps , Long Taps: $ltaps"),
        )));
  }

  void centerBox(BuildContext context) {
    xpos = MediaQuery.of(context).size.width / 2.0 - boxSize / 2.0;
    ypos = MediaQuery.of(context).size.height / 2.0 - boxSize / 2.0 - 50.0;
    setState(() {
      this.xpos = xpos;
      this.ypos = ypos;
    });
  }
}
