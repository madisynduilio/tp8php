// Javascript for TP7



function loadFileInto(recipeName, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;

  console.log("From URL: " + fromFile);
	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;

  
  this.displayRecipe = function() {
    
    document.querySelector("#heroBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#heroBanner").style.backgroundImage = "url(" + this.imageURL +")";
   loadFileInto(this.recipe, "ingredients", "#ingredients ul");
    loadFileInto(this.recie, "equipment", "#equipment ul");
    loadFileInto(this.recipe, "directions", "#directions ol");
  }
  
  
}

SweetPotatoMuffins = new Recipe(
  "Sweet Potato Muffins",
  "Madisyn", 
  "https://images.unsplash.com/photo-1615837197154-2e801f4bd294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80", 
  "ingredients.html", 
  "equipment.html", 
  "directions.html"
);

Salmon = new Recipe(
  "Lemon Panko Crusted Salmon",
  "Samuel Zhi Ming Tan", 
  "https://images.unsplash.com/photo-1606858374191-c18040e98ad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80", 
  "salmon-ingredients.html", 
  "salmon-equipment.html", 
  "salmon-directions.html"
);

Toast = new Recipe(
  "Fluffy French Toast",
  "Analysse Palomares", 
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", 
  "toast-ingredients.html", 
  "toast-equipment.html", 
  "toast-directions.html"
);

window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    SweetPotatoMuffins.displayRecipe();
  }

document.querySelector("#secondRecipe").onclick = function() {
    Salmon.displayRecipe();
  }

document.querySelector("#thirdRecipe").onclick = function() {
    Toast.displayRecipe();
  }
  
  

} //end window.onload