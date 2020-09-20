function SeatingStudents(arr) {
  
  const numOfSeats = arr.shift();
  const numOfRows = Math.round(numOfSeats/2);

  const seat = [];

  let idx = 0;
  for (row = 0; row < numOfRows; row ++) {
    seat.push([]);
    for (col = 0; col < 2; col ++) {
      const isOccupied = arr.indexOf(idx + 1) > -1 ? true : false;
      seat[row].push(isOccupied);
      idx ++;
    }
    console.log(seat[row].join("-"));
  }
  
  let seating = 0;
  for (let i = 0; i < numOfRows - 1; i ++) {
    if ((seat[i][0] === false) && (seat[i][1] === false)) seating ++;
    if ((seat[i][0] === false) && (seat[i + 1][0] === false)) seating ++;
    if ((seat[i][1] === false) && (seat[i + 1][1] === false)) seating ++;
  }

  if ((seat[numOfRows - 1][0] == false) && (seat[numOfRows - 1][1] == false)) seating ++;
  return seating;
}
