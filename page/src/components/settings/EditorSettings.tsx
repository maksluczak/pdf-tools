import {Download, Settings} from "lucide-react";
import {fontStyles, type PdfSettings} from "../../types";
import {generatePDF} from "../../utils/generatePDF.ts";

interface SettingsProps {
    header: string,
    setHeader: (header: string) => void,
    text: string,
    settings: PdfSettings,
    setSettings: (settings: PdfSettings) => void,
    scale: number,
    setScale: (scale: number) => void
}

export function EditorSettings(props: SettingsProps) {
    const handleDownload = () => {
        generatePDF({
            header: props.header,
            content: props.text,
            settings: props.settings
        });
    }

    return (
        <>
            <aside className="lg:border-r border-amber-50 flex flex-col bg-slate-900">
                <div className="p-6 border-b border-amber-50 flex items-center gap-2 justify-center lg:justify-start">
                    <Settings size={20} className="text-amber-500" />
                    <h2 className="font-bold uppercase text-lg">Settings</h2>
                </div>
                <div className="p-6 space-y-8">
                    <section className="space-y-4">
                        <label className="text-sm font-bold uppercase text-slate-400 block">Set header</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md outline-none text-white"
                            value={props.header}
                            onChange={(e) => props.setHeader(e.target.value)}
                            placeholder="Enter document header..."
                        />
                    </section>

                    <section className="space-y-4">
                        <label className="text-sm font-bold uppercase text-slate-400 block">Preview scaling: {Math.round(props.scale * 100)}%</label>
                        <input
                            type="range"
                            min="0.3" max="1.5" step="0.05"
                            value={props.scale}
                            onChange={(e) => props.setScale(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg cursor-pointer accent-amber-500"
                        />
                    </section>

                    <section className="space-y-4">
                        <label className="text-sm font-bold uppercase text-slate-400 block">Font style</label>
                        <div className="grid grid-cols-2 gap-2">
                            {fontStyles.map((style) => (
                                <label key={style} className={`flex items-center gap-2 p-2 rounded border cursor-pointer ${props.settings.fontStyle === style ? 'border-amber-500 bg-amber-500/10' : 'border-slate-700 hover:border-slate-500'}`}>
                                    <input
                                        type="radio"
                                        name="font-style"
                                        value={style}
                                        checked={props.settings.fontStyle === style}
                                        onChange={(e) => props.setSettings({ ...props.settings, fontStyle: e.target.value })}
                                        className="hidden"
                                    />
                                    <span className="capitalize text-sm">{style}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] text-slate-400 uppercase mb-1 block">Header Size (pt)</label>
                            <input
                                type="number"
                                value={props.settings.headerSize}
                                onChange={(e) => props.setSettings({ ...props.settings, headerSize: parseInt(e.target.value) || 12 })}
                                className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-sm outline-none focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] text-slate-400 uppercase mb-1 block">Body Size (pt)</label>
                            <input
                                type="number"
                                value={props.settings.fontSize}
                                onChange={(e) => props.setSettings({ ...props.settings, fontSize: parseInt(e.target.value) || 12 })}
                                className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-sm outline-none focus:border-amber-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-amber-50 mt-auto bg-slate-900">
                    <button
                        className="w-full uppercase border-2 border-amber-500 hover:bg-amber-500 hover:text-slate-900 text-amber-500 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3"
                        onClick={handleDownload}
                    >
                        <Download size={22} />
                        Export to PDF
                    </button>
                </div>
            </aside>
        </>
    )
}