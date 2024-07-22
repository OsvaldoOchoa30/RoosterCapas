import React from 'react';
import { Button } from 'reactstrap';

function BottomRegistro({ botonRegistro, onClickF, color, height, width, page, key}) {

  

  return (
    <Button
      style={{ height, width }}
      color={color}
      onClick={onClickF}
      pagina = {page}
    >
      {botonRegistro}
    </Button>
  );
}

export default BottomRegistro;
