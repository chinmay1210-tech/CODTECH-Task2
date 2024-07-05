document.addEventListener("DOMContentLoaded", function() {
    const recipeForm = document.getElementById("recipeForm");
    const recipeList = document.getElementById("recipeList");

    recipeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const recipeName = document.getElementById("recipeName").value;
        const recipeIngredients = document.getElementById("recipeIngredients").value;
        const recipeInstructions = document.getElementById("recipeInstructions").value;

        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");

        const recipeTitle = document.createElement("h2");
        recipeTitle.textContent = recipeName;
        recipeTitle.classList.add("recipe-title");

        const recipeDetails = document.createElement("div");
        recipeDetails.classList.add("recipe-details");
        recipeDetails.style.display = "none";

        recipeDetails.innerHTML = `
            <h3>Ingredients:</h3>
            <p>${recipeIngredients}</p>
            <h3>Instructions:</h3>
            <p>${recipeInstructions}</p>
        `;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {
            recipeList.removeChild(recipeItem);
        });

        recipeTitle.addEventListener("click", function() {
            recipeDetails.style.display = recipeDetails.style.display === "none" ? "block" : "none";
        });

        recipeItem.appendChild(recipeTitle);
        recipeItem.appendChild(recipeDetails);
        recipeItem.appendChild(deleteButton);
        recipeList.appendChild(recipeItem);

        recipeForm.reset();
    });
});
