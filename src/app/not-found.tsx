import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="p-4 w-full h-screen flex flex-col items-center mt-10">
            <h1 className='text-6xl'>404</h1>
            <p>Página não encontrada</p>
            <Link className='m-5 p-4 text-white rounded-xl bg-slate-700' href="/">
                Voltar para home
            </Link>
        </div>
    )
}