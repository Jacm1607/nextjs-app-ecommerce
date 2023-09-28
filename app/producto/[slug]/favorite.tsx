import { Heart } from "lucide-react";

const Favorite = () => {
    return (
        <button className="flex justify-center space-x-1 font-bold uppercase text-primary"><Heart color="#0f2557" strokeWidth={1.5} /> <span>Favoritos</span></button>
    )
}

export default Favorite;