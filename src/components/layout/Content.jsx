import "./Content.css";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";
 
const Content = props => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id/:id2" element={<Param />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Content;