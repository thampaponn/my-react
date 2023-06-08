import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import pb from "../lib/pocketbase"
import useLogout from "../hooks/useLogout"
import { Link } from "react-router-dom"


export default function Root() {
    const logout = useLogout();
    const isLoggedIn = pb.authStore.isValid;
    console.log(isLoggedIn);

    return (
        <>
            <div className="flex">
                <div className='flex flex-col bg-white h-screen w-1/5 px-12'>
                    <div className="flex justify-center items-center mt-20 cursor-pointer">
                        <FontAwesomeIcon className='flex items-center text-2xl mx-2 text-[#4C49ED]' icon={faChartSimple} />
                        <h1 className="text-black text-3xl font-extrabold font-mulish">Fin</h1>
                        <h1 className="text-[#4C49ED] text-3xl font-extrabold font-mulish">app</h1>
                    </div>
                    <div className="flex flex-col items-start py-20 flex-grow">
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Dashboard</button>
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Invoice</button>
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Wallets</button>
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Reports</button>
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Transactions</button>
                        <div className="flex-grow"></div>
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Settings</button>
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Help</button>
                        <div className='pb-8'></div>
                        <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">{pb.authStore.model.email}</button>
                        {isLoggedIn ? <Link to="/login"><button onClick={logout} className="flex justify-start w-60 font-mulish items-center text-red-500 text-xl hover:text-red-800 transition-colors duration-300 hover:bg-red-100 rounded-md px-4 py-5 cursor-pointer">Log Out</button></Link> : <Link to="/login"><button className="flex justify-start w-60 font-mulish items-center text-green-500 text-xl hover:text-green-800 transition-colors duration-300 hover:bg-green-100 rounded-md px-4 py-5 cursor-pointer">Log In</button>
                        </Link>}
                    </div>
                </div>
                <div className='flex flex-col bg-[#E1E1F5] h-screen w-4/5 px-8 py-12'>
                    <div className='flex w-full h-2/6 my-5'>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl items-center overflow-hidden'>
                            <div className='flex flex-col w-1/2 ml-8'>
                                <p className='flex font-mulish text-3xl'>Total Balance</p>
                                <p className='flex font-mulish text-2xl text-green-400 mt-2'>+ $28.55</p>
                                <p className='flex font-mulish text-sm text-gray-300'>Last Transaction</p>
                                <div className='flex h-full items-center my-4'>
                                    <button className='flex justify-center font-mulish text-s w-full text-white bg-[#4C49ED] border-2 border-[#4C49ED] rounded-full py-3 mr-1 hover:bg-[#312eea] hover:border-[#312eea] hover:text-gray-200 transition-colors duration-300'>TOP UP</button>
                                    <button className='flex justify-center font-mulish text-s w-full text-[#4C49ED] bg-white rounded-full border-2 border-[#4C49ED] py-3 ml-1 hover:bg-gray-200 hover:border-[#312eea] hover:text-[#312eea] transition-colors duration-300'>WITHDRAW</button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-[#4C49ED] w-1/2 h-full rounded-l-full ml-16'>
                                <div className='flex items-end'>
                                    <p className='flex font-mulish text-5xl text-white'>$ 200</p>
                                    <p className='flex font-mulish text-xl text-gray-300/40'>.58</p>
                                </div>
                                <p className='flex font-mulish text-sm text-gray-300/60 my-2'>WALLETS AMOUNT</p>
                            </div>
                        </div>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl'></div>
                    </div>
                    <div className='flex w-full h-1/5 my-5'>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl'></div>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl'></div>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl'></div>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl'></div>
                    </div>
                    <div className='flex w-full h-1/2 my-5'>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl'></div>
                        <div className='flex bg-white w-1/2 mx-4 rounded-xl'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
