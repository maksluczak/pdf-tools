import {Link} from "react-router-dom";
import {FileDown} from "lucide-react";

interface HomeCardProps {
    link: string;
    title: string;
    description: string;
}

export default function HomeCard(props: HomeCardProps) {
    const { link, title, description } = props;

    return (
        <>
            <Link
                to={link}
                className="group bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 mb-6 group-hover:border-amber-500 transition">
                    <FileDown className="w-7 h-7" />
                </div>
                <h2 className="uppercase text-2xl font-semibold mb-3">
                    {title}
                </h2>
                <p className="text-slate-400 mb-6">
                    {description}
                </p>
            </Link>
        </>
    )
}