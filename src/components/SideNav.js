import { first151Pokemon, getFullPokedexNumber } from '../utils'

function SideNav (){
  return (
    <nav className='hidden md:block bg-gray-200 dark:bg-neutral-700 fixed top-0 left-0 bottom-0 w-[25%] max-w-[380px] h-screen overflow-y-scroll overflow-x-hidden p-4 scrollbar'>
       <div>
          <h2 className='text-yellow-500 text-3xl lg:text-5xl font-bold mb-4'>Pokédex</h2>
       </div>
       <div>
          <input type='text' placeholder='fav pokédex waiting...' className='rounded-lg py-1.5 px-2 !mx-auto lg:px-4 dark:bg-neutral-900 ' />
       </div>

      {first151Pokemon.map((poke, index)=> {
        return(
          <button key={index} className='flex gap-3 p-2 border-b [&>*]:dark:text-white border-b-white w-full cursor-default hover:bg-gray-300 dark:hover:bg-neutral-600 duration-200 font-semibold [&>*]:cursor-pointer [&>*]:text-center'>
            <span className='!font-normal text-gray-700'>{getFullPokedexNumber(index)}</span>
            <h3 className='text-gray-900'>{poke}</h3>
          </button>
        )
      })}
    </nav>
  )
}

export default SideNav