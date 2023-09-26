import ListSubcategory from "@/components/page/listSubcategory"

export default function Category({ params }: any) {
    const { slug, id } = params
    console.log(slug, id);
    
    return (
        <>
             <ListSubcategory slug={slug} idSubcategory={id} />
        </>
    )
}