const speedLimit = 70;
const kmPerPoint = 5
const pointsThatSuspends = 12;


console.log(checkSpeed(70));

function checkSpeed(speed) {
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= pointsThatSuspends) return 'Liscense Suspended';
  if (points > 0) return `Points: ${points}`;
  return 'OK';
}