import React from 'react'

import ImputRegistro from '../../atoms/ImputRegistro/ImputRegistro'
import ParrafoRegistro from '../../atoms/ParrafoRegistro/ParrafoRegistro'

function Unitalla() {
  return (
    <div style={{justifyContent: "center", display:"flex"}}>
        <div style={{width:"15em",display:'flex', margin:"20px"}}>
        <ParrafoRegistro registro="Unitalla"/>
        <ImputRegistro Input inputText="0" inputType="number"/>
        </div>
    </div>
  )
}

export default Unitalla