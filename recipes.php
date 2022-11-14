<?

/* Recipe loader for TP9 */

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];


if ($name == "Sweet Potato Muffins") {
  
  if ($list == "ingredients") {
    include "ingredients.html";
    
} elseif ($list == "equipment") {
    include "equipment.html";
    
  } elseif ($list == "directions") {
    include "directions.html"
      
  } else {
    echo "1";
  }


if ($name == "Lemon Panko Crusted Salmon") {
  
  if ($list == "ingredients") {
    include "salmon-ingredients.html";
    
} elseif ($list == "equipment") {
    include "salmon-equipment.html";
    
  } elseif ($list == "directions") {
    include "salmon-directions.html"
      
  } else }
    echo "1";
  }

if ($name == "Fluffy French Toast") {
  
  if ($list == "ingredients") {
    include "toast-ingredients.html";
    
} elseif ($list == "equipment") {
    include "toast-equipment.html";
    
  } elseif ($list == "directions") {
    include "toast-directions.html"
      
  } else }
    echo "1";
  }

  
} else {
  echo "0";
}

