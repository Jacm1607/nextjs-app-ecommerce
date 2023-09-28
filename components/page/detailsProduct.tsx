import { URL_BASE } from "@/lib/endpoint"
import { parse } from "@/lib/snarkdown"
import StockProduct from "./stockProduct";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import ImageZoom from "./imgHoverProduct";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Separator } from "../ui/separator";


const fetchProduct = (slug: any) => {
    return fetch(`${URL_BASE}/api/productos?filters[slug][$eq]=${slug}&populate=*`, {
        cache: 'no-store'
    })
    .then(res => res.json())
}


const DetailsProduct = async ({ slug }: any) => {
    const _product = await fetchProduct(slug);
    return (
        <div id="detailsProduct" className="grid grid-cols-6 gap-6 px-24 py-8">
            <div className="col-span-4">
                <Card className="text-primary">
                    <CardHeader>
                        <CardTitle>{_product.data[0].attributes.nombre}</CardTitle>
                        <CardDescription>{_product.data[0].attributes.modelo.data !== null ? _product.data[0].attributes.modelo.data.attributes.nombre : 'SIN MODELO'}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ImageZoom arrayImg={_product.data[0].attributes.imagen.data} imagePrimary={_product.data[0].attributes.imagen.data[0].attributes.url} />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2">
                <Card className="text-primary border-[4px] border-primary rounded-[60px]">
                    <CardContent className="p-8">
                        <p className=" font-semibold"><span className=" font-extrabold">VARIACIONES</span> DEL PRODUCTO</p>
                        <p className=" font-semibold">Sin variaciones</p>
                        <p className="text-[46px] h-[44px] font-extrabold">Precio al Contado</p>
                        
                        {
                            _product.data[0].attributes.precio_oferta < 0
                                ?
                                <><p className="text-xl text-gray-600 line-through decoration-red-600"><span>{_product.data[0].attributes.precio}</span> <span>BS.</span></p><p className="text-5xl text-primary font-extrabold uppercase"><span>{_product.data[0].attributes.precio_oferta}</span> Bs.</p></>
                                : <p className="text-[46px] font-extrabold"><span className="text-[25px]">BS.</span>{_product.data[0].attributes.precio}</p>
                                
                        }

                        <div className="flex flex-col w-2/3 border-[1px] border-primary rounded-[45px] p-4">
                            <p className="text-[26px] h-[24px] font-extrabold"><span>11 Cuotas</span></p>
                            <p  className="text-[36px] h-[34px] font-extrabold"><span className="text-[25px]">BS.</span>00000.00</p>
                            <p className="text-center mt-3"><span className=" underline font-extrabold">Solicita tu Crédito</span></p>
                        </div>

                        <p className="my-2 tracking-[2px] text-center text-xl"><span className="text-primary font-bold">ENVIÓ A DOMICILIO </span><span className="text-primary font-extrabold">DISPONIBLE.</span></p>
                        <p className="border-2 border-solid border-primary"></p>
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
            <div className="col-span-3 text-primary uppercase my-6 py-4">
                <span className=" text-4xl font-extrabold py-2">Caracteristicas</span>
                <Separator className="bg-primary" />
                <div className="my-4"> <Markdown remarkPlugins={[remarkGfm]}>{_product.data[0].attributes.caracteristica}</Markdown></div>
            </div>
            <div className="col-span-3 text-primary uppercase my-6 py-4">
                <span className=" text-4xl font-extrabold py-2">INFORMACIÓN ADICIONAL</span>
                <Separator className="bg-primary" />
                <div className="my-4"  dangerouslySetInnerHTML={{ __html: parse(_product.data[0].attributes.especificacion) }}></div>
            </div>
        </div>
    )
}

export default DetailsProduct;