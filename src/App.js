import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings= "Bienvenido"/>
      
    </>
  );
}

export default App;
