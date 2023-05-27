import { useState, useEffect } from 'react'
import Nav from '../components/Nav';
export default function Root() {
    const [name, setName] = useState("eevee");
    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);

    async function getPokemon() {
        try {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            let pokemonData = await res.json();
            setData(pokemonData);
        } catch (error) {
            setData(false)
            setErr(true)
        }
    }

    useEffect(() => {
        getPokemon();
        console.log(data);
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        getPokemon()
    }

    console.log(name);

    return (
        <>
        <Nav />
            <div className='flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800'>
                <div className="bg-white text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='p-3 border-solid border-2 border-indigo-600 rounded-md' placeholder='Search by name...' />
                        <button className='bg-indigo-600 px-2 mt-5 text-lg rounded text-gray-100'>Search</button>
                        <img className='my-5 w-50 h-50 rounded-xl shadow-lg mx-auto' alt={`${data.name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} />
                        <h1 className='text-lg text-gray-700'>Name : {data.name}</h1>
                        <h3 className='text-md text-gray-500'>Height : {data.height}</h3>
                        <h3 className='text-md text-gray-500'>Weight : {data.weight}</h3>
                    </form>
                </div>
            </div>
        </>
    )
}