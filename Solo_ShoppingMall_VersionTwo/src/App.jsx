import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Bookmark from './pages/Bookmark';

function App() {


  return (

    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path="/products/list" element={<ProductList />}></Route>
          <Route path="/bookmark" element={<Bookmark />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
