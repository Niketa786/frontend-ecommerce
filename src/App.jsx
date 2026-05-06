import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Navbar hamesha top par rahega */}
        <Navbar />
        
        <Routes>
          {/* Home/Shop Route */}
          <Route path="/" element={<Shop />} />
          
          {/* Categories with Banners */}
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          
          {/* Product Details Routes */}
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          
          {/* Cart and Auth Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        {/* Footer hamesha bottom par rahega */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App