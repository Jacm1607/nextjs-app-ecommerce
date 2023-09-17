'use client'
import { useEffect, useState } from "react";

import { getProductStore, removeProductAllStore } from "@/lib/store";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Img from "@/components/ui/img";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Banknote, Car, CreditCard, QrCode, Zap } from "lucide-react";


const FormShop = () => {
  const router = useRouter();
  const [products, setProducts] = useState<any>([]);
  const [fullname, setFullName] = useState<string>("");
  const [ci, setCi] = useState<string>("");
  const [nit, setNit] = useState<string>("");
  const [razon_social, setRazonSocial] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [methodPay, setMethodPay] = useState<string>("3");
  const [methodDelivery, setMethodDelivery] = useState<string>("1");
  const [extension, setExtension] = useState<string>("");

  const regex = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ \s]{1,80}$/,
    ci: /^[1-9]\d{3,15}$/,
    cellphone: /^(?:\+591)?[67]\d{7}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  };

  const sendForm = async () => {
    if (!regex.name.test(fullname)) {
      return alert("Ingrese un formato correcto para el nombre");
    }
    if (!regex.ci.test(ci)) {
      return alert("Ingrese un formato correcto para el CI");
    }
    if (!regex.cellphone.test(cellphone)) {
      return alert("Ingrese un formato correcto para el celular");
    }
    if (!regex.email.test(email)) {
      return alert("Ingrese un formato correcto para el email");
    }

    const requestPay = {
      data: {
        nombre_completo: fullname.toUpperCase(),
        ci: ci,
        email: email.toLowerCase(),
        nit: nit.length > 0 ? nit : ci,
        razon_social:
          razon_social.length > 0
            ? razon_social.toUpperCase()
            : fullname.toUpperCase(),
        direccion: address,
        celular: cellphone,
        costo_envio: 0,
        subtotal: 1000,
        estado_orden: [1],
        users_permissions_user: [4],
        metodo_pago: [parseInt(methodPay)],
        metodo_envio: [parseInt(methodDelivery)],
      },
    };

    const response = await fetch(
      "https://www.dashboard.hauscenter.com.bo/api/ordens",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPay),
      }
    );

    if (response.ok) {
      /* try {
        removeProductAllStore();
        const responseEmail = await fetch(
          "https://www.email.hauscenter.com.bo/api/send-email"
        );
        if (responseEmail.status == 200) { */
          router.push("/compra-realizada");
       /*  }
      } catch (error) {
        alert("Ocurrió un error inesperado! Vuelve a intentarlo en un momento.");
      } */
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const products = getProductStore();
      setProducts(products)
      if (products.length < 1) {
        router.replace("/");
      }
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Datos personales</CardTitle>
            <CardDescription>
              Ingresa tus datos personales para completar la orden de compra
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-6">
            <div className="col-span-2">
              <Label htmlFor="fullname">Nombre completo</Label>
              <Input
                onChange={(event:any) => setFullName(event.target.value)}
                className="border-gray-800 border-opacity-40"
                id="fullname"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="ci">CI</Label>
              <Input
                onChange={(event:any) => setCi(event.target.value)}
                className="border-gray-800 border-opacity-40"
                id="ci"
                placeholder="Ingresa tu CI"
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="extension">Extensión</Label>
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
            <div className="col-span-1">
              <Label htmlFor="cellphone">Celular</Label>
              <Input
                onChange={(event:any) => setCellphone(event.target.value)}
                className="border-gray-800 border-opacity-40"
                id="cellphone"
                placeholder="+591 789 12 242"
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                onChange={(event:any) => setEmail(event.target.value)}
                className="border-gray-800 border-opacity-40"
                id="email"
                placeholder="usuario@gmail.com"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="address">Dirección</Label>
              <Input
                onChange={(event:any) => setAddress(event.target.value)}
                className="border-gray-800 border-opacity-40"
                id="address"
                placeholder="Ingresa Dirección de tu domicilio"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Datos para la factura</CardTitle>
            <CardDescription>
              Ingresa tus datos financieros para la factura de compra
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-6">
            <div className="col-span-1">
              <Label htmlFor="razonSocial">Razón social</Label>
              <Input
                onChange={(event:any) => setRazonSocial(event.target.value)}
                className="border-gray-800 border-opacity-40"
                id="razonSocial"
                placeholder="Ingresa tu razón social"
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="nit">NIT</Label>
              <Input
                onChange={(event:any) => setNit(event.target.value)}
                className="border-gray-800 border-opacity-40"
                id="nit"
                placeholder="Ingresa tu NIT"
              />
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Método de Pago</CardTitle>
                <CardDescription>
                  Seleccione un método para realizar el pago de su compra.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <RadioGroup defaultValue={methodPay} className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem onClick={() => setMethodPay('1')} value="1" id="card" className="peer sr-only" />
                    <Label
                      htmlFor="card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <CreditCard size={20} color="#0d0d0d" strokeWidth={2.25} />
                      <span className="text-base font-bold text-gray-900">Tarjeta</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      onClick={() => setMethodPay('3')}
                      value="3"
                      id="transfer"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="transfer"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Banknote size={20} color="#0d0d0d" strokeWidth={2.25} />
                      <span className="text-base font-bold text-gray-900">Transferencia</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      onClick={() => setMethodPay('2')}
                      value="2"
                      id="qr"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="qr"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <QrCode size={20} color="#0d0d0d" strokeWidth={2.25} />
                      <span className="text-base font-bold text-gray-900">QR</span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Método de Envío</CardTitle>
                <CardDescription>
                  Seleccione un método para establecer el envío de su producto.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <RadioGroup defaultValue={methodDelivery} className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem onClick={() => setMethodDelivery('1')} value="1" id="standard" className="peer sr-only" />
                    <Label
                      htmlFor="standard"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Car size={20} color="#0d0d0d" strokeWidth={2.25} />
                      <span className="text-base font-bold text-gray-900">Normal</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      onClick={() => setMethodDelivery('2')}
                      value="2"
                      id="premium"
                      className="peer sr-only "
                    />
                    <Label
                      htmlFor="premium"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Zap size={20} color="#0d0d0d" strokeWidth={2.25} />
                      <span className="text-base font-bold text-gray-900">Express</span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-span-1 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Resumen</CardTitle>
            <CardDescription>Listado de productos</CardDescription>
          </CardHeader>
          <div className="my-4">
            {products.map((product: any) => (
              <div key={product.id} className="grid grid-cols-4">
                <div className="col-span-1 flex justify-center items-center">
                  <Img
                    url={product.imagen}
                    width={"80px"}
                    height={"80px"}
                    objectFit={"cover"}
                  />
                </div>
                <div className="col-span-2">
                  <p className=" font-bold text-primary text-lg">{product.nombre}.</p>
                  <p className=" text-sm">{product.modelo}.</p>
                  <p className="text-sm text-gray-500">X{product.cantidad}</p>
                </div>
                <div className="col-span-1 flex justify-end items-center pr-8">
                  <span className="text-primary font-extrabold">
                    {product.precio} Bs
                  </span>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-4 px-8 mt-4">
              <div className="col-span-3">
                <p className=" font-bold text-primary text-lg">Costo de envío</p>
              </div>
              <div className="col-span-1 flex justify-end items-center">
                <span className="text-primary font-extrabold">Gratis</span>
              </div>
            </div>
            <div className="grid grid-cols-4 px-8 mt-4">
              <div className="col-span-3">
                <p className=" font-bold text-primary text-lg">Total</p>
              </div>
              <div className="col-span-1 flex justify-end items-center">
                <span className="text-primary font-extrabold">0.00 Bs</span>
              </div>
            </div>
          </div>
          <CardFooter>
            <Button onClick={sendForm} className="w-full">
              Completar compra
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FormShop;
