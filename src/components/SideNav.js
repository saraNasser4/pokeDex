import { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils'


function SideNav (props){
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e)=> setInputValue(e.target.value.toLowerCase())
  
  const filterPokemonNames = (inputValue) => {
    return first151Pokemon
    .map(name => name.toLowerCase())
    .filter(val => val.includes(inputValue))
    .map(name => name[0].toUpperCase() + name.slice(1));
  };
  
  const nameList = filterPokemonNames(inputValue);

  const handleOnClick = (trueIndex) => {
    props.setSelectedPokemon(trueIndex);
    if(window.innerWidth < 768) {
      props.setShowSideMenu(!props.showSideMenu)
    }
  }
  
  return (
    <nav className={`${props.showSideMenu ? 'block min-w-[100%] top-20 t' : 'hidden md:block'} bg-gray-200 dark:bg-neutral-700 fixed top-0 left-0 bottom-0 w-[25%] max-w-[380px] h-screen overflow-y-scroll overflow-x-hidden p-4 scrollbar`}>
       <div className={`${props.showSideMenu ? 'hidden' : ''}`}>
          <h2 className='text-yellow-500 text-3xl lg:text-5xl font-bold mb-4'>Pokédex</h2>
       </div>
       <div>
          <input 
            value={inputValue} 
            onChange={(e)=> handleChange(e)}
            type='text' 
            placeholder='fav pokemon waiting...' 
            className='outline-none rounded-lg py-1.5 px-2 md:-mx-3 lg:mx-2 my-4 lg:px-4 dark:bg-neutral-900 dark:text-white w-[100%] ' />
       </div>

      {nameList.length > 0 ? nameList.map((poke, index)=> {
        const trueIndex = first151Pokemon.indexOf(poke)
        return(
          <button key={index} onClick={()=>handleOnClick(trueIndex)} className={`flex gap-3 p-2 border-b [&>*]:dark:text-white border-b-white w-full cursor-default hover:bg-gray-300 dark:hover:bg-neutral-600 duration-200 font-semibold [&>*]:cursor-pointer [&>*]:text-center ${props.selectedPokemon === index ? ' bg-gray-300 dark:bg-neutral-600 ':' '}`}>
            <span className='!font-normal text-gray-700'>{getFullPokedexNumber(trueIndex)}</span>
            <h3 className='text-gray-900'>{poke}</h3>
          </button>
        )
      }) : 'Not Found'}
    </nav>
  )
}

export default SideNav