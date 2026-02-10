import HomeCard from "../components/home/HomeCard.tsx";

const cards = [
    {
        link: "/text-to-pdf",
        title: "Text to PDF",
        description: "Turn any text into a readable PDF in seconds.",
    },
    {
        link: "/compress-pdf",
        title: "Compress PDF",
        description: "Reduce the size of PDF files without losing quality.",
    }
]

export default function Home() {
    return (
        <section className="min-h-screen bg-slate-900 text-amber-500 flex items-center justify-center px-6">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-14">
                    <h1 className="uppercase text-4xl md:text-5xl font-bold mb-4">
                        PDF Tools
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Simple, fast and secure tools for working with PDF files.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <HomeCard link={cards[0].link} title={cards[0].title} description={cards[0].description} />
                    <HomeCard link={cards[1].link} title={cards[1].title} description={cards[1].description} />
                </div>
            </div>
        </section>
    );
}
