import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// en el action vamos a tener una función que se
// tiene que utilizar en el componente, de esa
// forma los datos de los componentes se pueden
// pasar a las acciones y utilizamos dispatch
// para ejecutar esas acciones

// crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return ( dispatch ) => {
        dispatch( agregarProducto() );

        try {
            dispatch( agregarProductoExito(producto) );
        } catch (error) {
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
const agregarProductoError = () => {

};