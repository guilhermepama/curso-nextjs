import Link from 'next/link';

export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white ">
            <div className="p-2 flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>
                    NextJS
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-8">
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                             <Link href='/produtos'>
                                Produtos
                            </Link>
                        </li>
                        <li>
                             <Link href='/painel'>
                                Painel
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
