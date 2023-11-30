import React from "react";
import editar from '../../../assets/icons/edit.png'
import excluir from '../../../assets/icons/delete.png'
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";

const Lanches = () => {
  
    return (
      <> 
      <HeaderLog/>
      <BtnAdicionar/>  
      <CategoriasLog/>
      <div className="container-lanche">
        <h1>Lanches</h1>
        <div className="card">
          <div className="lanche-txt">
            <h3 id="nome">X-tudo</h3>
            <h4 id="descricao">Pão, Hamburguer, Salada, Bacon e Ovo</h4>
            <h3 id="preco">R$10</h3>
          </div>
        </div>
        <div className="botoes">
          <button >
            <img src={editar} alt=""/>
          </button>
          <button>
            <img src={excluir} alt=""/>
          </button>
        </div>
      </div>
      </>
    );
  };

  export default Lanches