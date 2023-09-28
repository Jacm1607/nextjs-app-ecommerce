import ListSubcategory from "@/components/page/listSubcategory"

export default function Category({ params }: any) {
    const { slug, id } = params
    return (
        <>
             <ListSubcategory slug={slug} idSubcategory={id} />
        </>
    )
}