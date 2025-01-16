import { Suspense } from "react";
import { ProdProps } from "../page";
import { ProdInfo } from "./_components/produto";

export default async function DetailProduct( {
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    return (
        <div className="p-4 max-w-4xl m-auto">
            <h1 className="m-4 font-bold text-xl">Detalhe do Produto</h1>
            <Suspense fallback= {<h1>Carregando...</h1>}>
            <ProdInfo id={id} />
            </Suspense>
        </div>
    )
}