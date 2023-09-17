import { URL_BASE } from "@/lib/endpoint"
import Link from "next/link";
import Img from "../ui/img";
import { ScrollArea, ScrollBar } from "./scroll-area";

export interface ICategory {
    id: number;
    attributes: ICategoryAttributes;
}

export interface ICategoryAttributes {
    nombre: string;
    visible: boolean;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    imagen: Imagen;
}

export interface Imagen {
    data: Data;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
}


const fetchCategories = () => {
    return fetch(`${URL_BASE}/api/categorias?populate[imagen][fields]=url`, {
        cache: 'no-store'
    })
        .then(res => res.json())
}

const CategoryHome = async () => {
    const categories = await fetchCategories()
    console.log(categories.data)
    return (
            <ScrollArea className="col-span-4">
                <div className="flex space-x-4 pb-4">
                    {
                        categories.data.map((category: ICategory) =>
                            <Link key={category.id} href={`/categoria/${category.attributes.slug}`}>
                                <div className="card flex-shrink-0 relative w-[220px] h-[190px] flex justify-center items-center">
                                    <div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
                                    <Img url={category.attributes.imagen.data.attributes.url} alt={category.attributes.nombre} qwidth={200} qheight={100} width={"70%"} height={"70%"} objectFit={"contain"}></Img>
                                    <p className="absolute text-white text-2xl font-bold text-center mt-[90px]">{category.attributes.nombre}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
    )
}

export default CategoryHome