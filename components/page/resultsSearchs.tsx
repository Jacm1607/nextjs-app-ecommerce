"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Img from "../ui/img";

interface IResultSearchs {
    query: string
}
const ResultSearchs = ({ query }: IResultSearchs) => {
    const [response, setResponse] = useState<any>([])
    const [loading, setLoading] = useState<any>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseSearchProducts = await fetch(`https://www.dashboard.hauscenter.com.bo/api/productos?filters[nombre][$contains]=${query}&populate[imagen][fields][0]=url&pagination[limit]=10`, {
                    cache: 'no-store'
                });
                const jsonSearchProducts = await responseSearchProducts.json();
                setLoading(false);
                setResponse(jsonSearchProducts.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {loading
                ? <div className="my-72 font-semibold text-sky-800 text-3xl">Buscando...</div>
                : response.length > 0 ? <div className="mt-16">
                    {response.map((product: any) =>
                        <div key={product.id} className="grid grid-cols-6 mt-5">

                            <Link key={product} href={`/producto/${product.slug }`} className="grid grid-cols-5 lg:col-span-4 col-span-6">
                                <div className="md:col-span-2 col-span-5 w-[195px] h-[195px] border-solid border-2 border-sky-900 flex justify-center items-center rounded-3xl">
                                    <Img url={product.attributes.imagen.data[0].attributes.url} width={"140px"} height={"140px"} objectFit={"cover"} />
                                </div>
                                <div className="md:col-span-3 col-span-5">
                                    <span className="upperacase text-[25px] font-bold text-sky-900 leading-6">{product.attributes.nombre}.</span><br />
                                    <span className="leading-3 text-sm">{product.attributes.descripcion_corta}</span>
                                </div>
                            </Link>
                            <div className="lg:col-span-2 col-span-6 flex flex-col justify-between">
                                <div className="text-right">
                                    <span className="upperacase text-[25px] font-bold text-sky-900">{product.attributes.precio}</span>
                                    <span className="upperacase text-[25px] font-bold text-sky-900 uppercase text-right"> bs.</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>:
                <div className="my-72 font-semibold text-sky-800 text-3xl">No se encontro productos</div>
            }
        </>
    )
}

export default ResultSearchs