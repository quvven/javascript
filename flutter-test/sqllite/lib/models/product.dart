class Product {
  int _id;
  String _name;
  String _description;
  double _price;

  Product(this._name, this._description, this._price);
  Product.withId(this._id, this._name, this._description, this._price);

  int get id => _id;
  String get name => _name;
  String get description => _description;
  double get price => _price;

  set name(String value) {
    this._name = value;
  }

  set description(String value) {
    this._description = value;
  }

  set price(double value) {
    this._price = value;
  }

  Map<String, dynamic> toMap() {
    var map = Map<String, dynamic>();
    map["name"] = _name;
    map["description"] = _description;
    map["price"] = _price;
    if (_id != null) {
      map["id"] = _id;
    }
    return map;
  }

  Product.fromObject(dynamic obj) {
    this._id = obj["id"];
    this._name = obj["name"];
    this._description = obj["description"];
    this._price = obj["price"];
  }
}
