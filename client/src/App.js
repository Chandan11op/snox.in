import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import ScrollToTop from "./components/ScrollToTop";
import SnoxPreloader from "./components/SnoxPreloader/SnoxPreloader";
import { useEffect, useState } from "react";



function App() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating an asynchronous task
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <BrowserRouter>
            {isLoading ? (
                <SnoxPreloader />
            ) : (
                <div className="App">
                    <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={ <SingleProduct />} />
                    </Routes>
                    <Newsletter />
                    <Footer />

                </div>
            )}
        </BrowserRouter>

    );

}

export default App;
