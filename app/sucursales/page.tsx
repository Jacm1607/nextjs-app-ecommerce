import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import TitleBorder from "@/components/ui/titleBorder";
import { MapPin } from "lucide-react";
import { AlertGoogleMapsApi } from "./alert-dialog-map-google";
import Link from "next/link";

interface IBranches {
    name: string
}

export default function Address() {
    const branches = [
        {
            name: 'Hauscenter Central',
            address: 'Av. Cañoto, entre Calle Florida y Alameda Junín.',
            openingHours: `Lunes: 09:00 a 10:00 Hrs. <br>
            Martes: 09:00 a 10:00 Hrs. <br>
            Miércoles: 09:00 a 10:00 Hrs.<br>
            Jueves: 09:00 a 10:00 Hrs.<br>
            Viernes: 09:00 a 10:00 Hrs.<br>
            Sábado: 09:00 a 10:00 Hrs.`,
            googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d706.4255352295012!2d-63.18883695114736!3d-17.782678855040324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9e1300e0381%3A0x2cd3045ec4761dc1!2sHauscenter%20-%20Central!5e0!3m2!1ses-419!2sbo!4v1695069538644!5m2!1ses-419!2sbo',
            url: 'https://maps.app.goo.gl/SVvBjWbFG6B4vsNL8'
        },
        {
            name: 'Hauscenter Isabel',
            address: 'Calle Isabel La Católica esquina Parabano, a 1 1/2 cuadra de la Av. Cañoto.',
            openingHours: `Lunes: 09:00 a 10:00 Hrs. <br>
            Martes: 09:00 a 10:00 Hrs. <br>
            Miércoles: 09:00 a 10:00 Hrs.<br>
            Jueves: 09:00 a 10:00 Hrs.<br>
            Viernes: 09:00 a 10:00 Hrs.<br>
            Sábado: 09:00 a 10:00 Hrs.`,
            googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949.7600068700696!2d-63.189455430443516!3d-17.789815821969544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9e5e2d1fceb%3A0xd724b23400d11400!2sHauscenter%20Sucursal%20Isabel%20La%20Catolica!5e0!3m2!1ses-419!2sbo!4v1695070241874!5m2!1ses-419!2sbo',
            url: 'https://maps.app.goo.gl/B6vWzyDMNiuZcG5e9'
        },
        {
            name: 'Hauscenter MegaCenter',
            address: 'Mall Megacenter (Cine Center) local N° MZE-16.',
            openingHours: `Lunes: 09:00 a 10:00 Hrs. <br>
            Martes: 09:00 a 10:00 Hrs. <br>
            Miércoles: 09:00 a 10:00 Hrs.<br>
            Jueves: 09:00 a 10:00 Hrs.<br>
            Viernes: 09:00 a 10:00 Hrs.<br>
            Sábado: 09:00 a 10:00 Hrs.`,
            googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.4134171212957!2d-63.18004529825296!3d-17.797922245606888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e93850f33005%3A0x7fc2f3e1b133b270!2sHausCenter%20Sucursal%20Megacenter!5e0!3m2!1ses-419!2sbo!4v1695070284690!5m2!1ses-419!2sbo',
            url: 'https://maps.app.goo.gl/vdtgmmMjFRbCBu9S7'
        },
        {
            name: 'Hauscenter Las Brisas',
            address: 'Mall Las Brisas, local N° 214.',
            openingHours: `Lunes: 09:00 a 10:00 Hrs. <br>
            Martes: 09:00 a 10:00 Hrs. <br>
            Miércoles: 09:00 a 10:00 Hrs.<br>
            Jueves: 09:00 a 10:00 Hrs.<br>
            Viernes: 09:00 a 10:00 Hrs.<br>
            Sábado: 09:00 a 10:00 Hrs.`,
            googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9035032428174!2d-63.1786773251347!3d-17.749185374119676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e78375edad05%3A0x5652d86d1e654a32!2sHauscenter%20Sucursal%20Las%20Brisas!5e0!3m2!1ses-419!2sbo!4v1695069950932!5m2!1ses-419!2sbo',
            url: 'https://maps.app.goo.gl/SYjnuTupCY8hL7KEA'
        },
        {
            name: 'Hauscenter Ventura Mall',
            address: '4to anillo antes de llegar al Mall Ventura.',
            openingHours: `Lunes: 09:00 a 10:00 Hrs. <br>
            Martes: 09:00 a 10:00 Hrs. <br>
            Miércoles: 09:00 a 10:00 Hrs.<br>
            Jueves: 09:00 a 10:00 Hrs.<br>
            Viernes: 09:00 a 10:00 Hrs.<br>
            Sábado: 09:00 a 10:00 Hrs.`,
            googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.7956330429906!2d-63.20059152513455!3d-17.75426607426057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e79d86dd4f5b%3A0xd4e01c0aeba5f942!2sHauscenter%20Sucursal%20Mall%20Ventura!5e0!3m2!1ses-419!2sbo!4v1695070094276!5m2!1ses-419!2sbo',
            url: 'https://maps.app.goo.gl/oRp85raGcUTjDk129'
        }
    ]
    return (
        <div className="container my-10">
            <TitleBorder title="SUCURSALES" />
            <div className="grid grid-cols-3 gap-6">
                {
                    branches.map((branch: any) => (
                        <div key={branch.name} className="col-spa-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{branch.name}</CardTitle>
                                    <CardDescription>{branch.address}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p dangerouslySetInnerHTML={{ __html: branch.openingHours }}></p>
                                </CardContent>
                                <CardFooter className="flex justify-between space-x-2">
                                    <AlertGoogleMapsApi urlApi={branch.googleMaps} title={branch.name} />
                                    <Link href={branch.url} target="_blank">
                                        <Button variant={'destructive'}>
                                            <div className="flex items-center space-x-1">
                                                <MapPin color="#ffffff" /> <span>Ir a Google Maps</span>
                                            </div>
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}