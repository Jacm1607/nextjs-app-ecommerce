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
    subcategorias: any
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
    return fetch(`${URL_BASE}/api/categorias?populate[imagen][fields]=url&populate[subcategorias][fields][0]=id&populate[subcategorias][fields][1]=nombre`, {
        cache: 'no-store'
    })
        .then(res => res.json())
}

const CategoryHome = async () => {
    const categories = await fetchCategories()
    return (
            <ScrollArea className="col-span-4">
                <div className="flex space-x-4 pb-4 justify-center">
                    {
                        categories.data.map((category: ICategory) =>
                            <Link key={category.id} href={`/categoria/${category.attributes.slug}/${category.attributes.subcategorias.data[0].id}`}>
                                <div className="card w-[160px] h-[130px] flex flex-col justify-center items-center">
                                    <div className="absolute w-full h-full rounded-2xl"></div>
                                    <Img url={category.attributes.imagen.data.attributes.url} alt={category.attributes.nombre} qwidth={200} qheight={100} width={"70%"} height={"70%"} objectFit={"contain"}></Img>
                                    <p className="absolute text-primary text-sm font-bold text-center mt-[120px]">{category.attributes.nombre}</p>
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