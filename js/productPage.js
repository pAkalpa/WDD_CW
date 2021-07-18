var total = 0
// when the add cart button is clicked bellow event listner calls the additems function
var addToCartButtons = document.getElementsByClassName('add-to-cart')
for(var i = 0; i < addToCartButtons.length;i++){
    var button = addToCartButtons[i];
    button.addEventListener('click',additems);
}

//this event listner update the price of the cart every time mouse is clicked
document.addEventListener("click",cartUpdate)
//after the submit button is clicked filed validation is done by below event listner
document.getElementById('submit').addEventListener('click',fieldsValidation)

var itemNames = []
//this function collect the item name and price,and passed to addTocart function
function additems(event){
    var button = event.target
    var product = button.parentElement.parentElement
    var itemName = product.getElementsByClassName('product-title')[0].innerText
    //all the names and inserted into itemnames array to be used after place order button is clicked
    itemNames.push(itemName)
    var price = product.getElementsByClassName('product-price')[0].innerText
    addToCart(itemName,price);
}

//this function insert the price,name,item quantity the cart section
function addToCart(itemName,price){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    //console.log(cartItems)

    var cartRowdetails = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${itemName}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
        </div>`
        cartRow.innerHTML = cartRowdetails
    cartItems.append(cartRow)
}
//this function upadate the cart price by going through every cart row
function cartUpdate(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var itemName = cartRow.getElementsByClassName('cart-item')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    //total is rounded to avoid long decimal point values
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

//this function validate the form fields when the place order button is cliced
function fieldsValidation(){
    var firstName = document.forms["details"]["fname"].value;
    var lastName = document.forms["details"]["lname"].value;
    var address = document.forms["details"]["address"].value;
    var city = document.forms["details"]["city"].value;
    var province = document.forms["details"]["province"].value;
    var country = document.forms["details"]["country"].value;
    //console.log(firstName,lastName,address,city,province,country)
    if (firstName == "") {
        alert("Please fill the First Name");
    }else if(lastName == ""){
        alert("Please fill the Last Name");
    }else if(address == ""){
        alert("Please fill the Address");
    }else if(city == ""){
        alert("Please fill the City");
    }else if(province == ""){
        alert("Please fill the Province");
    }else if(country == ""){
        alert("Please fill the Country");
    }else{
        for(var i =0 ;i < itemNames.length;i++){
            alert("you have borught " + itemNames[i])
        }
        alert("yor total $ " + total )
    }

}
var cartRow = document.createElement('div')
    cartRow.classList.add('Product-header');
    var cartItems = document.getElementsByClassName('car')
