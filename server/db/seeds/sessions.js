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
      studentNotes: 'This is the first student notes file in the data base. Mostly just here for reference but hey you might as well get some decently sized notes to display.',
      teacherNotes: 'This here right here is the first set of teacher notes and should correspond to the above ones if that is what we are looking for here',
      teacher_id: 3,
      student_id: 6,
    },
    {
      date: '11 / 12',
      hour: 3,
      studentNotes: 'Scales: A major, two hands. C Melodic minor one hand, G mixolydian both hands two octaves. Thee etude on page 4 of the book we have started. Pay careful attention to the legato phrases.',
      teacherNotes: 'Sometimes losing focus on the legato sections. Rememeber to go over the last section of the etude and make sure he has been practising it slowly and not rushing through it. Seems a little distracted this week',
      teacher_id: 4,
      student_id: 8,
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
      studentNotes: 'The very last STUDENT notes in the data base that should at the moment come out every time until you figure out the date time stuff properly.',
      teacherNotes: 'The very last TEACHER notes in the data base that should at the moment come out every time until you figure out the date time stuff properly.',
      teacher_id: 2,
      student_id: 3,
    },
  ])
}


