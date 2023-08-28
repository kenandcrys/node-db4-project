exports.up = function (knex) {
    return knex.schema
      .createTable('recipes', function (table) {
        table.increments('recipe_id');
        table.string('recipe_name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
      .createTable('steps', function (table) {
        table.increments('step_id');
        table.integer('recipe_id').unsigned().notNullable();
        table.integer('step_number').unsigned().notNullable();
        table.string('step_instructions').notNullable();
        table.foreign('recipe_id').references('recipe_id').inTable('recipes');
      })
      .createTable('ingredients', function (table) {
        table.increments('ingredient_id');
        table.string('ingredient_name').notNullable();
      })
      .createTable('step_ingredients', function (table) {
        table.increments('id').primary();
        table.integer('step_id').unsigned().notNullable();
        table.integer('ingredient_id').unsigned().notNullable();
        table.decimal('quantity');
        table.foreign('step_id').references('step_id').inTable('steps');
        table.foreign('ingredient_id').references('ingredient_id').inTable('ingredients');
      });
  };
  

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
    };