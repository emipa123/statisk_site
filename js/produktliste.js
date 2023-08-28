//https://kea-alt-del.dk/t7/api/products
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    //produktet rabat
    copy.querySelector("p span").classList.add("rabat");
  }

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("p span").textContent = product.price;
  copy.querySelector("p.brandname").textContent = product.brandname;
  document.querySelector("main").appendChild(copy);
}

/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/
