import Image from 'next/image'
import { Button } from './button';
import { Input } from './input';
import Link from 'next/link';
import { ItemsNavbar } from './itemsNavbar';
import { ShoppingCart } from 'lucide-react';

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
                    {/* <div className=""> */}
                    <Input name='query' className=' rounded-r-none' type="text" placeholder="Buscar producto..." />
                    <Button className='rounded-l-none' variant={'secondary'} type="submit">Buscar</Button>
                    {/* </div> */}
                </form>
                <div className="col-span-2 flex justify-end items-center text-white space-x-2">
                    <Link href={'/carrito-compra'} className='px-4 py-2 text-center w-[120px] flex items-center'> <ShoppingCart size={20} color="#fff" /> <span className='ml-2'>Carrito</span></Link>
                    {/* <Link href={'/'} className='px-4 py-2 bg-black'>Favorito</Link> */}
                    {/* <Link href={'/'} className='px-4 py-2 bg-black'>Mi Cuenta</Link> */}
                </div>

            </div>
            <div className="w-full">
                <div className='w-full flex justify-center bg-white'>
                    <p className='text-primary font-bold text-4xl my-4'>CRÉDITOS APROBADOS EN 24 HORAS</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center py-4 bg-gray-300 text-2xl font-bold text-primary">
                    <div className="col-span-1"><Link href={'/credi-haus'}>CREDI HAUS</Link></div>
                    <div className="col-span-1 border-l-2 border-r-2 border-primary"><Link href={'/'}>SEGUIMIENTO DE PEDIDO</Link></div>
                    <div className="col-span-1"><Link href={'/sucursales'}>SUCURSALES</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;