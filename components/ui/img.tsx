import { URL_BASE } from "@/lib/endpoint"
import Image from "next/image"

interface IImg {
    url: string,
    alt?: string,
    qwidth?: number,
    qheight?: number,
    width: string,
    height: string,
    className?: string,
    baseUrl?: true|false,
    objectFit: 'cover'|'contain'
}
const Img = ({url, alt = 'Hauscenter', qwidth= 1280, qheight= 720, width = '100%', height= '650px', objectFit = 'cover', className= "", baseUrl=true}: IImg) => {
    return  <Image className={className} src={baseUrl ? `${URL_BASE}${url}` : url} alt={alt} width={qwidth} height={qheight} style={{ width, height, objectFit}} />
}

export default Img