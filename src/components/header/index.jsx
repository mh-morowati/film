import Link from "next/link";


function Header() {
    return ( <header className="bg-yellow-400 h-[10vh] p-2">
<div className="container mx-auto">
<nav>
    <ul>
        <li>
            <Link className="text-blue bg-white inline-block p-2 text-center w-20 h-8 rounded-md m-2" href={'/'}>home</Link>
            <Link className="text-blue bg-white inline-block p-2 text-center w-20 h-8 rounded-md m-2" href={'/movies'}>movies</Link>
        </li>
    </ul>
</nav>
</div>
    </header>);
}

export default Header;