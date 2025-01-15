import { ProdProps } from "../../page"

export async function ProdInfo ( { id }: { id: string }) {

    await new Promise(resolve => setTimeout(resolve, 200))

    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data: ProdProps = await response.json()

    return (
        <div>
            <div className="m-4 p-5 border border-gray-200 rounded-md">
                <p>{data.id}</p>
                <h1 className="text-3xl my-2">{data.title}</h1>
                <p>{data.description}</p>
                <h1 className="font-semibold">R$ {data.price}</h1>
            </div>
        </div>
    )

}