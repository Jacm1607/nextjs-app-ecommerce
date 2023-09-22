import { URL_BASE } from "@/lib/endpoint";
import Img from "../ui/img";
import TitleSection from "../ui/titleSection";
import TitleBorder from "../ui/titleBorder";


export interface IPaginaPrincipal {
    data: IPaginaPrincipalData;
    meta: Meta;
}

export interface IPaginaPrincipalData {
    id: number;
    attributes: IAttributes;
}

export interface IAttributes {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    imgBanner: IImg;
    imgNovedad1: IImg;
    imgNovedad2: IImg;
    imgNovedad3: IImg;
}

export interface IImg {
    data: IImgBannerData;
}

export interface IImgBannerData {
    id: number;
    attributes: IAttributesImg;
}

export interface IAttributesImg {
    url: string;
}

export interface Meta {
}


const fetchImgPaginaPrincipal = () => {
    return fetch(`${URL_BASE}/api/pagina-principal?populate[imgBanner][fields]=url&populate[imgNovedad1][fields]=url&populate[imgNovedad2][fields]=url&populate[imgNovedad3][fields]=url`, {
        cache: 'no-store'
    })
        .then(res => res.json())
}

const AdsHome = async () => {
    const images: IPaginaPrincipal = await fetchImgPaginaPrincipal()
    return (
        <div className="my-10">
            <TitleBorder title="Novedades Haus" />
            <div className="flex justify-center">
                <div className="grid grid-rows-4 grid-cols-5 gap-4 w-10/12">
                    <div className="md:row-span-4 row-span-2 md:col-span-3 col-span-5">
                        <Img url={images.data.attributes.imgNovedad1.data.attributes.url} width={"100%"} height={"100%"} objectFit={"cover"} />
                    </div>

                    <div className="md:row-span-2 row-span-2 md:col-span-2 col-span-5 bg-sky-500">
                        <Img url={images.data.attributes.imgNovedad2.data.attributes.url} width={"100%"} height={"100%"} objectFit={"cover"} />
                    </div>

                    <div className="md:row-span-2 row-span-2 md:col-span-2 col-span-5 bg-sky-300">
                        <Img url={images.data.attributes.imgNovedad3.data.attributes.url} width={"100%"} height={"100%"} objectFit={"cover"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdsHome;