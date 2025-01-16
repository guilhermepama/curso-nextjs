import type { ProdProps } from "../../page";
import Image from "next/image";

export async function ProdInfo ( { id }: { id: string }) {

    await new Promise(resolve => setTimeout(resolve, 200))

    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data: ProdProps = await response.json()

    return (
        <div>
            <div className="m-4 p-5 border border-gray-200 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {data.images.map((image: string, index: number) =>( 
                        <Image
                        key={index}
                        src={image}
                        alt={data.title || "Imagem do Produto"}
                        width={300}
                        height={300}
                        className="rounded-md mb-4"
                        />
                    ))}
                </div>
                <p>{data.id}</p>
                <h1 className="text-3xl my-2">{data.title}</h1>
                <p>{data.description}</p>
                <h1 className="font-semibold">R$ {data.price}</h1>
            </div>
        </div>
    )

}