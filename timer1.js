const myArgs = process.argv.slice(2);


for(let arg of myArgs) {
  if (arg > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (arg * 1000));
  }
}