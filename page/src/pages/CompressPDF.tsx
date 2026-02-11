import {FileText} from "lucide-react";
import Dropzone from "../components/dropzone/Dropzone.tsx";

export default function CompressPDF() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-2xl">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold uppercase tracking-widest text-white mb-2">
                        <div className="flex items-center gap-4">
                            <FileText size={26} className="text-amber-500" /> PDF Compressor
                        </div>
                    </h1>
                    <p className="text-slate-500 text-sm">
                        Microservice-based PDF to ZIP compression.
                        Safe, stateless, and efficient.
                    </p>
                </header>
                <Dropzone />
            </div>
        </div>
    );
}