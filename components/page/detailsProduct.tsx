import { URL_BASE } from "@/lib/endpoint"
import { parse } from "@/lib/snarkdown"
import Img from "../ui/img";
import StockProduct from "./stockProduct";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const fetchProduct = (slug: any) => {
    return fetch(`${URL_BASE}/api/productos?filters[slug][$eq]=${slug}&populate=*`)
        .then(res => res.json())
}


const DetailsProduct = async ({ slug }: any) => {
    const _product = await fetchProduct(slug);

    return (
        <div className="grid grid-cols-6 gap-6 px-24 py-8">
            <div className="col-span-4">
                <Card>
                    <CardHeader>
                        <CardTitle>{_product.data[0].attributes.nombre}</CardTitle>
                        <CardDescription>{_product.data[0].attributes.modelo.data !== null ? _product.data[0].attributes.modelo.data.attributes.nombre : 'SIN MODELO'}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="lg:col-span-2 col-span-3 flex justify-center items-center">
                            <Img url={_product.data[0].attributes.imagen.data[0].attributes.url} width={'350px'} height={'350px'} objectFit={"contain"} />
                        </div>
                        <div className="lg:col-span-1 col-span-3 lg:block space-y-2 mt-10 flex flex-wrap justify-center gap-4">
                            {_product.data[0].attributes.imagen.data.map((element: any) => <div key={element.id} className="rounded-3xl border-2 border-solid border-sky-900 w-[150px] h-[150px] flex justify-center items-center">
                                <Img url={element.attributes.url} width={"100px"} height={"100px"} objectFit={"contain"} />
                            </div>)
                            }
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2">
                <Card>
                    <CardContent className="p-8">
                        {
                            _product.data[0].attributes.precio_oferta > 0
                                ?
                                <><p className="text-xl text-gray-600 line-through decoration-red-600"><span>{_product.data[0].attributes.precio}</span> <span>BS.</span></p><p className="text-5xl text-sky-800 font-extrabold uppercase"><span>{_product.data[0].attributes.precio_oferta}</span> Bs.</p></>
                                : <p className="text-5xl text-sky-800 font-extrabold uppercase"><span>{_product.data[0].attributes.precio}</span> Bs.</p>
                        }

                        <p className="my-2"><span className="text-sky-800 font-medium">ENVIÓ A DOMICILIO </span><span className="text-sky-800 font-extrabold">DISPONIBLE.</span></p>
                        <p className="border-2 border-solid border-sky-900"></p>
                        <p>{_product.data[0].attributes.descripcion_corta}</p>
                        <div className="flex space-x-2 mt-4">
                            <StockProduct product={{
                                id: _product.data[0].id,
                                nombre: _product.data[0].attributes.nombre,
                                imagen: _product.data[0].attributes.imagen.data[0].attributes.url,
                                modelo: _product.data[0].attributes.modelo.data !== null ? _product.data[0].attributes.modelo.data.attributes.nombre : 'SIN MODELO',
                                precio: _product.data[0].attributes.precio,
                                precio_oferta: _product.data[0].attributes.precio_oferta,
                                cantidad: '1',
                                sku: _product.data[0].attributes.sku
                            }} />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Caracteristicas</CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <div className="" dangerouslySetInnerHTML={{ __html: parse(_product.data[0].attributes.caracteristica) }}></div>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Especificaciones</CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <div className="" dangerouslySetInnerHTML={{ __html: parse(_product.data[0].attributes.especificacion) }}></div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default DetailsProduct;