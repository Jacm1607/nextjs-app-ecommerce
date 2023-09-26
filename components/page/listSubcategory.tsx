'use client'
import { URL_BASE } from "@/lib/endpoint";
import Img from "../ui/img";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import Link from "next/link";
export interface ISubcategory {
    data: DAT;
    meta: Meta;
}

export interface Subcategorias {
    data: DAT[];
}

export interface DatumAttributes {
    nombre: string;
    visible: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    subcategorias: Subcategorias;
    imagen: Imagen;
}

export interface DAT {
    id: number;
    attributes: DatumAttributes;
}

export interface Imagen {
    data: Data;
}

export interface Data {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    url: string;
}

export interface Meta {
}

interface ICategoria {
    slug: any;
    idSubcategory: any;
}


const ListSubcategory = ({ slug: slug, idSubcategory }: ICategoria) => {
    const [subcategory, setSubcategory] = useState<any>();
    const [category, setCategory] = useState<any>();
    const [products, setProducts] = useState([])
    const [loadingSubcategory, setLoadingSubcategory] = useState(true)
    const [loadingProduct, setLoadingProduct] = useState(true)

    const [orderByPrice, setOrderByPrice] = useState('asc')
    const [priceMin, setPriceMin] = useState(1)
    const [priceMax, setPriceMax] = useState(100000)

    const onChangeOrderByPrice = (orderBy: string) => {
        setOrderByPrice(orderBy)
    }

    const onChangePriceMax = (price: any) => {
        setPriceMax(price)
    }
    const onChangePriceMin = (price: any) => {
        setPriceMin(price)
    }
    const filterFetchProducts = async () => {
        setLoadingProduct(true);
        const respose = await fetch(`${URL_BASE}/api/productos?populate[subcategoria]=*&filters[subcategoria][id][$eq]=${subcategory}&pagination[page]=1&populate[imagen][fields][0]=url&sort[0]=precio:${orderByPrice}&filters[precio][$gte]=${priceMin}&filters[precio][$lte]=${priceMax}`, {
            cache: 'no-store'
        })
        const jsonResponse = await respose.json();
        setProducts(jsonResponse);
        setLoadingProduct(false);
    }

    const fetchProduct = async (subcategoria: any) => {
        const respose = await fetch(`${URL_BASE}/api/productos?populate[subcategoria]=*&filters[subcategoria][id][$eq]=${subcategoria}&pagination[page]=1&populate[imagen][fields][0]=url&sort[0]=precio:${orderByPrice}`, {
            cache: 'no-store'
        })
        const jsonResponse = await respose.json();
        setSubcategory(subcategoria)
        setProducts(jsonResponse);
        setLoadingProduct(false);
    }

    useEffect(() => {
        const fetchSubcategories = async () => {
            setLoadingSubcategory(true);
            const respose = await fetch(`${URL_BASE}/api/categorias?filters[slug][$eq]=${slug}&populate[subcategorias][populate][fields][0]=nombre&populate[subcategorias][populate][imagen][fields][1]=url`, {
                cache: 'no-store'
            })
            const jsonResponse = await respose.json();
            setCategory(jsonResponse.data[0])
            fetchProduct(idSubcategory)
            setLoadingSubcategory(false);
        }
        fetchSubcategories()
    }, [])
    return (
        <>
            {
                !loadingSubcategory ?
                    <>
                        <div className="m-6">
                            <div className="mt-6 relative">
                                <h2 className="absolute text-4xl font-extrabold text-primary tracking-tight bg-white pr-3">
                                    {category.attributes.nombre}
                                </h2>
                                <div className="border-b-2 h-8 border-primary">

                                </div>
                            </div>
                            <div className="mt-10">
                                <ScrollArea>
                                    <div className="flex space-x-4 pb-4">
                                        {
                                            category.attributes.subcategorias.data.length > 0 ? (
                                                category.attributes.subcategorias.data.map((subcategory: any) => (
                                                    <Link href={`/categoria/${category.attributes.slug}/${subcategory.id}`} key={subcategory.id} className="cursor-pointer flex-shrink-0 relative w-[220px] h-[190px] flex justify-center items-center">
                                                        <div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
                                                        <Img url={subcategory.attributes.imagen.data.attributes.url} alt={subcategory.attributes.nombre} qwidth={200} qheight={100} width={"70%"} height={"70%"} objectFit={"contain"}></Img>
                                                        <p className="absolute text-white text-2xl font-bold text-center mt-[90px]">{subcategory.attributes.nombre}</p>
                                                    </Link>
                                                ))
                                            ) : <></>
                                        }
                                    </div>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </div>
                        </div>
                        <ListProducts onChangePriceMax={onChangePriceMax} onChangePriceMin={onChangePriceMin} priceMin={priceMin} priceMax={priceMax} newFetchProducts={filterFetchProducts} loadingProduct={loadingProduct} products={products} onChangeOrderByPrice={onChangeOrderByPrice} />
                    </>
                    : <div className="h-[700px] flex justify-center items-center">
                        <span>Cargando...</span>
                        {/* <Skeleton className="w-full h-[120px] bg-slate-500" /> */}
                    </div>
            }
        </>
    )
}

interface ISubcategoria {
    subcategoria: any
}
export function Sidebar({ className, onChangeOrderByPrice, newFetchProducts, priceMax, priceMin, onChangePriceMax, onChangePriceMin }: any) {
    return (
        <div>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="m-2 px-4 text-2xl font-semibold tracking-tight text-primary">
                        Ordenar por
                    </h2>
                    <div className="space-y-1 mx-8">
                        <RadioGroup defaultValue="asc">
                            <div onClick={() => onChangeOrderByPrice('asc')} className="flex items-center space-x-2">
                                <RadioGroupItem value="asc" id="r1" />
                                <Label htmlFor="r1">Precio ascendente</Label>
                            </div>
                            <div onClick={() => onChangeOrderByPrice('desc')} className="flex items-center space-x-2">
                                <RadioGroupItem value="desc" id="r3" />
                                <Label htmlFor="r3">Precio descendente</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <h2 className="my-6 px-4 text-2xl font-semibold tracking-tight text-primary">
                        Filtrar por precio
                    </h2>
                    <div className="mb-4 space-y-3 mx-8">
                        <p>Desde {priceMin}</p>
                        <Slider onValueChange={(e) => onChangePriceMin(e)} defaultValue={[priceMin]} max={100000} step={10} />
                    </div>
                    <div className="space-y-3 mx-8">
                        <p>Hasta {priceMax}</p>
                        <Slider onValueChange={(e) => onChangePriceMax(e)} defaultValue={[priceMax]} max={10000} step={10} />
                    </div>
                    <div className="flex justify-end mt-8">
                        <Button onClick={newFetchProducts}>Filtrar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SkeletonProduct = () => <div className="card">
    <div className="flex space-x-3">
        <Skeleton className="w-[160px] h-[200px] bg-gray-300 rounded-3xl" />
        <div className=" space-y-4">
            <Skeleton className="w-[570px] h-[40px] bg-gray-300 rounded-3xl" />
            <Skeleton className="w-[370px] h-[20px] bg-gray-300 rounded-3xl" />
            <Skeleton className="w-[290px] h-[20px] bg-gray-300 rounded-3xl" />
            <Skeleton className="w-[380px] h-[20px] bg-gray-300 rounded-3xl" />
            <Skeleton className="w-[290px] h-[20px] bg-gray-300 rounded-3xl" />
        </div>
    </div>
</div>

const ListProducts = ({ loadingProduct, products, onChangeOrderByPrice, newFetchProducts, priceMin, priceMax, onChangePriceMax, onChangePriceMin }: any) => {
    return (
        <div className="">
            <div className="border-t">
                <div className="bg-background">
                    <div className="grid lg:grid-cols-5">
                        <Sidebar onChangePriceMax={onChangePriceMax} onChangePriceMin={onChangePriceMin} priceMax={priceMax} priceMin={priceMin} newFetchProducts={newFetchProducts} onChangeOrderByPrice={onChangeOrderByPrice} className="hidden lg:block" />
                        <div className="col-span-3 lg:col-span-4 lg:border-l">
                            <div className="h-full px-4 py-6 lg:px-8">
                                <div defaultValue="music" className="h-full space-y-6">
                                    <div className="border-none p-0 outline-none grid grid-cols-2 gap-6">
                                        {
                                            !loadingProduct ?
                                                products.data.length > 0 ? products.data.map((product: any) => (
                                                    <Link key={product.id} href={`/producto/${product.attributes.slug}`}>
                                                    <div className=" cursor-pointer flex border-2 border-sky-800 border-opacity-40 rounded-3xl">
                                                        <div className="img p-4">
                                                            <Img url={product.attributes.imagen.data[0].attributes.url} width={"140px"} height={"140px"} objectFit={"contain"} />
                                                        </div>
                                                        <div className="content py-4 pr-4">
                                                            <p className=" font-extrabold text-lg text-primary">{product.attributes.nombre}</p>
                                                            <p className=" text-sm text-gray-700">{product.attributes.descripcion_corta}</p>
                                                        </div>
                                                        <Badge className="absolute m-3">Bs. {product.attributes.precio}</Badge>
                                                    </div>
                                                    </Link>
                                                )) : <div className="">
                                                    <span>No hay productos disponible por el momento</span>
                                                </div>
                                                : <div className="space-y-6">
                                                    <SkeletonProduct></SkeletonProduct>
                                                    <SkeletonProduct></SkeletonProduct>
                                                    <SkeletonProduct></SkeletonProduct>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ListSubcategory;