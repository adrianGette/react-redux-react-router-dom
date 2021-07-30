import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

/*************************************************/
// en el action vamos a tener una función que se
// tiene que utilizar en el componente, de esa
// forma los datos de los componentes se pueden
// pasar a las acciones y utilizamos dispatch
// para ejecutar esas acciones
/*************************************************/

// crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async ( dispatch ) => {
        dispatch( agregarProducto() );

        try {
            // insertar en la API
            await clienteAxios.post('/productos', producto);

            // si todo sale bien, actualizar el state
            dispatch( agregarProductoExito(producto) );
        } catch (error) {
            console.log(error);

            // si hay un error cambiar el state
            dispatch( agregarProductoError(true) );
        }
    }
}

// estas funciones también tienen que estar en el reducer

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});