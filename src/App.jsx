import { Content } from "./components/layout/Content";
import { Footer } from "./components/layout/Footer";
import { Nav } from "./components/layout/Nav";
import { Bebidas } from "./components/pages/bebidas";
import { Ensaladas } from "./components/pages/ensalada";
import { Platos } from "./components/pages/platos";
import { Postres } from "./components/pages/postres";
function App() {
  

  return (
    <div className="App">
      <Nav/>
      <Content/>
      <Platos/>
      <Ensaladas/>
      <Postres/>
      <Bebidas/>
      <Footer/>
    </div>
  );
}

export default App;
