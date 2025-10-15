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
    if(typeof image === "string") {
        return {
            email,
            name,
            imgUrl: image,
            imgDeleteUrl: null
        }
    }

    return {
        email, 
        name, 
        imgUrl: image.imgUrl, 
        imgDeleteUrl: image.deleteUrl
    }
}