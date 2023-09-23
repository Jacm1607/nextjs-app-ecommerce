'use client'

import React, { useRef, useState } from "react";
import {
    TransformWrapper,
    TransformComponent,
    ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import Img from "../ui/img";

const Controls = ({ zoomIn, zoomOut, resetTransform }: any) => (
    <div className="flex justify-center space-x-3">
        <button className="rounded-full h-8 w-8 bg-primary text-white p-2 flex justify-center items-center font-extrabold" onClick={() => zoomIn()}>+</button>
        <button className="rounded-full h-8 w-8 bg-primary text-white p-2 flex justify-center items-center font-extrabold" onClick={() => zoomOut()}>-</button>
        <button className="rounded-full h-8 w-8 bg-primary text-white p-2 flex justify-center items-center font-extrabold" onClick={() => resetTransform()}>x</button>
    </div>
);
const ImageZoom = ({ imagePrimary, arrayImg }: any) => {
    const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
    const [ img, setImg ] = useState<string>(imagePrimary)
    const zoomToImage = () => {
        if (transformComponentRef.current) {
            const { zoomToElement } = transformComponentRef.current;
            zoomToElement("imgExample");
        }
    };
    return (

        <>
            <div className="flex justify-center items-center">
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={200}
                    initialPositionY={100}
                    ref={transformComponentRef}
                >
                    {(utils) => (
                        <div className="">
                            <Controls {...utils} />
                            <TransformComponent>
                                <Img url={img} width={'550px'} height={'550px'} objectFit={"contain"} />
                                <div className="absolute" onClick={zoomToImage}></div>
                            </TransformComponent>
                        </div>
                    )}
                </TransformWrapper>
            </div>
            <div className="mt-10 flex justify-center items-center space-x-4">
                {arrayImg.map((element: any) => <div onClick={() => setImg(element.attributes.url)} key={element.id} className="rounded-3xl border-2 border-solid border-primary w-[150px] h-[150px] flex justify-center items-center">
                    <Img url={element.attributes.url} width={"100px"} height={"100px"} objectFit={"contain"} />
                </div>)
                }
            </div>
        </>
    )
}

export default ImageZoom