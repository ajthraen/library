import './index.css'
import Nav from './components/Nav'
import Landing from "./components/Landing.jsx"
import Highlights from "./components/Highlights.jsx"
import Featured from './components/Featured'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  )
}

export default App;
