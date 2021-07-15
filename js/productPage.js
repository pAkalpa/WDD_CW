let carts = document.querySelectorAll(".addto-cart");
const storage = [];
const storageNo = [];
const cartItemsArray = [0,0,0,0,0,0,0,0,0,0,0];
const productValueArray = [0,0,0,0,0,0,0,0,0,0,0];
let Total = 0;

let products = [{
    name: "Gray Tshirt",
    tag: "graytshirt",
    price: 20,
    inCart: 0,
    no: 1
  },
  {
    name: "Gray Tsdsfsdhirt",
    tag: "graytshirt",
    price: 200,
    inCart: 0,
    no:2
  },
  {
    name: "Gray Taaaaaaaaashirt",
    tag: "graytshirt",
    price: 20,
    inCart: 0,
    no:3
  },
  {
    name: "Gray Tsssssshirt",
    tag: "graytshirt",
    price: 20,
    inCart: 0,
    no:4
  },
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    setItems(products[i],i);
  })
}

function cartNumbers(product) {
  
  let productNumbers;
  for (let i = 0; i < storage.length; i++) {
    productNumbers = storage.values
  }
  
  // let productNumbers = storage.values();
  if (productNumbers) {
    storage.push('cartNumbers');
    storageNo.push(1);
    //document.querySelector('.cart span').textContent = storageNo.length;
  }
  else{
    storage.push('cartNumbers');
    storageNo.push(1);
    
    //make a text content in the html with a div .cart and in a span
    //document.querySelector('.cart span').textContent = 1;
  }
  //console.log(storage);
  //console.log(storageNo);

  //setItems(product);
  
}
function setItems(product,no)
{
  cartItemsArray[no] += 1;
  productValueArray[no] += product.price;
  product.inCart = cartItemsArray[no];

  Total += product.price;

  console.log("addingone"+cartItemsArray);
  console.log("price"+productValueArray);
  console.log("Total"+Total);
  console.log(typeof Total);
  console.log('sdfdsfsgdfgsjdgfjsdgfhsgdjh',product);
}
function displayCart()
{
  
}