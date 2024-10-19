import { useState, useEffect } from 'react';
import { getPokedexNumber, getFullPokedexNumber } from '../utils'
import TypeCard from './TypeCard'

function PokeCard({selectedPokemon}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { name, height, abilities, stats, types, moves, sprites } = data || {}
    // console.log(types)


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
                // setLoading(false)
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
        <div className='ml-[25%] lg:ml-[300px] xl:ml-[350px] 2xl:ml-[380px]'>
            <span>{getFullPokedexNumber(selectedPokemon)}</span>
            <span>{name}</span>
            <div>
                {types.map((typeObj, index)=> {
                    return(
                        <TypeCard key={index} type={typeObj?.type?.name} />
                    )
                })}
            </div>
        </div>
    )
}
export default PokeCard;