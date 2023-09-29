import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TitleBorder from "@/components/ui/titleBorder";
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

                <Card className="text-primary border-[1px] border-primary rounded-3xl">
                    <CardHeader>
                        <CardTitle>INFORMACIÓN BÁSICA</CardTitle>
                        <CardDescription>Proporciona tus datos personales para aplicar al crédito.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-4 w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="fullname">NOMBRE COMPLETO</Label>
                                <Input id="fullname" placeholder="Ingresa tu nombre completo" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="ci">CARNET DE IDENTIDAD</Label>
                                <Input id="ci" placeholder="Ingresa tu CI" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="extension">EXTENSIÓN</Label>
                                <Select>
                                    <SelectTrigger id="extension">
                                        <SelectValue placeholder="Selecciona una opción" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="SC">SANTA CRUZ</SelectItem>
                                        <SelectItem value="BN">BENI</SelectItem>
                                        <SelectItem value="PA">PANDO</SelectItem>
                                        <SelectItem value="LP">LA PAZ</SelectItem>
                                        <SelectItem value="OR">ORURO</SelectItem>
                                        <SelectItem value="PT">POTOSI</SelectItem>
                                        <SelectItem value="CB">COCHABAMBA</SelectItem>
                                        <SelectItem value="CH">CHUQUISACA</SelectItem>
                                        <SelectItem value="TJ">TARIJA</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="cellphone">CELULAR</Label>
                                <Input type="number" id="cellphone" placeholder="777 77 777" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="type_person">TIPO DE PERSONA</Label>
                                <Select>
                                    <SelectTrigger id="type_person">
                                        <SelectValue placeholder="Selecciona una opción" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="DP">DEPENDIENTES</SelectItem>
                                        <SelectItem value="DP-AFP">DEPENDIENTES SIN AFP</SelectItem>
                                        <SelectItem value="IND-F">INDEPENDIENTE FORMAL</SelectItem>
                                        <SelectItem value="IND-IF">INDEPENDIENTE INFORMAL</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="product">PRODUCTO</Label>
                                <Input id="product" placeholder="Ingresa nombre del producto" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="text-primary border-[1px] border-primary rounded-3xl">
                    <CardHeader>
                        <CardTitle>INFORMACIÓN FINANCIERA</CardTitle>
                        <CardDescription>Proporciona tus datos financiero en <strong>moneda nacional (Bs)</strong>.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-4 w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="monthly_salary">INGRESO MENSUAL</Label>
                                <Input id="monthly_salary" type="number" placeholder="0000.00 Bs" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="rental">ALQUILER</Label>
                                <Input id="rental" type="number" placeholder="0000.00 Bs" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="commercial_credit">CRÉDITOS COMERCIALES</Label>
                                <Input type="number" id="commercial_credit" placeholder="0000.00 Bs" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="financial_credit">CRÉDITOS FINANCIEROS</Label>
                                <Input type="number" id="financial_credit" placeholder="0000.00 Bs" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

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