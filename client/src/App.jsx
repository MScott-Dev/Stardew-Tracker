import viteLogo from '/vite.svg'
import './App.css'
import ItemBox from './components/itemBox'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
        </a>
      </div>
      <h1>Vite + React</h1>
      <ItemBox />
      
    </>
  )
}

export default App
