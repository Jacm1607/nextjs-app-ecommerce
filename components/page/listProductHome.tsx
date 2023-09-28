'use client'
import React, { useEffect, useState } from 'react';
import TitleBorder from "../ui/titleBorder";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import CardProduct from "../ui/cardProduct";


const dividirArrayEnGrupos = (array: [], tamanoGrupo = 3) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamanoGrupo) {
        grupos.push(array.slice(i, i + tamanoGrupo));
    }
    return grupos;
}


const ListProductsHome = () => {
    const [products, setProducts] = useState<any>([])
    const [elementActive, setElementActive] = useState(0);
    const elementQ = products?.length;

    const nextElement = () => {
        setElementActive(elementActive === elementQ - 1 ? 0 : elementActive + 1);
    };

    const backElement = () => {
        setElementActive(elementActive === 0 ? elementQ - 1 : elementActive - 1);
    };

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch(`https://www.dashboard.hauscenter.com.bo/api/productos?populate[imagen][fields][0]=url&pagination[start]=0&pagination[limit]=10`, {
                cache: 'no-store'
            })

            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const response = await res.json()
            const _products = dividirArrayEnGrupos(response.data)
            setProducts(_products)
        }
        fetchProducts()
    }, [])


    return (
        <>
            <TitleBorder title="Productos recien agregados" />
            <div className="flex mx-28 justify-center">
                <button className="mx-4" onClick={backElement}><ChevronLeftCircle size={48} strokeWidth={2.25} color="#84848b" /></button>
                {
                    products.map((_products: any, index: any) => (
                        <div key={index} className={`slider grid grid-cols-3 gap-10 transition duration-150 ease-out ${elementActive === index ? ' block' : ' hidden'}`}>
                            {
                                _products.map((product: any) => <CardProduct product={product} />)
                            }
                        </div>
                    ))
                }
                <button className="mx-4" onClick={nextElement}><ChevronRightCircle size={48} strokeWidth={2.25} color="#84848b" /></button>
            </div>
        </>
    )
}

export default ListProductsHome