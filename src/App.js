class App {
  async play() {
    const members = ['east', 'west', 'south']
    members.map((member) => member).join(',') // "east,west,south"
  }
}

export default App
