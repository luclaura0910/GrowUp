export const teachers = [{ id: 't1', name: 'Cô Lan', class_ids: ['c1'] }];
export const classes = [{ id: 'c1', name: 'Lớp A', students_count: 12 }];
export const students = [
  { id: 's1', name: 'An', status: 'present', class_id: 'c1' },
  { id: 's2', name: 'Bình', status: 'absent', class_id: 'c1' }
];
export const reports = [
  { id: 'r1', teacher_id: 't1', class_id: 'c1', date: Date.now(), content: 'Chúc mừng bé An', photo_url: '' }
];
