import React from 'react';

function Alertas(props) {

    const { tipo, descripcion } = props;



    return ( <>
                       
            {tipo}
                       
            {descripcion}
    </> );
}

export default Alertas;