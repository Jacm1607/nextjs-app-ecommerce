'use client'
import { URL_BASE } from "@/lib/endpoint"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"
import { ScrollArea } from "./scroll-area"
import { Menu } from "lucide-react"

const Subcategoria = ({ subcategoria }: any) => {
  return <Link href={`/categoria/${subcategoria.categoriaSlug}/${subcategoria.id}`} className="my-3 flex flex-col odd:bg-white even:bg-gray-200 rounded-2xl p-3"><div className="text-primary font-bold text-base uppercase">{subcategoria.nombre}</div></Link>;
};

export function ItemsNavbar() {
  const [categories, setCategories] = useState<any>()
  const [idCategories, setIdCategories] = useState<any>()
  const [subcategories, setSubcategories] = useState<any>()

  const [showSubcategorias, setShowSubcategorias] = useState(false);


  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetch(`${URL_BASE}/api/categorias?populate[subcategorias][fields][0]=id&populate[subcategorias][fields][1]=nombre`, {
        cache: 'no-store'
      })
      const responseCategories = await categories.json()
      const _categories: any = [];
      const _subcategories: any = [];

      responseCategories.data.map((categoria: any) => {
        _categories.push({
          id: categoria.id,
          nombre: categoria.attributes.nombre,
          slug: categoria.attributes.slug
        });

        categoria.attributes.subcategorias.data.map((subcategoria: any) => {
          _subcategories.push({
            id: subcategoria.id,
            nombre: subcategoria.attributes.nombre,
            categoriaId: categoria.id,
            categoriaSlug: categoria.attributes.slug
          });
        });
      });

      setCategories(_categories)
      setSubcategories(_subcategories)
    }

    getCategories()
  }, [])

  const hoverEnter = (id:any) => {
    setShowSubcategorias(true)
    setIdCategories(id)
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primaty text-white hover:text-primary"><Menu strokeWidth={2.5} />Menú</NavigationMenuTrigger>
          <NavigationMenuContent className=" columns-2 h-auto">
            <ScrollArea className="h-[390px] w-[350px] rounded-md border p-4">
              <div className=" text-primary font-extrabold text-xl">CATEGORIAS</div>
              {
                categories?.map((category: any) => (
                  <div key={category.id} onMouseEnter={() => hoverEnter(category.id)}
                  className="my-3 flex flex-col odd:bg-white even:bg-gray-200 rounded-2xl p-3">
                    <div className="text-primary font-bold text-base uppercase">{category.nombre}</div>
                  </div>
                ))
              }
            </ScrollArea>
            <ScrollArea className="h-[390px] w-[350px] rounded-md border p-4">
            <div className=" text-primary font-extrabold text-xl">SUBCATEGORIAS</div>
            {showSubcategorias && (
                <div className="subcategorias">
                  {subcategories
                    .filter((subcategoria: any) => subcategoria.categoriaId === idCategories)
                    .map((subcategoria: any) => (
                      <Subcategoria key={subcategoria.id} subcategoria={subcategoria} />
                    ))}
                </div>
              )}
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

