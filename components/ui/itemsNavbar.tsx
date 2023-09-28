'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { URL_BASE } from "@/lib/endpoint"
import { divideArrayGroup } from "@/lib/helpers"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export function ItemsNavbar() {
  const [categories, setCategories] = useState<any>()
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const redirectPath = (url:string) => {
    setOpen(false)
    router.replace(url)
  }

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetch (`${URL_BASE}/api/categorias?populate[subcategorias][fields][0]=id&populate[subcategorias][fields][1]=nombre`, {
        cache: 'no-store'
      })
      const responseCategories = await categories.json()
      setCategories(responseCategories)
    }

    getCategories()
  }, [])
  
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setOpen(!open)} variant="outline">Categorias</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={" max-w-7xl mx-20"}>
        <AlertDialogHeader>
          <AlertDialogTitle>Categorias</AlertDialogTitle>
          <AlertDialogDescription>
            <div className=" columns-4">
              {
                categories?.data.map((category:any) => (
                  <div key={category.id} className="my-3 flex flex-col">
                      <div className="text-xl font-extrabold text-black">{category.attributes.nombre}</div>
                      {
                        category.attributes.subcategorias.data.map((subcategory:any) => (
                          <div className=" cursor-pointer" key={subcategory.id} onClick={() => redirectPath(`/categoria/${category.attributes.slug}/${category.attributes.subcategorias.data[0].id}`)}>{subcategory.attributes.nombre}</div>
                        ))
                      }
                  </div>
                ))
              }    
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>Cerrar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

