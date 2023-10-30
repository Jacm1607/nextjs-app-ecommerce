import { Badge } from "@/components/ui/badge";
import Img from "@/components/ui/img";
import { URL_BASE } from "@/lib/endpoint"
import { validateOffer } from "@/lib/helpers";
import Link from "next/link";

const fetchFavorite = () => fetch(`https://www.dashboard.hauscenter.com.bo/api/users/26?populate[productos][populate][0]=imagen`, {
    cache: 'no-store'
}).then((result) => result.json());

export default async function Favorito() {
    const user = await fetchFavorite();
    return (
        <div className="w-full min-h-min grid grid-cols-2 gap-4 px-[80px] py-[30px]">
            {
                user.productos.length > 0 ?
                    user.productos.map((product:any) => <div className="col-span-1" key={product.id}>
                        <Link  href={`/producto/${product.slug}`}>
                        <div className=" cursor-pointer flex border-2 border-sky-800 border-opacity-40 rounded-3xl">
                            <div className="img p-4">
                                <Img url={product.imagen[0].url} width={"140px"} height={"140px"} objectFit={"contain"} />
                            </div>
                            <div className="content py-4 pr-4">
                                <p className=" font-extrabold text-lg text-primary">{product.nombre}</p>
                                <p className=" text-sm text-gray-700">{product.descripcion_corta}</p>
                            </div>
                            {
                                validateOffer(product.precio, product.precio_oferta, product.inicio_oferta, product.limite_oferta) ? <Badge className="absolute m-3 bg-red-500">OFERTA Bs. {product.precio_oferta}</Badge> : <Badge className="absolute m-3">Bs. {product.precio}</Badge>
                            }
                        </div>
                    </Link>
                    </div>)
                    : <>No tienes agregado productos favoritos.</>
            }
        </div>
    )
}
