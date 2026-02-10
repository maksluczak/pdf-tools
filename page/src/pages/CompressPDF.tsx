import {Upload, FileText} from "lucide-react";

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
                <div className="group relative">
                    <div className="border border-slate-800 bg-slate-800/20 rounded-lg p-16 transition-all hover:border-amber-500/40 hover:bg-slate-800/40 cursor-pointer flex flex-col items-center justify-center text-center">
                        <Upload size={32} className="text-slate-600 group-hover:text-amber-500 transition-colors mb-4" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium tracking-wide">
                                Drop your <span className="text-amber-500">PDF</span> here
                            </p>
                            <p className="text-xs text-slate-500 uppercase tracking-tighter">
                                or click to browse files
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}