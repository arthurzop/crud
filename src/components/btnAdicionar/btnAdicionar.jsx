import React, { useState } from "react";
import plus from "../../assets/icons/plus.png";
import "./btnAdicionar.css";

function BtnAdicionar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="container-botao">
        <button className="botao-add" onClick={() => setOpenModal(true)}>
          <img src={plus} alt="plus" className="plus" />
          <span className="botao-txt">Adicionar Item</span>
        </button>
      </div>
      {openModal && (
        <>
          <div className="popup">
            <div className="container-add">
              <div className="top">
                <h1>Novo item</h1>
                <button
                  onClick={() => setOpenModal(false)}
                  className="add-sair"
                >
                  {" "}
                  ✕
                </button>
              </div>
              <div className="add-form">
                <div className="form-item">
                  <h3>Nome do Item:</h3>
                  <input type="text" placeholder="Ex: X-Tudo" />
                </div>
                <div className="form-item">
                  <h3>Valor:</h3>
                  <input type="text" placeholder="R$" />
                </div>
                <div className="form-item">
                  <h3>Descrição:</h3>
                  <input
                    type="text"
                    className="descricao"
                    placeholder="Ex: Pão, Hamburguer, etc."
                  />
                </div>
                <div className="form-item">
                  <h3>Categoria: </h3>
                  <select name="categoria" className="categoria">
                    <option value="lanches">Lanches</option>
                    <option value="salgados">Salgados</option>
                    <option value="bebidas">Bebidas</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>
              <div className="botoes-add">
                <button>Salvar</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BtnAdicionar;
