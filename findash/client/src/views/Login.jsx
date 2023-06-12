import pb from "../lib/pocketbase"
import { useForm } from "react-hook-form"
import useLogin from "../hooks/useLogin"
import useLogout from "../hooks/useLogout"
import { useNavigate } from "react-router-dom";
import useVerified, { requestVerification } from "../hooks/useVerified";

export default function Login() {
    const navigate = useNavigate();
    const logout = useLogout();
    const { data: isVerified } = useVerified();
    const { mutate: login, isLoading, isError } = useLogin();
    const { register, handleSubmit, reset } = useForm();

    const isLoggedIn = pb.authStore.isValid;

    async function onSubmit(data) {
        login({ email: data.email, password: data.password });
        reset();
        navigate("/");
    }

    if (isLoggedIn)
        return (
            <>
                <h1 className="text-4xl">Logged In : {pb.authStore.model.email}</h1>
                <p>Verified: {isVerified?.toString()}</p>
                {!isVerified && <button onClick={requestVerification} className="border-black border-2 px-4 rounded">Send Verification Email</button>}
                <button className="border-black border-2 px-4 rounded" onClick={logout}>Log Out</button>
            </>
        )

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
    )
}