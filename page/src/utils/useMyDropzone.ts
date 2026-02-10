import {useCallback} from "react";
import {useDropzone} from "react-dropzone";

interface DropzoneProps {
    setText: (text: string) => void;
}

export const useMyDropzone = ({ setText }: DropzoneProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                if (typeof reader.result === "string") {
                    setText(reader.result);
                }
            };
            reader.readAsText(file);
        })
    }, [setText]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'text/plain': ['.txt'],
            'text/markdown': ['.md']
        }
    });

    return { getRootProps, getInputProps, isDragActive };
}