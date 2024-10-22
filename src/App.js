import NightAndLight from './components/NightAndLight'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'


import { useState } from "react"

function App() {
  const [state, setState] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  
  
  const toggleDarkMode = ()=>{
    setState(!state);
    const isDarkMode = document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-white", !isDarkMode);
    document.body.classList.toggle("bg-neutral-950", isDarkMode);
  } 
  
  const handleToggleMenu = () => {
    setShowSideMenu(!showSideMenu)
  }

  return (
    <>
      <Header showSideMenu={showSideMenu} handleToggleMenu={handleToggleMenu} />
      <NightAndLight state={state} toggleDarkMode={toggleDarkMode} />
      <SideNav 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon} 
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        handleToggleMenu={handleToggleMenu}  
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
