import Link from "next/link"



export default function Header(){
    return(
        <header className="flex justify-around  text-amber-700 py-9">
            <div className="text-5xl font-serif">
                Portfolio
            </div>
            <div>
                <ul>
                    <li className="font-semibold space-x-5">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/skills">Skills</Link>
                        <Link href="/project">Project</Link>
                        <Link href="/contact">Contact</Link>
                        
                    </li>
                </ul>
            </div>
        </header>
    )
}