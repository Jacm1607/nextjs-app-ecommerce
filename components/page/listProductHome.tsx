import { URL_BASE } from "@/lib/endpoint"
import Img from "../ui/img";
import Link from "next/link";
import TitleSection from "../ui/titleSection";
import { Badge } from "../ui/badge";
const fetchProducts = () => {
    return fetch(`${URL_BASE}/api/productos?populate[imagen][fields][0]=url&paginate[page]=2&pagination[start]=0&pagination[limit]=9`, {
        cache: 'no-cache'
    })
        .then(res => res.json())
}

const dividirArrayEnGrupos = (array: [], tamanoGrupo = 3) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamanoGrupo) {
        grupos.push(array.slice(i, i + tamanoGrupo));
    }
    return grupos;
}


const ListProductsHome = async () => {
    const categories = await fetchProducts()
    const categoriesArray = dividirArrayEnGrupos(categories.data, 3)

    return (
        <>
            <TitleSection title={'Productos'} subtitle={'recien agregado'} />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="grid gap-4">
                        {
                            categoriesArray[0].map((category : any) => (
                                <Link href={`/producto/${category.id}`} key={category.id} className="w-full h-full rounded-2xl border-[1px] border-primary p-2">
                                    <Badge className="absolute text-base">Bs. {category.attributes.precio}</Badge>
                                    <div className="flex justify-center items-center p-10 border-[1px] border-gray-300 rounded-2xl">
                                        <Img className='h-auto max-w-full' url={category.attributes.imagen.data[0].attributes.url} width={'100%'} height={'100%'} objectFit={'cover'} />
                                    </div>
                                    <p className="mt-6 font-semibold text-sm text-center">{category.attributes.nombre} </p>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="grid gap-4">
                        {
                            categoriesArray[1].map((category : any) => (
                                <Link href={`/producto/${category.id}`} key={category.id} className="w-full h-full rounded-2xl border-[1px] border-primary p-2">
                                    <Badge className="absolute text-base">Bs. {category.attributes.precio}</Badge>
                                    <div className="flex justify-center items-center p-10 border-[1px] border-gray-300 rounded-2xl">
                                        <Img className='h-auto max-w-full' url={category.attributes.imagen.data[0].attributes.url} width={'100%'} height={'100%'} objectFit={'cover'} />
                                    </div>
                                    <p className="mt-6 font-semibold text-sm text-center">{category.attributes.nombre} </p>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="grid gap-4">
                        {
                            categoriesArray[2].map((category : any) => (
                                <Link href={`/producto/${category.id}`} key={category.id} className="w-full h-full rounded-2xl border-[1px] border-primary p-2">
                                    <Badge className="absolute text-base">Bs. {category.attributes.precio}</Badge>
                                    <div className="flex justify-center items-center p-10 border-[1px] border-gray-300 rounded-2xl">
                                        <Img className='h-auto max-w-full' url={category.attributes.imagen.data[0].attributes.url} width={'100%'} height={'100%'} objectFit={'cover'} />
                                    </div>
                                    <p className="mt-6 font-semibold text-sm text-center">{category.attributes.nombre} </p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListProductsHome