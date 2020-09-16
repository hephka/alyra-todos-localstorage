import React, {useState, useEffect} from "react"
import Todos from "./components/Todos"
import ModeSwitch from "./components/ModeSwitch"

function App() {

  const getLocalStorage = () => localStorage.getItem('mode') || 'light'

  const [ mode, setMode ] = useState(getLocalStorage)

  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])

  const modeClass = mode === "dark" ? "bg-dark text-white" : ""
  console.log(mode)

  return (
    <div className={`${modeClass}`}>
      <div className={`container my-4 ${modeClass}`} >
      <div className="App-title__switch d-flex justify-content-between flex-wrap align-items-center mb-5">
      <h1 className="text-center display-1">ToDos App</h1>
      <ModeSwitch mode={mode} setMode={setMode} />
      </div>
      <Todos />
      <p className="mt-5">
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </p>
    </div>
    </div>
  )
}

export default App
