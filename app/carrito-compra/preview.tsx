'use client'
import { useEffect, useState } from "react";
import { getProductStore, removeProductStore } from "@/lib/store";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { URL_BASE } from "@/lib/endpoint";
import TitleBorder from "@/components/ui/titleBorder";
import Link from "next/link";

const PreviewShop = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0.00);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const productsStore = getProductStore();
            setProducts(productsStore);
            updateTotal(productsStore);
        }
    }, []);

    const updateTotal = (products: any) => {
        let subtotal = 0;
        products.forEach((product: any) => {
            subtotal += product.precio_oferta > 0 ? product.precio_oferta * product.cantidad : product.precio * product.cantidad;
        });
        setTotal(subtotal);
    };

    const updateProducts = (id: any) => {
        removeProductStore(id);
        const productsStore = getProductStore();
        setProducts(productsStore);
        updateTotal(productsStore);
    };

    return (
        <>
            {products.length > 0 ? (
                <><TitleBorder title={"Lista de productos"} />
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 space-y-5">

                            {products.map((product: any) => (
                                <div key={product.id} className="">
                                    <Card className="relative">
                                        <CardContent className=" mt-5">
                                            <div className="flex items-center ">
                                                <Avatar className="w-32 h-32">
                                                    <AvatarImage className="w-32 h-32" src={`${URL_BASE}${product.imagen}`} />
                                                    <AvatarFallback className="w-32 h-32">CN</AvatarFallback>
                                                </Avatar>
                                                <div className="ml-4">
                                                    <p className="font-extrabold text-2xl">{product.nombre}</p>
                                                    <p className="text-sm">{product.modelo}</p>
                                                    <p className="font-extrabold text-xl">{product.cantidad} x<span>{product.precio}  Bs.</span></p>
                                                </div>
                                            </div>

                                        </CardContent>
                                        <Button onClick={() => updateProducts(product.id)} className="absolute bottom-0 right-0 m-6 space-x-2" variant={'destructive'}>
                                            <Trash2 size={20} color="#ffffff" strokeWidth={1.5} /> <span>Eliminar</span>
                                        </Button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Previsualizacion de compra</CardTitle>
                                    <CardDescription>Estás a un paso de finalizar tu compra. No olvides revisar cuidadosamente los productos que has seleccionado para asegurarte de que sean los correctos antes de comprar. 😉</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-right font-extrabold text-2xl"> Bs.<span>{total}</span></p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={'/caja'} className="w-full"><Button className="w-full">
                                        Ir a caja
                                    </Button></Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div></>
            ) : (
                <div className="min-h-screen text-2xl pt-16">
                    <span className=" font-extrabold">Tu carrito de compras está vacío</span> por el momento. Explora nuestra selección de productos y encuentra tus favoritos. ¡Estamos aquí para ayudarte a encontrar lo que necesitas!
                </div>
            )}
        </>
    );
};

export default PreviewShop;
