import pb from "../lib/pocketbase";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useLogin from "../hooks/useLogin";
import useLogout from "../hooks/useLogout";
import useVerified, { requestVerification } from "../hooks/useVerified";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const logout = useLogout();
    const { data: isVerified } = useVerified();
    const { mutate: login, isLoading, isError } = useLogin();
    const { register, handleSubmit, reset } = useForm();
    const isLoggedIn = pb.authStore.isValid;
    const [imgsrc, setImgsrc] = useState("");

    async function getImage() {
        try {
            const collection = await pb.collection('files').getList();
            if (pb.authStore.model.id === collection.items[0].user) {
                const collectionID = collection.items[0].collectionId;
                const recordID = collection.items[0].id;
                const filename = collection.items[0].file;
                const newImgSrc = `http://127.0.0.1:8090/api/files/${collectionID}/${recordID}/${filename}`;
                setImgsrc(newImgSrc);
            } else {
                setImgsrc("")
            }
        } catch (error) {
            console.error('Failed to retrieve the image:', error);
        }
    }

    async function deleteImage() {
        try {
            const collection = await pb.collection('files').getList();
            if (pb.authStore.model.id === collection.items[0].user) {
                const recordID = collection.items[0].id;
                await pb.collection('files').delete(recordID);
                setImgsrc("");
                window.location.reload();
            }
        } catch (error) {
            console.error('Failed to delete the image:', error);
        }
    }

    async function uploadImage() {

    }

    async function onSubmit(data) {
        login({ email: data.email, password: data.password });
        reset();
        // navigate("/");
    }

    useEffect(() => {
        getImage();
    }, []);

    if (isLoggedIn) {
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
                            <Link to="/">
                                <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Dashboard</button>
                            </Link>
                            <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Invoice</button>
                            <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Wallets</button>
                            <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Reports</button>
                            <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Transactions</button>
                            <div className="flex-grow"></div>
                            <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Settings</button>
                            <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">Help</button>
                            <div className='pb-8'></div>
                            <Link to='/profile'>
                                <button className="flex justify-start w-60 font-mulish items-center text-[#A1A0BD] text-xl hover:text-[#4C49ED] transition-colors duration-300 hover:bg-[#E4E3FF] rounded-md px-4 py-5 cursor-pointer">{pb.authStore.model.username}</button>
                            </Link>
                            {isLoggedIn ? (
                                <Link to="/login">
                                    <button onClick={logout} className="flex justify-start w-60 font-mulish items-center text-red-500 text-xl hover:text-red-800 transition-colors duration-300 hover:bg-red-100 rounded-md px-4 py-5 cursor-pointer">Log Out</button>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <button className="flex justify-start w-60 font-mulish items-center text-green-500 text-xl hover:text-green-800 transition-colors duration-300 hover:bg-green-100 rounded-md px-4 py-5 cursor-pointer">Log In</button>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#E1E1F5] h-screen w-4/5 px-8 py-12'>
                        <div className='flex w-full h-3/5 my-5'>
                            <div className='flex flex-col bg-white w-1/2 mx-4 rounded-xl overflow-hidden p-10'>
                                <>
                                    <h1 className="flex font-mulish text-5xl">Profile</h1>
                                    <div className="flex flex-col my-8">
                                        <div className="flex items-center font-mulish text-xl my-2">Username : {pb.authStore.model.username}</div>
                                        <div className="flex items-center font-mulish text-xl my-2">Email : {pb.authStore.model.email}</div>
                                        <div className="flex items-center font-mulish text-xl my-2">Account Status : {isVerified ? <p className="flex items-center font-mulish text-xl text-green-600 mx-2">Verified!</p> : <p className="flex items-center font-mulish text-xl text-red-600 mx-2">Account is not yet verified!</p>}</div>
                                        {!isVerified && <button onClick={requestVerification} className="flex font-mulish text-md items-center justify-center border-black border-2 px-4 mx-4 rounded hover:bg-gray-200 transition-colors duration-300">Send Verification Email</button>}
                                    </div>
                                </>
                            </div>
                            <div className='flex flex-col justify-center bg-white w-1/2 mx-4 rounded-xl overflow-hidden p-10'>
                                <p className="flex font-mulish text-2xl justify-center mb-8">Profile Image</p>
                                {imgsrc ? <img className="flex justify-center rounded-lg" src={imgsrc} alt="" /> : <p className="flex flex-col items-center font-mulish text-3xl justify-center my-8">Profile image has not been set! <button className="flex font-mulish text-lg my-8 border-2 border-black rounded px-4 hover:bg-gray-200 transition-colors duration-300">Upload Image</button> </p>}
                                {imgsrc ? <button onClick={deleteImage} className="flex font-mulish text-md px-4 justify-center border-black border-2 rounded my-4 hover:bg-gray-200 transition-colors duration-300" type="">Delete Image</button> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p className="text-red-500">Invalid email or password!</p>}
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="email" {...register('email')} />
                <input type="password" placeholder="password" {...register('password')} />
                <button type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
            </form>
        </>
    );
}
