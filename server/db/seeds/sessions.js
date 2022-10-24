/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sessions').del()
  await knex('sessions').insert([
    {
      start: '2022-10-25T04:00:00.000Z',
      end: '2022-10-25T05:00:00.000Z',
      studentNotes:
        'This is the first student notes file in the data base. Mostly just here for reference but hey you might as well get some decently sized notes to display.',
      teacherNotes:
        'This here right here is the first set of teacher notes and should correspond to the above ones if that is what we are looking for here',
      teacher_id: 3,
      student_id: 6,
    },
    {
      start: '2022-10-25T09:00:00.000Z',
      end: '2022-10-25T10:00:00.000Z',
      studentNotes:
        'Scales: A major, two hands. C Melodic minor one hand, G mixolydian both hands two octaves. Thee etude on page 4 of the book we have started. Pay careful attention to the legato phrases.',
      teacherNotes:
        'Sometimes losing focus on the legato sections. Rememeber to go over the last section of the etude and make sure he has been practising it slowly and not rushing through it. Seems a little distracted this week',
      teacher_id: 2,
      student_id: 8,
    },
    {
      start: '2022-10-25T12:00:00.000Z',
      end: '2022-10-25T13:00:00.000Z',
      studentNotes: 'some other student notes',
      teacherNotes: 'some other teacher notes',
      teacher_id: 2,
      student_id: 8,
    },
    {
      start: '2022-10-25T14:00:00.000Z',
      end: '2022-10-25T15:00:00.000Z',
      studentNotes: 'some other student notes',
      teacherNotes: 'some other teacher notes',
      teacher_id: 4,
      student_id: 8,
    },
    {
      start: '2022-10-25T17:00:00.000Z',
      end: '2022-10-25T18:00:00.000Z',
      studentNotes:
        'Two octave scales: A Major, C melodic Minor and F#major. Practise the hannon exercises from last week again. The etudes we have been working on paying careful attention to the fast sections. Remember to practise them slowly!! Start at 40 bpm and work your way up to speed. Begin the Bach piece(no further than bar 20). Hands Separately first! Then once you can play them with no mistakes you can combine them.',
      teacherNotes:
        'Begining to rush a lot, make sure to go through the metronome exercises with them next lessson. The scales are coming together but make sure their thumb tucks under quick enough, particularly on the Melodic minor. The pieces are sounding really great, very musical just needs some more practise time practising slowly to get the notes off by heart so they can concentrate on the phrasing.',
      teacher_id: 1,
      student_id: 3,
    },
  ])
}
