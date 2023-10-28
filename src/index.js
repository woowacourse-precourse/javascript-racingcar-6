import App from "./App.js";

const app = new App();
await app.setName();
await app.setNumber();
app.play();
