import Image from "next/image"

export default function Project(){
    return(
        <div>
        <div className="">
            <h1 className="text-6xl font-serif text-center text-amber-700">Project</h1>
        </div>
        <div className="grid grid-cols-3 row-2 ">
            <div className="border-4 border-amber-700 rounded-2xl  m-5">
                <Image src={"/figma1.jpeg"} alt="" width={1000} height={1000} className="rounded-t-xl"/>
                <h3 className="text-amber-700 text-center text-2xl">Figma Website</h3>
            </div>
            <div className="border-4 border-amber-700 rounded-2xl  m-5">
                <Image src={"/homedecor.jpeg"} alt="" width={1000} height={1000} className="rounded-t-xl"/>
                <h3 className="text-amber-700 text-center text-2xl">Home Decor Website</h3>
            </div>
            <div className="border-4 border-amber-700 rounded-2xl  m-5">
                <Image src={"/kff.jpeg"} alt="" width={1000} height={1000} className="rounded-t-xl"/>
                <h3 className="text-amber-700 text-center text-2xl">Khan Fancy Fabric Website</h3>
            </div>
            <div className="border-4 border-amber-700 rounded-2xl  m-5">
                <Image src={"/figma.jpeg"} alt="" width={1000} height={1000} className="rounded-t-xl"/>
                <h3 className="text-amber-700 text-center text-2xl">Figma website</h3>
            </div>
            <div className="border-4 border-amber-700 rounded-2xl  m-5">
                <Image src={"/portfoliocss.jpeg"} alt="" width={1000} height={1000} className="rounded-t-xl"/>
                <h3 className="text-amber-700 text-center text-2xl">Portfolio CSS Website</h3>
            </div>
            <div className="border-4 border-amber-700 rounded-2xl  m-5">
                <Image src={"/figma.jpeg"} alt="" width={1000} height={1000} className="rounded-t-xl"/>
                <h3 className="text-amber-700 text-center text-2xl">Figma website</h3>
            </div>
       
        </div>
        </div>
    )
}



