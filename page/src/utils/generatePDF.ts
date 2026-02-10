import {jsPDF} from 'jspdf';
import type {PdfGenerator} from "../types";
import {robotoRegularBase64} from "./fonts";

export const generatePDF = (props: PdfGenerator) => {
    const doc = new jsPDF({
        orientation: props.settings.orientation,
        unit: 'mm',
        format: 'a4'
    });

    doc.addFileToVFS("Roboto-Regular.ttf", robotoRegularBase64);
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");

    doc.setFont("Roboto");

    if (props.header) {
        doc.setFontSize(props.settings.headerSize);
        doc.setTextColor(100, 100, 100);
        doc.text(props.header, 10, 20);

        doc.setDrawColor(200, 200, 200);
        doc.line(10, 22, 200, 22);
    }

    doc.setFontSize(props.settings.fontSize);
    doc.setTextColor(0, 0, 0);

    const maxWidth = 190;
    const splitText = doc.splitTextToSize(props.content, maxWidth);

    doc.text(splitText, 10, 35);

    const fileName = props.header.trim() || "dokument";
    doc.save(`${fileName}.pdf`);
}