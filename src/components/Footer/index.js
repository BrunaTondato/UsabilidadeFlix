import React from "react";
import Fundo from "../../assets/fundo.png";
import "./index.css";

import { FooterBase } from "./styles"; /*importando o styles componentes */
function Footer() {
return (
<FooterBase>

 <a href="https://info.mch.ifsuldeminas.edu.br/" target
="_blank"> 
        <img className="Fundo" src={Fundo} alt="MeuFlix fundo" />
      
</a>
<p>Direitos reservados By Bruna e Natália</p>
</FooterBase>
);
}
export default Footer;