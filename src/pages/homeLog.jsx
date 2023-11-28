import React, {useState} from 'react'
import './homeLog.css'
import HeaderLog from '../components/headerLog/headerLog'
import CategoriasLog from '../components/categoriasLog/categoriasLog'
import BtnAdicionar from '../components/btnAdicionar/btnAdicionar'

const HomeLog = () => {

    const [openAdd, setOpenAdd] = useState(false)

  return (
    <>
        <HeaderLog/>
        <BtnAdicionar/>
        <CategoriasLog/>
    </>
  )
}

export default HomeLog