import Link from "next/link";

function Navbar(){

    return(
        <nav className="bg-slate-700 mb-4 flex justify-between items-center px-10 p-3 font-bold">
            <Link href="/">
                Home
            </Link>
            <ul>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>

        
    )
}

export default Navbar;