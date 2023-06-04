import useIdleDetection from "./../../index"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const isIdle = useIdleDetection(5000) // Idle timeout set to 5000 milliseconds (5 seconds)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {isIdle ? <p>You are currently idle.</p> : <p>You are active!</p>}
      </div>
    </>
  )
}

export default App
