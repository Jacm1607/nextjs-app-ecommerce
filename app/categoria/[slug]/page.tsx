import ListSubcategory from "@/components/page/listSubcategory"

export default function Category({ params }: any) {
    const { slug } = params
    return (
        <>
             <ListSubcategory slug={slug} />
        </>
    )
}