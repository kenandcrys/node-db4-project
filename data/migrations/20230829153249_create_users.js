exports.up = function (knex) {
    return knex.schema
          .createTable('users', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        })
};


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
       
    };