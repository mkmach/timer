const times = process.argv.slice(2); 

const timeToBeep = function(times) {
  for (const time of times) {
    if (time === undefined || time <= 0 || isNaN(time)) {
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * time);
  }
};

timeToBeep(times);

// 1. created a beep function
// 2. we collected all the numbers as strings from the terminal input and put it inside the alarm variable
// 3. looped through those numbers
// 4. for each iteration, we call a function on the number (time to beep)
// 5. in timeToBeep , we convert the number from a string to a number
// 6. then in timeToBeep, we set a timeout with a delay x 1000, b/c settimeout works in milliseconds
// 7. after each settimeout, a delay triggers.

//* settimeouts do not block eachother
