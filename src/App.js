import NightAndLight from './components/NightAndLight'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'
import Modal from './components/Modal'
import TypeCard from './components/TypeCard'

import { useState } from "react"

function App() {
  const [state, setState] = useState(false);
  const toggleDarkMode = ()=>{
    setState(!state);
    const isDarkMode = document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-white", !isDarkMode);
    document.body.classList.toggle("bg-neutral-950", isDarkMode);
  } 

  const [selectedPokemon, setSelectedPokemon] = useState(0)
  


  return (
    <>
      <NightAndLight state={state} toggleDarkMode={toggleDarkMode} />
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      <PokeCard selectedPokemon={selectedPokemon} />
      <Modal />
      <TypeCard />
    </>
  );
}

export default App;
