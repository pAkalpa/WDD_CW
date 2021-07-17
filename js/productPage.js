let carts = document.querySelectorAll(".addto-cart");
const storage = [];
const storageNo = [];
const cartItemsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const productValueArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const cartItemsttt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let Total = 0;


var total;
var count;

let products = [{
    name: "Gray Tshirt",
    tag: "smallmaleCloth",
    price: 20,
    inCart: 0,
    no: 1
  },
  {
    name: "Gray Tsdsfsdhirt",
    tag: "smallmaleCloth",
    price: 200,
    inCart: 0,
    no: 2
  },
  {
    name: "Gray Taaaaaaaaashirt",
    tag: "smallmaleCloth",
    price: 20,
    inCart: 0,
    no: 3
  },
  {
    name: "Gray Tsssssshirt",
    tag: "smallmaleCloth",
    price: 278,
    inCart: 0,
    no: 4
  },
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    setItems(products[i], i);
    //cartUpdate(products[i])
  })
}
document.addEventListener("click", cartUpdate)

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
  } else {
    storage.push('cartNumbers');
    storageNo.push(1);

    //make a text content in the html with a div .cart and in a span
    //document.querySelector('.cart span').textContent = 1;
  }
  //console.log(storage);
  //console.log(storageNo);

  //setItems(product);

}

function setItems(product, no) {
  cartItemsArray[no] += 1;
 
  product.inCart = cartItemsArray[no];

  Total += product.price;

  // console.log("addingone"+cartItemsArray);
  // console.log("price"+productValueArray);
  // console.log("Total"+Total);
  // console.log(typeof Total);
  // console.log('sdfdsfsgdfgsjdgfjsdgfhsgdjh',product);


  if (cartItemsArray[no] == 1) {
    var value = cartItemsArray[no] * product.price;
    productValueArray[no] += product.price;
    var cartRow = document.createElement('div')
    cartRow.classList.add('Product-header');
    var cartItems = document.getElementsByClassName('products')[0]

    //console.log(product.tag);

    var cartRowShow =
      `
        <div class="cart-item-image">
          <img src="../img/${product.tag}.png">
        </div>
        <div class="cart-itemS">
            <span class="cart-item-title">${product.name}</span>
        </div class ="cart-price-div">
          <span class="cart-price">${product.price}</span>
        <div class="cart-quantity">
            <input class="quantity-in-down" type="number" value=${cartItemsArray[no]}>
        </div>
        <div class="pricetot">
          <span>$${value}</span>
        </div>
        `
    cartRow.innerHTML += cartRowShow;
    //console.log(cartRow);
    cartItems.append(cartRow);
  } else {
    console.log("sdfdfsd");
    productValueArray[no] += product.price;
    var newVal = productValueArray[no];
    console.log(newVal);
    //var newnewVal = parseFloat(newVal)
    document.getElementsByClassName("cart-total-price").innerHTML="aaaaaaaaaaa";
    
  }
}

function cartUpdate() {
  var inputs = document.getElementsByClassName('quantity-in-down');

  for(var i = 0; i < inputs.length; i++) {
    // //console.log(inputs[i].value);
    // count = inputs[i].value
    // console.log(count);
    // total = parseInt(count);
    // //total = Math.round(total * 100) / 100
  }
  
  // var inputValue = document.getElementsByClassName("quantity-in-down").value;
  // console.log("dsfsdfsdf"+inputValue)
}