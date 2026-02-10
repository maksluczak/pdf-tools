import {Link} from "react-router-dom";
import {Github, Linkedin} from "lucide-react";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full border-t backdrop-blur-md border-amber-50">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 p-4 md:flex-row md:p-6">
        <span className="text-sm text-body text-white">
          © {new Date().getFullYear()} <strong>PDF Tools</strong>
        </span>
                <nav aria-label="Footer navigation">
                    <ul className="flex items-center gap-6 text-sm text-body ">
                        <li>
                            <Link
                                to="https://maks-luczak-portfolio.vercel.app"
                                className="hover:text-primary transition-colors text-amber-50"
                            >
                                My Page
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="https://github.com/maksluczak"
                                aria-label="GitHub"
                                className="hover:text-primary transition-colors text-amber-50"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="https://www.linkedin.com/in/maksymilian-łuczak-69a10b331/"
                                aria-label="LinkedIn"
                                className="hover:text-primary transition-colors text-amber-50"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </footer>
    );
}