const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = () => new Promise((resolve) => rl.question("", resolve));

(async () => {
  try {
    const a = parseInt(await prompt());

    if (a > 0) {
      console.log("positive");
    } else if (a < 0) {
      console.log("negative");
    } else {
      console.log("zero");
    }
    
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
