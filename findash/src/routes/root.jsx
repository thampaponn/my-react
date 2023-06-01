import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'

export default function Root() {
    return (
        <>
            <div className="flex">
                <div className='flex flex-col bg-white h-screen rounded-r-lg w-1/5 px-12'>
                    <div className="flex justify-center items-center mt-20  cursor-pointer">
                        <FontAwesomeIcon className='flex items-center text-2xl mx-2 text-[#4C49ED]' icon={faChartSimple}></FontAwesomeIcon>
                        <h1 className="text-black text-3xl font-extrabold font-mulish">Fin</h1>
                        <h1 className="text-[#4C49ED] text-3xl font-extrabold font-mulish">app</h1>
                    </div>
                    <div className="flex flex-col items-center py-20">
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Dashboard</ul>
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Invoice</ul>
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Wallets</ul>
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Reports</ul>
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Transactions</ul>
                    </div>
                    <hr />
                    <div className="flex flex-col items-center py-8">
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Settings</ul>
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Help</ul>
                    </div>
                    <div className="flex flex-col items-center py-8">
                        <ul className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Log Out</ul>
                    </div>
                </div>
                <div className='flex bg-[#E1E1F5] h-screen w-4/5'>

                </div>
            </div>
        </>
    )
}
