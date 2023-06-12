import pb from "../lib/pocketbase";
import { useQuery } from "react-query";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function useVerified() {
    const id = pb.authStore.model?.id;
    async function checkVerified() {
        const userdata = await pb.collection('users').getOne(id);
        return userdata.verified;
    }
    return useQuery({ queryFn: checkVerified, queryKey: ["check-verified", id] })
}

export async function requestVerification() {
    const MySwal = withReactContent(Swal)
    const email = pb.authStore.model.email;
    const res = await pb.collection("users").requestVerification(email);
    if (res) MySwal.fire({
        icon: "success",
        confirmButtonColor: "green",
        width: 450,
        text: "Email sent! Check your inbox!",
        timer: 2000,
        allowOutsideClick: true,
    })
}