'use client'

import { useEffect, useState } from "react"
import { useToast } from "../ui/use-toast";
import { addProductStore } from "@/lib/store";

const StockProduct = ({ product }: any) => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(true);
    const [available, setAvailable] = useState(false);
    const [q, setQ] = useState(1);
    useEffect(() => {
        const fetchStock = async (sku: any) => {
            try {
                const responseStock = await fetch(`http://190.186.38.20:8084/REST/STOCK/ECOMMERCE/STOCK?productCode=${sku}`, {
                    headers: {
                        Authorization: 'Basic ZWNvbW1lcmNlYXBpOjFlY29tbWVyY2VhcGkx'
                    }
                })
                const jsonStock = responseStock.json();

                setLoading(false)
                setAvailable(true)
            } catch (error) {
                setLoading(false)
                setAvailable(false)
            }
        }
        fetchStock(product.sku);
    }, [])
    return (
        <>
            {
                loading ? <>
                    Cargando...
                </> : available ? <>
                    Producto no disponible por el momento
                </> : <>
                    <select onClick={(e:any) => {setQ(e.target.value)}} className="rounded-full border-2 border-solid border-sky-900 w-20 text-3xl text-center text-sky-900 font-bold" name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={() => {
                        toast({
                            title: "Producto añadido al carrito",
                            description: "Haz agregado al carrito de compra un producto.",
                        })
                        addProductStore(product, q)
                    }} className="rounded-full border-2 border-solid border-sky-900 text-3xl text-center text-white font-bold bg-sky-900 px-5">Añadir</button>
                </>
            }
        </>
    )
}

export default StockProduct;