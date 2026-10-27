import { BrowserRouter, Route, Routes } from "react-router"
import Form from "./components/Form.jsx"
import Logo from "./components/Logo.jsx"
import Layout from "./pages/Layout.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Consulta from "./pages/Consulta.jsx"

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/a" element={<Layout />}>
            <Route index element={<Logo />} />
            <Route path="form/:id" element={<Form />} />
          </Route>
          <Route path="*" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App