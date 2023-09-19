import Link from "next/link";
import Img from "../ui/img";

const WhatsApp = () => {
    return (
        <Link href={'/'} className="fixed bottom-6 right-10 text-white bg-[#29a71a] p-[10px] rounded-3xl">
            <Img baseUrl={false} url={"/whatsapp.png"} width={"30px"} height={"30px"} objectFit={"cover"} />
        </Link>
    )
}

export default WhatsApp;