import React from "react";
import dadosIniciais from "./data/dados.json";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <Banner
videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
url={dadosIniciais.categorias[0].videos[0].url}
videoDescription={"Segundo a norma ISO IEC 9241-11 criada em 1998 Usabilidade é: a capacidade de um produto ser usado por usuários específicos para atingir objetivos específicos com eficácia, eficiência e satisfação em um contexto específico de uso."}
/>
     
    </div>
  );
}


      
    

export default App;