import Image from "next/image";
import Img from "../ui/img";
import TitleBorder from "../ui/titleBorder";

const BranHome = () => {
    return (
        <div className="grid grid-cols-5 my-6">
            <div className="col-span-5">
                <TitleBorder title={"mARCAS RECONOCIDAS"} />
            </div>
            <div className="col-span-5">
                <div className=" columns-5 space-x-8 space-y-4">
                    <Image src={'/brands/marca1.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca2.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca3.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca4.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca5.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca6.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca7.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca8.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca9.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                    <Image src={'/brands/marca10.png'} alt="Marca 1" width={620} height={230} style={{width: '200px', height: '100px', objectFit: 'contain'}}></Image>
                </div>
            </div>
        </div>
    )
}

export default BranHome;