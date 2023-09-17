import BranHome from '@/components/page/brandHome'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import CategoryHome from '@/components/ui/categoryHome'
import Img from '@/components/ui/img'
import TitleBorder from '@/components/ui/titleBorder'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="relative w-full h-[430px] bg-gradient-to-t from-[#0F2027] via-[#203A43] to-[#2C5364] rounded-2xl">
        <div className="absolute p-8 flex flex-col h-full">
          <div className="">
            <Badge className='text-xl'>-30% de Descuento</Badge>
            <p className=' text-[40px] text-white font-semibold h-[40px]'>Audifonos</p>
            <p className='text-[68px] text-white font-extrabold'>Oferta Exclusiva</p>
            <p className='text-white'>¡Escucha la música como nunca antes! Obtén un 20% de descuento en audífonos de alta calidad. ¡Sumérgete en un sonido cristalino y envolvente hoy mismo!</p>
          </div>
          <div className="mt-auto">
            <Button variant={'secondary'}>Acceder a oferta</Button>
          </div>
        </div>
        <div className="absolute flex justify-end w-full h-full">
          <Img baseUrl={false} url={'/products/1LGAUP4TB0000009.jpg'} width={'auto'} height={'100%'} objectFit={'contain'} />
        </div>
      </div>
      <TitleBorder title={'Categorias'} />
      <CategoryHome />
      <BranHome />
    </main>
  )
}
