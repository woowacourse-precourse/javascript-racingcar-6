import App from './App.js';

const app = new App();
async function main() {
  try {
    await app.play();
  } catch (error) {
    console.log(`${error.message}`);
  }
}
main();
