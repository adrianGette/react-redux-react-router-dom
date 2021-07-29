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
    return () => {
        console.log(producto);
    }
}