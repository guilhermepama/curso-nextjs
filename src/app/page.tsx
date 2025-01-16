import { Metadata } from "next"
import PromoSection from "./components/promo-section"


export const metadata: Metadata = {
    title: "Home - Aula Next JS do zero!",
    description: "Aprendendo Next JS do zerro",
    keywords: "nextjs, react, javascript, typescript",
    openGraph: {
        title: "Home - Aula Next JS do zero!",
        description: "Aprendendo Next JS do zerro",
    },

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
    }
}

export default function Home () {
    return (
        <div className="p-4">
            <PromoSection />
        </div>
    )
}