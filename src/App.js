import NightAndLight from './components/NightAndLight'
import Header from './components/Header'
import Modal from './components/Modal'
import PokeCard from './components/PokeCard'
import SideNav from './components/SideNav'
import TypeCard from './components/TypeCard'

import { useState } from "react"

function App() {
  const [state, setState] = useState(false);
  const toggleDarkMode = ()=>{
    setState(!state);
    document.body.classList.toggle("dark");
    if (state) {
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-neutral-950");
    } else {
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-neutral-950");
    }
  
  } 
  console.log(state)

  return (
    <>
      <NightAndLight state={state} toggleDarkMode={toggleDarkMode} />
      <Header />
      <Modal />
      <PokeCard />
      <SideNav />
      <TypeCard />
    </>
  );
}

export default App;
