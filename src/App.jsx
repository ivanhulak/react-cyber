import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactsPage } from "./pages/ContactsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { CartPage } from "./pages/CartPage";
import { FavouritesPage } from "./pages/FavouritesPage";

export const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </main>
            <Footer /> 
        </div>
    );
};
