import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// muestra alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        disptach( crearAlerta(alerta) )
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})