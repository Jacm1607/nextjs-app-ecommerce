import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Map } from "lucide-react";

interface IAlertGoogleMapsApi {
    title: string,
    urlApi: string
}

export function AlertGoogleMapsApi({ title, urlApi }: IAlertGoogleMapsApi) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>
                    <div className="flex items-center space-x-1">
                        <Map color="#ffffff" /> <span>Ver Mapa</span>
                    </div>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className={"lg:max-w-screen-lg"}>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription >
                        <iframe src={urlApi} width="100%" height="450" loading="lazy" ></iframe>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Cerrar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
