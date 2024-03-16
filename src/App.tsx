import Hangman from "./Hangman"
import Result from "./Result"
import GusingWord from "./GusingWord"
import Keyboard from "./Keyboard"
function App() {
  return (
    <div>
      <Result />
      <Hangman />
      <GusingWord />
      <Keyboard />
    </div>
  )
}

export default App