const recipeData = {
  recipe_id: 1,
  recipe_name: 'Spaghetti Bolognese',
  created_at: new Date(),
  steps: [
    {
      step_id: 11,
      step_number: 1,
      step_instructions: 'Put a large saucepan on a medium heat',
      ingredients: [],
    },
    {
      step_id: 12,
      step_number: 2,
      step_instructions: 'Add 1 tbsp olive oil',
      ingredients: [
        { ingredient_id: 27, ingredient_name: 'olive oil', quantity: 0.014 },
      ],
    },
  ],
};

exports.seed = async function (knex) {
  await knex('recipes').insert({
    recipe_id: recipeData.recipe_id,
    recipe_name: recipeData.recipe_name,
    created_at: recipeData.created_at,
  });

  for (const step of recipeData.steps) {
    await knex('steps').insert({
      step_id: step.step_id,
      recipe_id: recipeData.recipe_id,
      step_number: step.step_number,
      step_instructions: step.step_instructions,
    });

    for (const ingredient of step.ingredients) {
      await knex('step_ingredients').insert({
        step_id: step.step_id,
        ingredient_id: ingredient.ingredient_id,
        quantity: ingredient.quantity,
      });
    }
  }
};