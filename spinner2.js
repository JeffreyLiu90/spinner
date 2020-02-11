
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, waitTime);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|     ');
// }, 900);



let spinner = ["|","/","-","\\","|","/","-","\\","|"]
wait = 0
let output = ""
for(let spin of spinner) {
  let output = `\r ${spin}`
  setTimeout(() => {
    process.stdout.write(output);
}, wait);
  wait += 1000

}