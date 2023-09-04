import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

 const bienvenida = "Bienvenido a TuRemera";
  return (
      <main>
        <Navbar />
        <ItemListContainer greeting={bienvenida} />
      </main>

  )
}

export default App
