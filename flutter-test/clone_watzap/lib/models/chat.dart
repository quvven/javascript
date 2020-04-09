class Chat {
  String name;
  String message;
  String time;
  String avatarUrl;

  Chat({this.name, this.message, this.time, this.avatarUrl});
}

List<Chat> fakeData = [
  Chat(
      name: "Husman",
      message: "Oradamısın?",
      time: "13:54",
      avatarUrl:
          "https://i.pinimg.com/236x/b0/d1/33/b0d133d63fa0826d24e17757f02880e3.jpg"),
  Chat(
      name: "Kamil",
      message: "Ne yapıyon la?",
      time: "10:04",
      avatarUrl:
          "https://i.pinimg.com/236x/82/6d/17/826d173d2e481e56dceeff0d6e5e242a.jpg"),
  Chat(
      name: "Duman",
      message: ":D",
      time: "22:00",
      avatarUrl:
          "https://i.pinimg.com/236x/22/da/08/22da08b522a0902da5b177d300fd21cb.jpg"),
];
