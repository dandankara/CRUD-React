import Conteudo from "./components/Conteudo/Conteudo";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ContainerApp  from "./style";

function App() {
  return (
    <ContainerApp>
      <Header />
      <NavBar />
      <Conteudo />
    </ContainerApp>
  );
}

export default App;
