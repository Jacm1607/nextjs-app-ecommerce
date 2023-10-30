import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

import TitleBorder from "@/components/ui/titleBorder";
import Link from "next/link";
import FormCrediHaus from "./form-credi-haus";


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
                            <Card className="text-primary border-[1px] border-primary rounded-3xl">
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
            <div className="mt-8 space-y-6">
                <TitleBorder title="SOLICITUD DE CRÉDITO" />

                <FormCrediHaus />

                <Card className="text-primary border-[1px] border-primary rounded-3xl">
                    <CardHeader>
                        <CardTitle>AUTORIZACION</CardTitle>
                        <CardDescription>(BURO INFORMACIÓN CREDITICIA)</CardDescription>
                    </CardHeader>
                    <CardContent className="text-primary font-semibold space-y-3">
                        <div><span className="font-extrabold">PASO 1: </span>Descargue el documento de Aurotización de Buro de Información Crediticia.</div>
                        <div><a className="" href="/pdf/autorizacion_de_información_crediticia.pdf" download target="_blank"><Button>DESCARGAR DOCUMENTO 📃</Button></a></div>
                        <div><span className="font-extrabold">PASO 2: </span>Imprime el documento en una hoja limpia y de color blanco.</div>
                        <div><span className="font-extrabold">PASO 3: </span>Coloca los siguientes datos en el orden correspondiente:</div>
                        <div>
                            <ul className="list-disc ml-20">
                                <li>Firma.</li>
                                <li>Nombre completo.</li>
                                <li>Numero de cedula de identidad.</li>
                            </ul>
                        </div>
                        <div><span className="font-extrabold">PASO 4: </span>Escanea o Toma una Foto de los Siguientes Datos en el orden Correspondiente:</div>
                        <div>
                            <ul className="list-disc ml-20">
                                <li>Autorizacion del Buro.</li>
                                <li>Cedula de identidad (anverso y reverso).</li>
                            </ul>
                        </div>
                        <div><Button>CARGAR DOCUMENTO 📃</Button></div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}