import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./components/navigation/Nav";
import Home from "./pages/Home.tsx";
import TextToPDF from "./pages/TextToPDF.tsx";
import Footer from "./components/footer/Footer.tsx";
import CompressPDF from "./pages/CompressPDF.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen w-full bg-slate-900">
                <Nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/text-to-pdf" element={<TextToPDF />} />
                        <Route path="/compress-pdf" element={<CompressPDF />} />
                    </Routes>
                </Nav>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
