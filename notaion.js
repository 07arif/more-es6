const student = {

    name: 'kolim uddin',
    age: 15,
    class: 'ten',
    marks: {
        math: 78,
        english: 40,
        bangla: 30,
        gk: 56,

    },
}
//1.
const marks = student.marks.math;
// console.log(marks);
//2.
const english = student['marks']['english'];
// console.log(english);
const subject = 'gk';
const subjectMarks = student.marks[subject];
// console.log(subjectMarks);
const marks2 = student.marks[subject];
console.log(marks);

