import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ShopComplete() {
    return (
        <div className="min-h-screen container mt-[60px]">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center">
                            <ShieldCheck size={60} color="#128714" strokeWidth={2.25} />
                            <span>Pedido Confirmado</span>
                                </div> 
                            </CardTitle>
                        <CardDescription>¡Enhorabuena! Tu compra en Hauscenter se ha realizado con éxito.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Nos complace informarte que tu compra se ha completado exitosamente. Hemos recibido tu pedido y estamos trabajando arduamente para prepararlo y enviarlo lo antes posible.</p>
                        <p>Queremos agradecerte por confiar en nosotros para tus necesidades de compras en línea. Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nuestro equipo de atención al cliente.</p>
                        <p>¡Esperamos que disfrutes de tus productos y que tengas una experiencia de compra excepcional con nosotros!</p>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Link href={'/'}>
                            <Button>Ir al inicio</Button>
                        </Link>
                        {/* <Link href={'/'}>Realizar seguimiento a mi pedido</Link> */}
                    </CardFooter>
                </Card>
        </div>
    )
}