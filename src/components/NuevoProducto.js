import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    // utilizar useDispatch y crea una función
    const dispatch = useDispatch();

    // mandar a llamar al action de productoAction
    const agregarProducto = () => dispatch(crearNuevoProductoAction());

    // cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // validar formulario

        // si no hay errores

        // crear el nuevo producto
        agregarProducto();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                {/* <label>Nombre del Producto</label> */}
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del Producto"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                {/* <label>Precio del Producto</label> */}
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio del Producto"
                                    name="precio"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;