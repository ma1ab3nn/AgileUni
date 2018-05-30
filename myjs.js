function myFunction()
{
  alert('Hello');
}
let item = 0
function addOne() {
  item += 1;
  console.log('Your number is ',item.toString());
}
function subtractOne() {
  item -= 1;
  console.log('Your number is ',item.toString());
}
function currentDate() {
  var date = new Date();
  document.getElementById('date').innerHTML = date.toDateString();

}

let myArray = ["Eggs", "Tea", "Chocolate", "Sweets", "Coffee"];

var myList = document.getElementById("shoppingList");

myArray.forEach(function(element)
{
var listTag = document.createElement("li");
listTag.appendChild(document.createTextNode(element));
myList.appendChild(listTag);
});
$(document).ready(function(){
  $('#contactDetailsForm').submit(function (event){
    event.preventDefault();
    let name = $('#nameField').val();
    let phone = $('#phoneField').val();
    let email = $('#emailField').val();
    console.log(name+' '+phone+' '+email);
  });
});
