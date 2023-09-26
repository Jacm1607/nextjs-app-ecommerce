'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { URL_BASE } from "@/lib/endpoint";
import Link from "next/link";
import { useState } from "react";

const CardForm = () => {
    const [orderUrl, setOrderUrl] = useState('');
    return (
        <Card className="w-[650px]">
            <CardHeader>
                <CardTitle>Buscar pedido</CardTitle>
                <CardDescription>Puedes buscar tu pedido ingresando tu código.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-1.5">
                    <Label>Código de compra</Label>
                    <Input onChange={(e:any) => setOrderUrl(e.target.value)} placeholder="538338c9-b055-4ba9-a97e-67617ac99f61" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button><Link href={`/seguimiento-pedido/${orderUrl}`}>Seguir mi pedido</Link></Button>
            </CardFooter>
        </Card>
    )
}
export default CardForm;