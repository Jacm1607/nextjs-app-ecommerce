import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import TitleBorder from "@/components/ui/titleBorder";
import { MapPin } from "lucide-react";
import Link from "next/link";


export default function CreditInfo() {
    const creditInfo = [
        {
            name: 'DEPENDIENTES',
            details: `<li>Carnet de Identidad Vigente</li>
            <li>Aviso Cobranza de Luz</li>
            <li>3 últimas boletas de pago</li>
            <li>Extracto de aportes históricos AFP</li>`
        },
        {
            name: 'INDEPENDIENTES FORMAL',
            details: `<li>Carnet de Identidad Vigente</li>
            <li>Aviso Cobranza de Luz</li>
            <li>NIT y/o Licencia de funcionamiento</li>
            <li>Respaldo de ingresos</li>
            <li>Verificación de Negocio</li>`
        },
        {
            name: 'DEPENDIENTES SIN AFP',
            details: `<li>Carnet de Identidad Vigente</li>
            <li>Aviso Cobranza de Luz</li>
            <li>3 últimas boletas de pago</li>
            <li>Garante Personal con AFP (si corresponde)</li>`
        },
        {
            name: 'INDEPENDIENTES INFORMAL',
            details: `
            <li>Carnet de Identidad Vigente</li>
            <li>Aviso Cobranza de Luz</li>
            <li>Garante Personal con AFP (si corresponde)</li>
            <li>Verificación de Negocio</li>`
        },
    ]
    return (
        <div className="container my-10">
            <TitleBorder title="REQUISITOS PARA CRÉDITO" />
            <div className="grid grid-cols-2 gap-6">
                {
                    creditInfo.map((creditInfoItem: any) => (
                        <div key={creditInfoItem.name} className="col-spa-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">{creditInfoItem.name}</CardTitle>
                                    <CardDescription>{creditInfoItem.address}</CardDescription>
                                </CardHeader>
                                <CardContent className="mx-16">
                                    <ul className=" list-disc" dangerouslySetInnerHTML={{ __html: creditInfoItem.details }}></ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}