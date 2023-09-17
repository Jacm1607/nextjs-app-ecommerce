import Image from 'next/image'
import { Button } from './button';
import { Input } from './input';
import Link from 'next/link';
import { ItemsNavbar } from './itemsNavbar';

const Navbar = () => {
    return (
        <form action="" className="w-full h-full flex items-center" method="get" autoComplete='off' >
            <div className="h-[70px] bg-primary w-full sticky top-0 grid grid-cols-6 gap-5 z-10">
                <div className="col-span-1 flex items-center ml-2">
                    <Link href={'/'}><Image src={'/logo-blanco-horizontal.png'} alt='Hauscenter' width={240} height={130} style={{ width: '70%', height: '70%' }}></Image></Link>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                    <ItemsNavbar />
                </div>
                <div className="col-span-2 flex w-full items-center">
                    <Input name='query' className=' rounded-r-none' type="text" placeholder="Buscar producto..." />
                    <Button className='rounded-l-none' variant={'secondary'} type="submit">Buscar</Button>
                </div>
                <div className="col-span-2 flex justify-end items-center text-white space-x-2">
                    {/* <Link href={'/carrito-compra'} className='px-4 py-2'>Carrito</Link> */}
                    {/* <Link href={'/'} className='px-4 py-2 bg-black'>Favorito</Link> */}
                    {/* <Link href={'/'} className='px-4 py-2 bg-black'>Mi Cuenta</Link> */}
                </div>
            </div>
        </form>
    )
}

export default Navbar;