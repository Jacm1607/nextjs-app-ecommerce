import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { URL_BASE } from "@/lib/endpoint"
import { Car, Home, Hourglass, UserCheck2 } from "lucide-react"
import Link from "next/link"

const fetchOrder = async (uuid: string) => {
    const order = await fetch(`${URL_BASE}/api/ordens?populate[estado_orden][fields]=nombre&filters[codigo][$eq]=${uuid}`, {
        cache: 'no-store'
    })
    const responseOrder = await order.json()
    if (order.ok) {
        return responseOrder
    } else {
        return []
    }
}

export default async function Order({ params }: any) {
    const { uuid } = params
    const order = await fetchOrder(uuid)

    return (
        <div className="min-h-screen container mt-8">
            {order.data.length > 0 ? <div className="">
                <Card>
                    <CardHeader>
                        <CardTitle>ESTADO DEL PEDIDO</CardTitle>
                        <CardDescription>Visualiza el estado de tu pedido</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {
                            order.data[0].attributes.estado_orden.data.id != 5 ?
                            <div className="flex justify-center items-center space-x-6">
                                <div className="flex flex-col items-center space-y-4">
                                    <div className={`${order.data[0].attributes.estado_orden.data.id > 0 ? 'bg-lime-600' : 'bg-gray-600'} rounded-full p-4`}>
                                        <Hourglass size={48} color="#ffffff" />
                                    </div>
                                    <p className={`${order.data[0].attributes.estado_orden.data.id > 0 ? 'text-lime-600' : 'text-gray-600'} text-center text-xs`}>EN PROCESO</p>
                                </div>

                                <div className={`${order.data[0].attributes.estado_orden.data.id > 1 ? 'text-lime-600' : 'text-gray-600'} text-center text-2xl font-extrabold`}>-------</div>

                                <div className="flex flex-col items-center space-y-4">
                                    <div className={`${order.data[0].attributes.estado_orden.data.id > 1 ? 'bg-lime-600' : 'bg-gray-600'} rounded-full p-4`}>
                                        <Home size={48} color="#ffffff" />
                                    </div>
                                    <p className={`${order.data[0].attributes.estado_orden.data.id > 1 ? 'text-lime-600' : 'text-gray-600'} text-center text-xs`}>PREPARANDO PEDIDO</p>
                                </div>

                                <div className={`${order.data[0].attributes.estado_orden.data.id > 2 ? 'text-lime-600' : 'text-gray-600'} text-center text-2xl font-extrabold`}>-------</div>

                                <div className="flex flex-col items-center space-y-4">
                                    <div className={`${order.data[0].attributes.estado_orden.data.id > 2 ? 'bg-lime-600': 'bg-gray-600'} rounded-full p-4`}>
                                        <Car size={48} color="#ffffff" />
                                    </div>
                                    <p className={`${order.data[0].attributes.estado_orden.data.id > 2 ? 'text-lime-600' : 'text-gray-600'} text-center text-xs`}>PEDIDO EN CAMINO</p>
                                </div>

                                <div className={`${order.data[0].attributes.estado_orden.data.id > 3 ? 'text-lime-600' : 'text-gray-600'} text-center text-2xl font-extrabold`}>-------</div>

                                <div className="flex flex-col items-center space-y-4">
                                    <div className={`${order.data[0].attributes.estado_orden.data.id > 3 ? 'bg-lime-600': 'bg-gray-600'} rounded-full p-4`}>
                                        <UserCheck2 size={48} color="#ffffff" />
                                    </div>
                                    <p className={`${order.data[0].attributes.estado_orden.data.id > 3 ? 'text-lime-600' : 'text-gray-600'} text-center text-xs`}>PEDIDO ENTREGADO</p>
                                </div>
                            </div> : <>
                                <p className=" text-red-500 text-2xl font-extrabold">ESTE PEDIDO HA SIDO CANCELADO.</p>
                                <p>Si tu orden de compra ha sido cancelada por error no dudes en comunicarte con nosotros.</p>
                            </>
                        }
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full justify-end">
                            <Button><Link href={'/seguimiento-pedido'}>Realizar nuevo siguimiento</Link></Button>
                        </div>
                    </CardFooter>
                </Card>

            </div> : <p className=" text-primary text-2xl font-extrabold">No se encontro ningún resultado.</p>}
        </div>
    )
}