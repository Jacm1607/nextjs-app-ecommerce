import ResultSearchs from "@/components/page/resultsSearchs"

export default function SearchHome({searchParams}:any) {
   const { query } = searchParams
    return (
      <div className="my-20 mx-60">
         <p className="text-3xl text-sky-800 font-semibold">Producto encontrados con la palabra: <span className="font-extrabold text-black">&quot;{query}&quot;</span></p>
         <ResultSearchs query={query} />
      </div>
    )
}