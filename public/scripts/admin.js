function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }

  function addPreparation() {
      const preparations = document.querySelector("#preparations");
      const fieldContainer = document.querySelectorAll(".preparation");
    
      // Realiza um clone do último ingrediente adicionado
      const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    
      // Não adiciona um novo input se o último tem um valor vazio
      if (newField.children[0].value == "") return false;
    
      // Deixa o valor do input vazio
      newField.children[0].value = "";
      preparations.appendChild(newField);
    }
    
document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);

document
    .querySelector(".add-preparation")
    .addEventListener("click", addPreparation);
