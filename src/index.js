import App from './App.js';

const app = new App();
try {
  await app.play();
} catch (error) {
  console.log(`${error.message}`);
}
