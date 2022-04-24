import ListarOdontologos from "./components/odontologo/listarOdontologos";
import BuscarOdontologo from "./components/odontologo/buscarOdontologo";
import NavMenu from "./components/homeMenu"

import LoginPage from "./components/loginPage";

const style = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}

function App() {
  return (
    <div className="App" style={style}>
      <LoginPage></LoginPage>
    </div>
    
  );
}

export default App;
