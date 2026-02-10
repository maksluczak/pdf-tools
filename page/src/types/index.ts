export type Orientation = 'portrait' | 'landscape';
export const fontStyles: string[] = ['helvetica', 'sans-serif', 'monospace', 'courier'];

export interface PdfSettings {
    headerSize: number;
    fontSize: number;
    fontStyle: string;
    orientation: Orientation;
}

export interface PdfGenerator {
    header: string;
    content: string;
    settings: PdfSettings;
}