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
        <div>
            <h1 className="m-4 font-bold text-xl">Detalhe do Produto</h1>
            <Suspense fallback= {<h1 clas>Carregando...</h1>}>
            <ProdInfo id={id} />
            </Suspense>
        </div>
    )
}