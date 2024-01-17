const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = () => new Promise((resolve) => rl.question("", resolve));

(async () => {
  try {
    const a = parseInt(await prompt());

    if (a > 20000) {
      console.log("Gucci Bag\nGucci Belt");
    } else if (a >= 10000) {
      console.log("Gucci Bag");
    } else if (a >= 5000) {
      console.log("Levis Bag");
    } else {
      console.log("Something");
    }
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
