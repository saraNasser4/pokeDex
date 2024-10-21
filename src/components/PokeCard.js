import { useState, useEffect } from 'react';
import { getPokedexNumber, getFullPokedexNumber } from '../utils'
import TypeCard from './TypeCard'

function PokeCard({selectedPokemon}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { name, height, abilities, stats, types, moves, sprites } = data || {}
    const imgList = Object.keys(sprites || {}).filter(val => !sprites[val] || ['versions', 'other'].includes(val) ? false : true)


    useEffect(()=>{
        if(loading || !localStorage || data) return;

        let cache = {}
        if(localStorage.getItem("pokedex")) {
            cache = JSON.parse(localStorage.getItem("pokedex"));
        }

        if(selectedPokemon in cache){
            setData(cache[selectedPokemon]);
            return;
        }

        async function fetchPokemonData (){
            setLoading(true);
            try {
                const dataUrl = `https://pokeapi.co/api/v2/pokemon/${getPokedexNumber(selectedPokemon)}`;
                const res = await fetch(dataUrl);
                if (!res.ok) throw new Error('Failed to fetch data')
                const pokemonData = await res.json();
                setData(pokemonData);
                

                cache[selectedPokemon] = pokemonData;
                localStorage.setItem('pokedex', JSON.stringify(cache))
            }catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        
        fetchPokemonData()
    }, [selectedPokemon])
    
    if(loading || !data) {
        return(
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }


    return(
        <div className='m-4 p-4 md:ml-[25%] lg:ml-[300px] xl:ml-[350px] 2xl:ml-[380px]'>
            <div className='flex flex-col dark:text-white'>
                <span className='font-semibold text-2xl lg:text-3xl'>#{getFullPokedexNumber(selectedPokemon)}</span>
                <span className='font-bold text-3xl lg:text-4xl mb-5'>{name}</span>
            </div>
            <>
                {types.map((typeObj, index)=> {
                    return(
                        <TypeCard key={index} type={typeObj?.type?.name} />
                    )
                })}
            </>
            <img src={`/pokemon/${getFullPokedexNumber(selectedPokemon)}.png`} alt={`Big img of ${name}`}/>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] [&>*]:w-[130px]'>
                {imgList.map((url, index)=> {
                    return(
                        <img key={index} src={sprites[url]} alt={`${name}-img-${url}`} />
                    )
                })}
            </div>
            <h3 className='text-xl lg:text-2xl font-bold my-4 dark:text-white'>Stats</h3>
            <>
                {stats.map((statObj, index)=> {
                    const {base_stat, stat} =statObj
                    return(
                        <div className='flex items-center gap-3 lg:text-xl' key={index}>
                            <h4 className='font-semibold'>{stat?.name.replaceAll('-', ' ')}:</h4>
                            <p>{base_stat}</p>
                        </div>
                    )
                })}
            </>

            <h3 className='text-xl lg:text-2xl font-bold my-4 dark:text-white'>Moves</h3>
            <div className='max-w-[850px]'>
                {moves.map((moveObj, index)=> {
                    return(
                        <button key={index} className='border px-2 py-1 m-1 dark:text-white rounded transition-all duration-150 hover:scale-105 hover:bg-gray-200 dark:hover:bg-neutral-800'>
                            <p>{moveObj?.move?.name.replaceAll("-"," ")}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export default PokeCard;