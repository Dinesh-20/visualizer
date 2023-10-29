import Home from "./pages/home"
import Canvas from "./canvas"
import Customizer from "./pages/Customizer"

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Customizer/>
      <Canvas/>
    </main>
  )
}

export default App
