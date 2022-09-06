/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sessions').del()
  await knex('sessions').insert([
    {
      date: '12 / 12',
      hour: 23.45,
      studentNotes: 'some student notes',
      teacherNotes: 'some teacher notes',
      teacher_id: 4,
      student_id: 6,
    },
    {
      date: '11 / 12',
      hour: 12,
      studentNotes: 'some other student notes',
      teacherNotes: 'some other teacher notes',
      teacher_id: 4,
      student_id: 8,
    },
    {
      date: '12 / 01',
      hour: 2,
      studentNotes: 'some other student notes',
      teacherNotes: 'some other teacher notes',
      teacher_id: 2,
      student_id: 3,
    },
  ])
}
