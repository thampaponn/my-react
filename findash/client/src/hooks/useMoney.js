import pb from "../lib/pocketbase";
import { useQuery } from "react-query";

export default function useMoney() {
    const userId = pb.authStore.model?.id; // Get the logged-in user's ID

    async function fetchMoney() {
        const userData = await pb.collection("users").getOne(userId); // Fetch the user's data
        return userData?.money;
    }

    return useQuery("money", fetchMoney);
}