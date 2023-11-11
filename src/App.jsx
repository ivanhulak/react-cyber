import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";

export const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </main>
            <Footer /> 
        </div>
    );
};
