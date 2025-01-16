import { title } from "process";


export async function GET () {
    return Response.json({
        title: 'Anel',
        description: 'Anel banhado ouro',
        price: 165.50
    })
    }   