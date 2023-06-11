// test input array:  ['5 5', '1 2 N', 'LMLLM', '2 3 S', 'LLLLMMM', '3 3 W', 'MMMLLLR'];

// output array: ['1 3 N', '5 1 E']

/**
 * Given an intial input array, this function will return positions of all the rovers
 * in a new array;
 */
function calculateRoversPosition(initialInputArray) {
  const finalRoversPositions = [];

  for (let i = 1; i < initialInputArray.length - 1; i += 2) {
    const roverPosition = initialInputArray[i].split(' '); // ['1', '2', 'N'];

    // Convert string to number ('1' --> 1), so that we can increment/decrement.
    let roverX = Number(roverPosition[0]);
    let roverY = Number(roverPosition[1]);
    let roverDir = roverPosition[2];

    const roverCommands = initialInputArray[i + 1];

    // Loop over the command string
    for (let i = 0; i < roverCommands.length; i++) {
      const command = roverCommands[i];

      // TODO: Improve this. DRY
      if (command === 'L') {
        // do something with the direction
        if (roverDir === 'N') {
          roverDir = 'W';
        } else if (roverDir === 'W') {
          roverDir = 'S';
        } else if (roverDir === 'S') {
          roverDir = 'E';
        } else {
          roverDir = 'N';
        }
      } else if (command === 'R') {
        // do something with the direction
        if (roverDir === 'N') {
          roverDir = 'E';
        } else if (roverDir === 'E') {
          roverDir = 'S';
        } else if (roverDir === 'S') {
          roverDir = 'W';
        } else {
          roverDir = 'N';
        }
      } else {
        // move into the existing direction by 1 point
        // do something with the direction
        if (roverDir === 'N') {
          roverY += 1;
        } else if (roverDir === 'W') {
          roverX -= 1;
        } else if (roverDir === 'S') {
          roverY -= 1;
        } else {
          roverX += 1;
        }
      }
    }

    // construct new rover position from individual component;
    const newRoverPosition = `${roverX} ${roverY} ${roverDir}`;

    // push new position of rover into the roversOutput
    finalRoversPositions.push(newRoverPosition);
  }

  return finalRoversPositions;
}

const test = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];

const output = calculateRoversPosition(test);

console.log(output);
