import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  beforeEach(() => {
    const recipe1 = new Recipe({
      id: 595736,
      image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
      ingredients: [
        {
          id: 20081,
          quantity: {
            amount: 1.5,
            unit: 'c'
          }
        },
        {
          id: 18372,
          quantity: {
            amount: 0.5,
            unit: 'tsp'
          }
        },
      ],
      instructions: [
        {
          instruction: 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
          number: 1
        },
        {
          instruction: 'Add egg and vanilla and mix until combined.',
          number: 2
        },
      ],
      name: 'Loaded Chocolate Chip Pudding Cookie Cups',
      tags:[
        'antipasti',
        'starter',
        'snack',
        'appetizer',
      ]
    }));
    const recipe2 = new Recipe({
      id: 412309,
      image: 'https://spoonacular.com/recipeImages/412309-556x370.jpeg',
      ingredients: [
        {
          id: 1002030,
          quantity: {
            amount: 4,
            unit: 'teaspoons'
          }
        },
        {
          id: 19334,
          quantity: {
            amount: 8,
            unit: 'tablespoons'
          }
        },
      ],
      instructions: [
        {
          instruction: 'Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.',
          number: 1
        },
      ],
      name: 'Dirty Steve\s Original Wing Sauce',
      tags:[
        'sauce',
      ]
    });
    const recipe3 = new Recipe({
      id: 741603,
      image: 'https://spoonacular.com/recipeImages/741603-556x370.jpeg',
      ingredients: [
        {
          id: 20081,
          quantity: {
            amount: 1,
            unit: 'cup'
          }
        },
        {
          id: 18371,
          quantity: {
            amount: 2,
            unit: 'teaspoons'
          }
        },
      ],
      instructions: [
        {
          instruction: 'Watch how to make this recipe.',
          number: 1
        },
        {instructions: 'In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.',
        number: 2
        }
      ],
      name: 'Elvis Pancakes',
      tags:[
        'side dish',
      ]
    });
  });

  it('Should be a function', () => {
    const recipeRepo1 = new RecipeRepository([recipe1, recipe2, recipe3]);
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should take in an array of recipes', () => {
    const recipeRepo1 = new RecipeRepository([recipe1, recipe2, recipe3]);
    expect(recipeRepo1).to.deep.equal([recipe1, recipe2, recipe3]);
  });

  it.skip('Should filter recipes by various tags', () => {
    const recipe1 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe2 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe3 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipeRepo = new RecipeRepository([recipe1, recipe2, recipe3]);
    recipeRepo.filterByTag('lunch');
    recipeRepo.filterByTag('snack');

    expect(recipeRepo.filterByTag('lunch')).to.equal(/*an array of recipe(s) that include 'lunch' in the tags property*/);
    expect(recipeRepo.filterByTag('snack')).to.equal(/*an array of recipe(s) that include 'snack' in the tags property*/);
  });

  it.skip('Should give feedback to the user if a tag cannot be found', () => {
    const recipe1 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe2 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe3 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipeRepo = new RecipeRepository([recipe1, recipe2, recipe3]);
    recipeRepo.filterByTag('antipasto');

    expect(recipeRepo.filterByTag('antipasto')).to.equal('Sorry. This tag cannot be found');
  });

  it.skip('Should filter recipes by name', () => {
    const recipe1 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe2 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe3 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipeRepo = new RecipeRepository([recipe1, recipe2, recipe3]);
    recipeRepo.filterByName('Loaded Chocolate Chip Pudding Cookie Cups');
    recipeRepo.filterByName('Maple Dijon Apple Cider Grilled Pork Chops');

    expect(recipeRepo.filterByName('Loaded Chocolate Chip Pudding Cookie Cups')).to.equal(/*The entire recipe instance that deeply equals that 'name' property value*/);
    expect(recipeRepo.filterByName('Maple Dijon Apple Cider Grilled Pork Chops')).to.equal(/*The entire recipe instance that deeply equals that 'name' property value*/);
  });

  it.skip('Should give feedback to the user if a name cannot be found', () => {
    const recipe1 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe2 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipe3 = new Recipe(/* INSERT RECIPE PARAMETERS HERE */);
    const recipeRepo = new RecipeRepository([recipe1, recipe2, recipe3]);
    recipeRepo.filterByName('Grandma Ruth\s Chocolate Chip Cookies');

    expect(recipeRepo.filterByName('Grandma Ruth\s Chocolate Chip Cookies')).to.equal('Sorry. This name cannot be found');
  });
})
