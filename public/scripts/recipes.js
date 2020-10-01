const recipes = document.querySelectorAll('.recipe')


for (let i= 0; i < recipes.length; i++) {
    const recipeIndex = i
    
    recipes[i].addEventListener("click", function(){
        window.location.href = `/recipes/${recipeIndex}`
    })
}









