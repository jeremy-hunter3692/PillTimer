const { default: knex } = require('knex')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('sessions', (table) => {
    table.increments('id').primary()
    table.dateTime('date')
    table.string('hour')
    table.text('studentNotes')
    table.text('teacherNotes')
    table.integer('teacher_id')
    table.integer('student_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {}

// exports.up = (knex) => {
//   return knex.schema.createTable('users', (table) => {
//     table.increments('id').primary()
//     table.string('name')
//     table.string('email')
//   })
// }

// exports.down = (knex) => {
//   return knex.schema.dropTable('users')
// }
