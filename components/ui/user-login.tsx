'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu';
import Link from 'next/link';
import { useTokenStore } from '@/lib/globalStore';


const LogIn = () => {
    const token = useTokenStore((state:any) => state.token)
    const updateToken = useTokenStore((state:any) => state.setToken)
    const logOut = () => {
        updateToken(null)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Mi Cuenta</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />    
                {
                    token ? <><DropdownMenuItem><Link href={'/mi-cuenta'}>Mi perfil</Link></DropdownMenuItem><DropdownMenuItem onClick={logOut} >Cerrar sesión</DropdownMenuItem></> : <DropdownMenuItem><Link href={'/mi-cuenta'}>Iniciar sesión</Link></DropdownMenuItem>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LogIn;