class Recipe{
    constructor(recipeObj){
        this.recipeObj = recipeObj;
        this.id = this.recipeObj.id;
        this.image = this.recipeObj.image;
        this.ingredients = this.recipeObj.ingredients;
        this.instructions = this.recipeObj.instructions;
        this.name = this.recipeObj.name;
        this.tags = this.recipeObj.tags;
    }
    returnIngredients(){

    }
    returnCostEstimation(){

    }
    returnInstructions(){

    }
};

export default Recipe; 
