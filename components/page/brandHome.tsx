import Image from "next/image";
import Img from "../ui/img";
import TitleBorder from "../ui/titleBorder";

const BranHome = () => {
    return (
        <div className="grid grid-cols-5 my-6">
            <div className="col-span-5">
                <TitleBorder title={"mARCAS RECONOCIDAS"} />
            </div>
            <div className="col-span-4">
                <div className="flex w-full overflow-x-auto space-x-8 py-8 pl-10">
                    <Image src={'/brands/marca1.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca2.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca3.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca4.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                </div>
            </div>
        </div>
    )
}

export default BranHome;