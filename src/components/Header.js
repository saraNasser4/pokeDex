
import { HiArrowLeft, HiMenu } from "react-icons/hi";

function Header (props){
  

  return (
    <div className="flex gap-3 items-center m-6 md:hidden">
      <button onClick={props.handleToggleMenu} className={`dark:text-white duration-100 hover:text-neutral-500 dark:hover:text-gray-500 ${props.showSideMenu ? 'text-neutral-500 dark:text-gray-500' : ''}`}>
        {props.showSideMenu ? <HiArrowLeft size={30} /> :<HiMenu size={30} />}
      </button>
      <h2 className='text-yellow-500 text-3xl lg:text-5xl font-bold'>Pokédex</h2>      
    </div>
  )
}

export default Header