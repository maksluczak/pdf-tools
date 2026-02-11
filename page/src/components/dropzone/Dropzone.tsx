import {Upload} from "lucide-react";
import {useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";

export default function Dropzone() {
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState<boolean>(false);

    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        multiple: false
    });

    const handleCompress = async () => {
        try {
            if (!file) return;
            setLoading(true);

            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch("https://pdf-tools-compress.onrender.com/api/pdf/compress-to-zip", {
                method: "POST",
                body: formData
            });
            if (!response.ok) {
                throw new Error("Compress failed.");
            }
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file.name.replace(".pdf", ".zip"));
            document.body.appendChild(link);
            link.click();

            link.parentNode?.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="group relative">
                <div className="border border-slate-800 bg-slate-800/20 rounded-lg p-16 transition-all hover:border-amber-500/40 hover:bg-slate-800/40 cursor-pointer flex flex-col items-center justify-center text-center">
                    <Upload size={32} className="text-slate-600 group-hover:text-amber-500 transition-colors mb-4" />
                    <div {...getRootProps()} className="space-y-1">
                        <input {...getInputProps()} />
                        <p className="text-sm font-medium tracking-wide">
                            Drag & drop your <span className="text-amber-500">.PDF</span> file here
                        </p>
                        <p className="text-xs text-slate-500 uppercase tracking-tighter">
                            or click to browse files
                        </p>
                        {file ? file.name : "..."}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button
                    type="button"
                    disabled={!file || loading}
                    onClick={handleCompress}
                    className={`uppercase border-2 border-amber-500 text-amber-500 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 ${(!file || loading) ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-500 hover:text-slate-900"}`}
                >
                    {loading ? "Loading..." : "Compress"}
                </button>
            </div>
        </>
    )
}