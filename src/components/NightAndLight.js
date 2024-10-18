
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

function NightAndLight (props){

    return(
        <button onClick={props.toggleDarkMode} className="absolute w-10 h-10 right-6 top-6 rounded-full bg-gray-300 text-gray-800 dark:bg-neutral-800 dark:text-white font-bold px-[5px]">
            {props.state ? <MdOutlineDarkMode size={30} /> : <MdLightMode size={30}/>}
        </button>

    )
}

export default NightAndLight