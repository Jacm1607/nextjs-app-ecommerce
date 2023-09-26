
import TitleBorder from "@/components/ui/titleBorder";
import CardForm from "./card";





export default function SeguimientoPedido() {
    return (
        <div className="container my-28">
            <TitleBorder title="Seguir mi pedido" />
            <div className="flex justify-center">
                <CardForm />
            </div>
        </div>
    )
}