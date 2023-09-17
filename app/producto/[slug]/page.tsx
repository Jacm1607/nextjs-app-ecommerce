import DetailsProduct from "@/components/page/detailsProduct";
import { Toaster } from "@/components/ui/toaster";

export default function ProductHome({ params }: any) {
    const { slug } = params
    return (
        <>
            <DetailsProduct slug={slug} />
            <Toaster />
        </>
    )
}