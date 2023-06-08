import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { useState } from "react";

export default function useLogin() {
    const [dummy, setDummy] = useState(0);
    async function login({ email, password }) {
        const authData = await pb.collection('users').authWithPassword(email, password);
        setDummy(Math.random());
    }

    return useMutation(login);
}