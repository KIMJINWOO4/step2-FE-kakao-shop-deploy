import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import { LoaderContainer, DefaultSpinner } from "react-global-loader";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <LoaderContainer>
        <DefaultSpinner />
      </LoaderContainer>
      <BrowserRouter>
        {/*단독 레이아웃*/}
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          <Route path="/error" element={<ErrorPage />}></Route>
          {/*공통 레이아웃 : GNB. FOOTER*/}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
