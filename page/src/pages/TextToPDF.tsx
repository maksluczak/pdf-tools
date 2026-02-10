import { useState } from "react";
import { FileText, Eye } from "lucide-react";
import { useMyDropzone } from "../utils/useMyDropzone.ts";
import type {PdfSettings} from "../types";
import {EditorSettings} from "../components/settings/EditorSettings.tsx";

export default function TextToPDF() {
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');
    const [scale, setScale] = useState(0.8);
    const [settings, setSettings] = useState<PdfSettings>({
        headerSize: 16,
        fontSize: 12,
        fontStyle: 'helvetica',
        orientation: 'portrait'
    });

    const { getRootProps, getInputProps } = useMyDropzone({ setText });

    return (
        <div className="min-h-screen w-full bg-slate-900 text-white font-sans overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <EditorSettings header={header} setHeader={setHeader} text={text} settings={settings} setSettings={setSettings} scale={scale} setScale={setScale} />
                <main className="flex flex-col min-h-[500px] lg:h-auto">
                    <div className="p-6 border-b border-amber-50 flex items-center gap-2 bg-slate-900">
                        <FileText size={20} className="text-amber-500" />
                        <span className="text-lg uppercase font-bold">Text editor</span>
                    </div>

                    <div className="m-5 flex-1 flex flex-col">
                        <textarea
                            className="flex-1 p-6 lg:p-10 bg-slate-800 border border-slate-700 rounded-xl outline-none resize-none text-lg text-gray-100 w-full min-h-[400px]"
                            value={text}
                            placeholder="Start writing or paste your content here..."
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>

                    <div {...getRootProps()} className="mx-5 mb-5 p-6 border-2 border-dashed border-slate-700 rounded-xl cursor-pointer hover:border-amber-500/50 hover:bg-slate-800 transition-all text-center">
                        <input {...getInputProps()} />
                        <p className="text-sm font-medium text-slate-400 italic">
                            Drag & drop <span className="text-amber-500 font-bold">.TXT</span> or <span className="text-amber-500 font-bold">.MD</span> files here
                        </p>
                    </div>
                </main>
                <section className="col-span-1 lg:col-span-2 bg-slate-950 flex flex-col min-h-screen">
                    <div className="p-6 border-y border-amber-50 bg-slate-900 flex items-center gap-2">
                        <Eye size={20} className="text-amber-500" />
                        <span className="text-lg uppercase font-bold">Live preview</span>
                    </div>

                    <div className="flex-1 flex justify-center items-start p-4 lg:p-20 overflow-x-auto bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                        <div
                            className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-300 text-slate-900 shrink-0 mb-20"
                            style={{
                                padding: '20mm',
                                width: settings.orientation === 'portrait' ? '210mm' : '297mm',
                                height: settings.orientation === 'portrait' ? '297mm' : '210mm',
                                transform: `scale(${scale})`,
                                transformOrigin: 'top center',
                            }}
                        >
                            <div
                                style={{ fontSize: `${settings.headerSize}pt`, fontFamily: settings.fontStyle }}
                                className="border-b-2 border-slate-100 mb-8 pb-4 font-bold text-slate-400 italic"
                            >
                                {header || "Document Header"}
                            </div>
                            <div
                                className="whitespace-pre-wrap break-words"
                                style={{ fontSize: `${settings.fontSize}pt`, fontFamily: settings.fontStyle }}
                            >
                                {text || (
                                    <div className="text-slate-200">
                                        <p className="italic text-slate-300">Start typing in the editor to see the preview...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}