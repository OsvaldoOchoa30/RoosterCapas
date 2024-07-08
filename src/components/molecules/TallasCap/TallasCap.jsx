import React from 'react'

import ImputRegistro from '../../atoms/ImputRegistro/ImputRegistro'
import ParrafoRegistro from '../../atoms/ParrafoRegistro/ParrafoRegistro'

function TallasCap({q1, q2, q3, q4, q5}) {
    //usar .map

  return (
    <>
    <div style={{justifyContent: "center", display:"flex"}}>

        <div style={{width:"15em",display:'flex', margin:"20px"}}>
        <ParrafoRegistro registro="Talla: 7"/>
        <ImputRegistro Input inputText={q1} inputType="number"/>
        </div>

        <div style={{width:"15em",display:'flex', margin:"20px"}}>
        <ParrafoRegistro registro="Talla: 7 1/8"/>
        <ImputRegistro Input inputText={q2} inputType="number"/>
        </div>

        <div style={{width:"15em",display:'flex', margin:"20px"}}>
        <ParrafoRegistro registro="Talla: 7 1/4"/>
        <ImputRegistro Input inputText={q3} inputType="number"/>
        </div>

        <div style={{width:"15em",display:'flex', margin:"20px"}}>
        <ParrafoRegistro registro="Talla: 7 1/2"/>
        <ImputRegistro Input inputText={q4} inputType="number"/>
       </div>

       <div style={{width:"15em",display:'flex', margin:"20px"}}>
        <ParrafoRegistro registro="Talla: 7 3/4"/>
        <ImputRegistro Input inputText={q5} inputType="number"/>
        </div>

    </div>
    </>
    
  )
}

export default TallasCap