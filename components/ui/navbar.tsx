import Image from 'next/image'
import { Button } from './button';
import { Input } from './input';
import Link from 'next/link';
import { ItemsNavbar } from './itemsNavbar';
import { ShoppingCart } from 'lucide-react';
import LogIn from './user-login';
import { Separator } from './separator';
import FavoriteNavbar from './favorite';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-10'>
            <div className="h-[70px] bg-primary w-full grid grid-cols-6 gap-5">
                <div className="col-span-1 flex items-center ml-2">
                    <Link href={'/'}><Image src={'/logo-blanco-horizontal.png'} alt='Hauscenter' width={240} height={130} style={{ width: '70%', height: '70%' }}></Image></Link>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                    <ItemsNavbar />
                </div>
                <form action="/buscador" className="col-span-2 flex w-full items-center" method="get" autoComplete='off' >
                    <Input name='query' className=' rounded-r-none' type="text" placeholder="Buscar producto..." />
                    <Button className='rounded-l-none' variant={'secondary'} type="submit">Buscar</Button>
                </form>
                <div className="col-span-2 flex justify-end items-center text-white space-x-6 px-4">
                    <Link href={'/carrito-compra'} className='text-center'> <ShoppingCart size={38} color="#fff" /></Link>
                    <Separator orientation="vertical" className='h-1/2' />
                    <FavoriteNavbar />
                    <LogIn />
                </div>

            </div>
            <div className="w-full">
                <div className='w-full flex justify-center bg-white'>
                    <p className='text-primary font-bold text-4xl my-4'>CRÉDITOS APROBADOS EN 24 HORAS</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center py-4 bg-gray-300 text-2xl font-bold text-primary divide-x-2 divide-primary">
                    <Link href={'/credi-haus'} className="col-span-1">CREDI HAUS</Link>
                    <Link href={'/seguimiento-pedido'} className="col-span-1">SEGUIMIENTO DE PEDIDO</Link>
                    <Link href={'/sucursales'} className="col-span-1">SUCURSALES</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;