import {Link} from "react-router-dom"
import {HomeIcon} from "lucide-react"
import type {ReactNode} from "react";

type NavProps = {
    children: ReactNode;
};

export default function Nav({ children }: NavProps) {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-16">
                        <Link to="/" className="text-lg font-bold text-primary text-white">
                            <HomeIcon />
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="pt-16">
                {children}
            </main>
        </>
    );
}
