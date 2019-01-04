const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  let avg = 0;

  for (let mark of marks) sum += mark;

  avg = sum / marks.length;

  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  if (avg >= 60) return 'D';
  return 'F';


}