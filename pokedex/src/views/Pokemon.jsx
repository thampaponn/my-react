import React from 'react'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'

function Pokemon() {
    const [name, setName] = useState("eevee");
    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    async function getAllPokemon() {
        setIsLoading(true);
        try {
            let res = await fetch('https://pokeapi.co/api/v2/pokemon/');
            let pokemonData = await res.json();
            setData(pokemonData);
            setErr(false); // Reset the error state
        } catch (error) {
            setData([]); // Set an empty array instead of false
            setErr(true);
        }
        setIsLoading(false);
    }
    return (
        <>
            <Nav />
            <div className='flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-blue-800'>
                <div className="bg-white text-center rounded-3xl border shadow-lg p-10 max-w-xl">
                    <>
                        <img className='my-5 w-50 h-50 rounded-xl shadow-lg mx-auto' alt={`${data.name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} />
                        <h1 className='text-lg text-gray-700'>Name : {data.name}</h1>
                        <h3 className='text-md text-gray-500'>Height : {data.height}</h3>
                        <h3 className='text-md text-gray-500'>Weight : {data.weight}</h3>
                    </>
                </div>
            </div>
        </>
    )
}
export default Pokemon