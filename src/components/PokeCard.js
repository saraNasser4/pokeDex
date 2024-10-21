import { useState, useEffect } from 'react';
import { getPokedexNumber, getFullPokedexNumber } from '../utils'
import TypeCard from './TypeCard'
import Modal from './Modal'

function PokeCard({selectedPokemon}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [skill, setSkill] = useState(null);
    const [loadingSkill, setLoadingSkill] = useState(false);
    
    const { name, height, abilities, stats, types, moves, sprites } = data || {}
    const imgList = Object.keys(sprites || {}).filter(val => !sprites[val] || ['versions', 'other'].includes(val) ? false : true)

    async function fetchMoveData(move, moveUrl) {
        if(loadingSkill || !localStorage || !moveUrl) return;

        let cache = {}
        if(localStorage.getItem('pokemon-moves')) {
            cache = JSON.parse(localStorage.getItem('pokemon-moves'))
        }

        if(move in cache) {
            setSkill(cache[move]);
            return;
        }

        try {
            setLoadingSkill(true)
            const res = await fetch(moveUrl);
            if (!res.ok) throw new Error('Failed to fetch move data')
            const moveData = await res.json();
            const description = moveData?.flavor_text_entries.filter(val => val.version_group.name = 'firered_leafgreen')[0]?.flavor_text;
            const skillData = {
                move,
                description
            }
            setSkill(skillData)
            cache[move] = skillData
            localStorage.setItem('pokemon-moves', JSON.stringify(cache))

        } catch (err) {
            console.log(err)

        } finally {
            setLoadingSkill(false)
        }

    }

    useEffect(()=>{
        if(loading || !localStorage) return;

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
                let dataUrl = `https://pokeapi.co/api/v2/pokemon/${getPokedexNumber(selectedPokemon)}`;
                let res = await fetch(dataUrl);
                if (!res.ok) throw new Error('Failed to fetch data')
                let pokemonData = await res.json();
                setData(pokemonData);
                console.log(dataUrl)


                cache[selectedPokemon] = pokemonData;
                localStorage.setItem('pokedex', JSON.stringify(cache))
            }catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        
        fetchPokemonData()
    }, [selectedPokemon])
    console.log(data)
    
    if(loading || !data) {
        return(
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }


    return(
        <div className='m-4 p-4 md:ml-[25%] lg:ml-[300px] xl:ml-[350px] 2xl:ml-[380px] dark:text-white'>

            {skill && (<Modal handleCloseModal={()=> { setSkill(null) }}>
                <div className='flex gap-3 text-lg md:text-xl my-5'>
                    <h2 className='font-bold'>Name:</h2>
                    <h6 className='capitalize'>{skill.move.replaceAll('-', ' ')}</h6>
                </div>
                <div className='flex gap-3 text-lg md:text-xl my-5'>
                    <h2 className='font-bold'>Description: </h2>
                    <h6>{skill.description}</h6>
                </div>
            </Modal>)
            }

            <div className='flex flex-col'>
                <span className='font-semibold text-2xl lg:text-3xl'>#{getFullPokedexNumber(selectedPokemon)}</span>
                <h3 className='font-bold text-3xl lg:text-4xl mb-5'>{name}</h3>
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
            <h3 className='text-xl lg:text-2xl font-bold my-4'>Stats</h3>
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

            <h3 className='text-xl lg:text-2xl font-bold my-4'>Moves</h3>
            <div className='max-w-[850px]'>
                {moves.map((moveObj, index)=> {
                    return(
                        <button key={index} onClick={()=> fetchMoveData(moveObj?.move?.name, moveObj?.move?.url)} className='border px-2 py-1 m-1 rounded transition-all duration-150 hover:scale-105 hover:bg-gray-200 dark:hover:bg-neutral-800'>
                            <p>{moveObj?.move?.name.replaceAll("-"," ")}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export default PokeCard;