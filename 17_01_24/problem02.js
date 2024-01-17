const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = () => new Promise((resolve) => rl.question("", resolve));

// Usage inside aync function do not need closure demo only
(async () => {
  try {
    const a = parseInt(await prompt());
    const b = parseInt(await prompt());

    console.log(`${a} + ${b} = ${a + b}`);
    console.log(`${a} - ${b} = ${a - b}`);
    console.log(`${a} * ${b} = ${a * b}`);
    console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
