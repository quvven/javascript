class ValidationMixin {
  String validateFirstName(String value){ if(value.length<2) { return "Minimum 2 karakter olmalı!"; } }
  String validateLastName(String value){ if(value.length<2) { return "Minimum 2 karakter olmalı!"; } }
  String validateEmail(String value){ if(!value.contains("@")) { return "Eposta Geçersiz!"; } }
  String validatePassword(String value){ if(value.length<2) { return "Minimum 2 karakter olmalı!"; } }
}