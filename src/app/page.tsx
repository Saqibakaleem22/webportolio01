import Image from "next/image";
import Skills from "./components/skills";
import About from "./components/about";
import Project from "./components/project";

export default function Home() {
  return (
    <div>
      <section className="flex justify-around">
        <div className=" py-28">
          <h3 className="text-5xl font-serif text-white py-3 ">Hi,</h3>
          <h3 className="text-5xl font-serif text-white py-3 ">I&#39;m Saqiba kaleem</h3>
          <h3 className="text-5xl font-serif text-white py-3 ">I&#39;m frontend developer</h3>

          <button className="bg-amber-700 text-white font-semibold py-2 px-9 rounded-full mt-9 ml-28">Contact us</button>
        </div>

       <div className="py-28">
        <Image src={"/profilepic.jpeg"} alt="" width={100} height={100} className="h-60 w-60" />
        </div>
      </section>





      <About/>
      <Skills />
      <Project/>
    </div>


  );
}
