const arr = JSON.parse(localStorage.getItem("Products")) || []; // also check if the arr empty in []
if (localStorage.getItem("Products")) {
  let arrData = JSON.parse(localStorage.getItem("Products"));
  fillData(arr);
}

// first Run - in Loading the Page
function firstRun() {
  const nEl = document.getElementById("nameProduct").value;
  const pEl = document.getElementById("priceProduct").value;
  const opEl = document.getElementById("category").value;
  const imageEl = document.getElementById("image").value;

  const obj = {
    product_name: nEl,
    product_price: pEl,
    category_product: opEl,
    images_product: imageEl,
  };

  arr.push(obj);

  if (
    nEl == "" ||
    nEl == null ||
    pEl == "" ||
    pEl == null ||
    opEl == "" ||
    opEl == null ||
    imageEl == "" ||
    imageEl == null
  ) {
    nameProduct.style.borderColor = "red";
    alert("There's Missing Value");
  } else {
    localStorage.setItem("Products", JSON.stringify(arr));
    document.getElementById("tbody").innerHTML = "";
    if (localStorage.getItem("Products")) {
      let arrData = JSON.parse(localStorage.getItem("Products"));
      fillData(arrData);
      nameProduct.value = "";
      priceProduct.value = "";
      category.value = "";
      image.value = "";
    }
  }
}
// fucntion fill Data in table
function fillData(arrData) {
  var tbody = document.getElementById("tbody");
  for (let i = 0; i < arrData.length; i++) {
    dataofProductName = arrData[i].product_name;
    dataofProductPrice = arrData[i].product_price;
    dataofCategory = arrData[i].category_product;
    imagesOfProduct = arrData[i].images_product;

    let elem = [];
    elem[0] = document.createElement("label");
    elem[1] = document.createElement("label");
    elem[2] = document.createElement("label");
    elem[3] = document.createElement("img");

    let td = [];
    td[0] = document.createElement("td");
    td[1] = document.createElement("td");
    td[2] = document.createElement("td");
    td[3] = document.createElement("td");

    let tr = document.createElement("tr");

    elem[0].textContent = dataofProductName;
    elem[1].textContent = dataofProductPrice;
    elem[2].textContent = dataofCategory;
    elem[3].src = imagesOfProduct;

    td[0].appendChild(elem[0]);
    td[1].appendChild(elem[1]);
    td[2].appendChild(elem[2]);
    td[3].appendChild(elem[3]);

    tr.appendChild(td[0]);
    tr.appendChild(td[1]);
    tr.appendChild(td[2]);
    tr.appendChild(td[3]);

    tbody.appendChild(tr);
  }
}
//localStorage.clear();
