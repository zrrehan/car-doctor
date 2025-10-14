import { useSession } from "next-auth/react";

export default function useUserInfo() {
    const {data} = useSession();
    if (!data) return {
        email: null,
        name: null,
        imgUrl: null,
        imgDeleteUrl: null
    }
    const {email, image, name} = data.user
    return {
        email, 
        name, 
        imgUrl: image.imgUrl, 
        imgDeleteUrl: image.deleteUrl
    }
}