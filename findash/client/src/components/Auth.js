import pb from "../lib/pocketbase"
import { useForm } from "react-hook-form"
import useLogin from "hooks/useLogin"
import useLogout from "hooks/useLogout"

export default function Auth() {
    const logout = useLogout();
    const { mutate: login, isLoading, isError } = useLogin();
    const { register, handleSubmit, reset } = useForm();

    const isLoggedIn = pb.authStore.isValid;

    async function onSubmit(data) {
        login({ email: data.email, password: data.password })
        reset();
    }

    if (isLoggedIn)
        return (
            <>
                <h1>Logged In : {pb.authStore.model.email}</h1>
                <button onClick={logout}>Log Out</button>
            </>
        )

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p style={{color: "red"}}>Invalid email or password!</p>}
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
            </form>
        </>
    )
}