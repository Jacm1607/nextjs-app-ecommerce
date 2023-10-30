"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from 'next/navigation'
const FormCrediHaus = () => {
    const router = useRouter();
    const [name, setName] = useState('')
    const [ci, setCi] = useState('')
    const [extension, setExtension] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [typePerson, setTypePerson] = useState('')
    const [product, setProduct] = useState('')
    const [mount1, setMount1] = useState('')
    const [mount2, setMount2] = useState('')
    const [credit1, setCredit1] = useState('')
    const [credit2, setCredit2] = useState('')

    const sendData = () => {
        if (name.trim() === '') {
            return alert('El campo nombre es obligatorio');
        }

        if (ci.trim() === '') {
            return alert('El campo ci es obligatorio');
        }

        if (cellphone.trim() === '') {
            return alert('El campo celular es obligatorio');
        }
        if (typePerson.trim() === '') {
            return alert('El campo tipo persona es obligatorio');
        }
        if (product.trim() === '') {
            return alert('El campo producto es obligatorio');
        }

        if (mount1.trim() === '') {
            return alert('El campo ingreso mensual es obligatorio');
        }

        if (mount2.trim() === '') {
            return alert('El campo alquiler es obligatorio');
        }

        if (credit1.trim() === '') {
            return alert('El campo creditos comerciales es obligatorio');
        }

        if (credit2.trim() === '') {
            return alert('El campo creditos financiero es obligatorio');
        }

        const url = `https://api.whatsapp.com/send?phone=59165069921&text=Nombre%3A%20${name}%0ACI%3A%20${ci}%0ACelular%3A%20${cellphone}%0ATipo%20de%20persona%3A%20${typePerson}%0AProducto%3A%20${product}%0AIngreso%20mensual%3A%20${mount1}%0AAlquiler%3A%20${mount2}%0ACreditos%20comerciales%3A%20${credit1}%0ACreditos%20financieros%3A%20${credit2}`
        router.replace(url)
    }

    return (
        <><Card className="text-primary border-[1px] border-primary rounded-3xl">
            <CardHeader>
                <CardTitle>INFORMACIÓN BÁSICA</CardTitle>
                <CardDescription>Proporciona tus datos personales para aplicar al crédito.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-4 w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="fullname">NOMBRE COMPLETO</Label>
                        <Input onChange={(e) => setName(e.target.value)} id="fullname" placeholder="Ingresa tu nombre completo" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="ci">CARNET DE IDENTIDAD</Label>
                        <Input onChange={(e) => setCi(e.target.value)} id="ci" placeholder="Ingresa tu CI" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="extension">EXTENSIÓN</Label>
                        <Select onValueChange={(value:any) => setExtension(value)}>
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
                        <Input onChange={(e) => setCellphone(e.target.value)} type="number" id="cellphone" placeholder="777 77 777" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="type_person">TIPO DE PERSONA</Label>
                        <Select onValueChange={(value:any) => setTypePerson(value)}>
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
                        <Input onChange={(e) => setProduct(e.target.value)} id="product" placeholder="Ingresa nombre del producto" />
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
                            <Input onChange={(e) => setMount1(e.target.value)} id="monthly_salary" type="number" placeholder="0000.00 Bs" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="rental">ALQUILER</Label>
                            <Input onChange={(e) => setMount2(e.target.value)} id="rental" type="number" placeholder="0000.00 Bs" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="commercial_credit">CRÉDITOS COMERCIALES</Label>
                            <Input onChange={(e) => setCredit1(e.target.value)} type="number" id="commercial_credit" placeholder="0000.00 Bs" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="financial_credit">CRÉDITOS FINANCIEROS</Label>
                            <Input onChange={(e) => setCredit2(e.target.value)} type="number" id="financial_credit" placeholder="0000.00 Bs" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={sendData}>Realizar solicitud</Button>
                </CardFooter>
            </Card></>
    )
}

export default FormCrediHaus