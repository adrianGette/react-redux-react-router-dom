import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

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

            // alerta
            Swal.fire(
                'Correcto',
                'El producto se sgregó correctamente',
                'success'
            )

        } catch (error) {
            console.log(error);

            // si hay un error cambiar el state
            dispatch( agregarProductoError(true) );

            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
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

// función que descarga los productos de la API
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargaProductosExitosa(respuesta.data) );
        } catch (error) {
            console.log(error);
            dispatch( descargaProductosError() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

// selecciona y elimina un producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );

            // si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado!',
                'El producto se eliminó correctamente.',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( eliminarProductoError() );
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

// colocar producto en edición
export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch( obtenerProductoEditarAction(producto) )
    }
}

const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

// edita un registro en la API y en el State
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch( editarProducto(producto) );

        try {
            const resultado = await clienteAxios.put(`/productos/${producto.id}`, producto);
        } catch (error) {
            
        }
    }
}

const editarProducto = producto => ({
    type: COMENZAR_EDICION_PRODUCTO,
    payload: producto
})