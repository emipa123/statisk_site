//https://kea-alt-del.dk/t7/api/products/1163
fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent.Content = product.productdisplayname;
}
