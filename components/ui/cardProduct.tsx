import Link from "next/link";
import Img from "./img";
import { lenghtText } from "@/lib/string";
import { validateOffer } from "@/lib/helpers";

const CardProduct = ({ product }: any) => {
    return <Link href={`/producto/${product.attributes.slug}`} className="relative flex flex-col content-between border-2 border-primary rounded-[50px] h-[342px] w-[290px]">
        {
            validateOffer(product.attributes.precio, product.attributes.precio_oferta, product.attributes.inicio_oferta, product.attributes.limite_oferta) ? <div className="absolute"><Img className=" rounded-tl-[49px]" baseUrl={false} url={'/oferta.png'} width={"80%"} height={"80%"} objectFit={"cover"} /></div> : <></>
        }
        <div className="flex justify-center items-center p-6">
            <Img url={product.attributes.imagen.data[0].attributes.url} width={"160px"} height={"160px"} objectFit={"contain"} />
        </div>
        <div className="mt-auto mb-6">
            <p className="text-primary font-light text-center">{lenghtText(product.attributes.nombre, 60)}</p>
            {
                validateOffer(product.attributes.precio, product.attributes.precio_oferta, product.attributes.inicio_oferta, product.attributes.limite_oferta)
                    ?
                    <>
                        <p className="text-primary text-center line-through decoration-red-500 decoration-2">Bs {product.attributes.precio}</p>
                        <p className="font-extrabold text-primary text-center">Bs {product.attributes.precio_oferta}</p>
                    </>
                    :
                    <p className="font-extrabold text-primary text-center">Bs {product.attributes.precio}</p>
            }
        </div>
    </Link>
}

export default CardProduct;