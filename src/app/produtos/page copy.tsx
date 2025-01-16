import Image from 'next/image';
import Link from 'next/link';

export interface ProdProps {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ResponseProps {
  products: ProdProps[];
}

export default async function ProductsPage() {
  const limit = 10;

  // Busca os dados no lado do servidor
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}`, {
    cache: 'force-cache', // Configuração de cache para SSR
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar os produtos. Por favor, tente novamente.');
  }

  const data: ResponseProps = await response.json();

  return (
    <div className="p-4 max-w-4xl m-auto">
      <form className="flex gap-2 my-4">
        <input
          type="text"
          className="border border-gray-200 p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Buscar
        </button>
      </form>
      <h1>Produtos</h1>
      <div className="flex flex-col gap-4 mx-2">
        {data.products.map((product) => (
          <div key={product.id} className="space-y-2 p-4 border border-gray-200 rounded-md">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={150}
              height={150}
              className="rounded-md"
            />
            <p className="text-sm">{product.id}</p>
            <h2 className="font-bold">{product.title}</h2>
            <p className="font-light text-sm">{product.description}</p>
            <p className="font-semibold">R$ {product.price}</p>
            <Link href={`/produtos/${product.id}`} className="text-blue-500">
              Ver Produto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
  