//your JS code here. If required.
function removeColor() {
  var select = document.getElementById("colorSelect");
  var selectedColor = select.options[select.selectedIndex].value;
  
  // remove the selected option from the select element
  select.remove(select.selectedIndex);
  
  console.log("Removed color: " + selectedColor);
}
var button = document.getElementById("Select and Remove");
button.addEventListener("click",removeColor());


