import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import editar from "../../assets/icons/edit.png"
import excluir from "../../assets/icons/delete.png"

const Btns = () => {
    return(
        <>
        <div className="botoes">
          <button>
            <img src={editar} alt="" />
          </button>
          <button>
            <img src={excluir} alt="" />
          </button>
        </div>
        </>
    )
}

export default Btns