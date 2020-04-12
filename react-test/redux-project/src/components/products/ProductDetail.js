import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectBox from "../toolbox/SelectBox";

const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Ürün Adı"
        placeHolder="Ürün Adı"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <TextInput
        name="quantityPerUnit"
        label="Açıklama"
        placeHolder="Açıklama"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />

      <TextInput
        name="unitPrice"
        label="Fiyat"
        placeHolder="Fiyat"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="unitsInStock"
        label="Stok"
        placeHolder="Stok"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <SelectBox
        name="categoryId"
        label="Kategori"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
