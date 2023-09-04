import React, { useEffect, useState, useRef } from 'react';
import Menu from '../../common/Admin/Menu'
import './style.css'

import DataTable from 'react-data-table-component'
import { id, ro } from 'date-fns/locale'

//libreria para exportar a excel
import { CSVLink } from 'react-csv'
import { set } from 'date-fns';


const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}

export default function FacturaAdminScreen() {

  const [idFactura, setIdFactura] = React.useState('')

  const handleFactura = (id) => {
    setIdFactura(id)
  }

  //detalles de la factura
  const [ticket, setTicket] = React.useState('')
  const [fecha, setFecha] = React.useState('')
  const [lugar, setLugar] = React.useState('')
  const [productosFactura, setProductosFactura] = React.useState([]);

  const handleDetalles = (ticket, fecha, lugar, productos) => {
    setTicket(ticket)
    setFecha(fecha)
    setLugar(lugar)
    setProductosFactura(productos)
  }

  // Función para formatear los productos
  const formatProductos = (productos) => {
    return productos.map((producto) => {
      return `${producto.nombre} (${producto.cantidad} x $${producto.precio}) = $${producto.total}`;
    }).join(', ');
  };

  const columnas = [
    {
      name: '#',
      selector: (row) => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Nombre',
      selector: (row) => row.nombre,
      sortable: true
    },
    {
      name: 'Correo',
      selector: (row) => row.correo,
      sortable: true
    },
    {
      name: 'Ticket',
      selector: (row) => row.ticket,
      sortable: true
    },
    {
      name: 'Fecha',
      selector: (row) => formatDate(row.fecha),
      width: '200px',
      sortable: true
    },
    {
      name: 'Lugar',
      selector: (row) => row.lugar,
      sortable: true
    },
    {
      name: 'Acciones',
      width: '230px',
      cell: row => (
        <div>
          <button type="button" class="btn btn-primary mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#detalleFactura"
            onClick={() => handleDetalles(row.ticket, formatDate(row.fecha), row.lugar, row.productos)}>Detalles <i class="bi bi-person-lines-fill"></i></button>
        </div >
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]

  useEffect(() => {
    getFacturas().then((facturas) => {
      setFacturas(facturas);
      setFacturasFiltradas(facturas)
      console.log("facturas: " + facturas)
      console.log("fecha inicio: " + fechaInicio)
      console.log("fecha fin: " + fechaFin)
    }).catch((error) => {
      console.log(error);
    });
  }, [])


  const getFacturas = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8080/api-jdm/facturas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          const data = await response.json();
          if (data.data !== null) {
            const Facturas = data.data.map((factura) => ({

              id: factura.id,
              nombre: factura.nombre + ' ' + factura.apellidos,
              correo: factura.correo,
              ticket: factura.ticket.numTicket,
              fecha: factura.fecha,
              lugar: factura.ticket.lugar,
              productos: factura.ticket.productos,
            }));
            console.log('facturas: ' + Facturas);
            resolve(Facturas);
          } else {
            console.log('No hay facturas disponibles');
            resolve([]);
          }
        }
      } catch (error) {
        console.log('error al obtener facturas' + error);
        reject(error);
      }
    });
  };


  const onChange = (e) => {
    const valorBusqueda = e.target.value.toLowerCase();
    setBusqueda(valorBusqueda);
    filtraResultados(valorBusqueda);
  }


  //filtro por fechas

  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [facturas, setFacturas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [facturasFiltradas, setFacturasFiltradas] = useState([]);

  //formato de fecha
  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  //fecha de inicio
  const fechaStart = (e) => {
    const selectedStartDate = e.target.value;
    setFechaInicio(selectedStartDate);
    filtraResultados(busqueda, selectedStartDate, fechaFin);
    console.log("Fecha Inicio: ", selectedStartDate);

  }

  //fecha de fin
  const fechaEnd = (e) => {
    const selectedEndDate = e.target.value;

    if (selectedEndDate >= fechaInicio) {
      setFechaFin(selectedEndDate);
      filtraResultados(busqueda, fechaInicio, selectedEndDate);
      console.log("Fecha Fin: ", selectedEndDate);
    } else {
      console.log("La fecha de fin no puede ser anterior a la fecha de inicio");
      Swal.fire({
        title: 'OOOPS!', // Titulo de la alerta
        text: "La fecha de fin no puede ser anterior a la fecha de inicio", // Texto de la alerta
        icon: 'error', // Icono de la alerta
        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
        showConfirmButton: false, // No mostrar el botón de confirmación
        timerProgressBar: true, // Muestra la barra de tiempo
      });
    }
  }

  //filtro por fechas y por busqueda
  const filtraResultados = (busqueda, fechaI, fechaF) => {
    const resultados = facturas.filter((factura) => {
      const buscaEnCampos = (
        factura.nombre.toLowerCase().includes(busqueda) ||
        factura.correo.toLowerCase().includes(busqueda) ||
        factura.ticket.toLowerCase().includes(busqueda) ||
        factura.lugar.toLowerCase().includes(busqueda)
      );

      const dentroDeRango = (
        (!fechaI || factura.fecha >= fechaI) &&
        (!fechaF || factura.fecha <= fechaF)
      );

      return buscaEnCampos && dentroDeRango;
    });

    setFacturasFiltradas(resultados);
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  //funciona para pintar las facturas cada 5 segundos
  useInterval(() => {
    if (fechaInicio === '' && fechaFin === '' && busqueda === '') {
      getFacturas().then((facturas) => {
        setFacturas(facturas);
        setFacturasFiltradas(facturas);
        console.log("facturas: " + facturas)
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log("Hay texto xd")
    }
  }, 5000);




  return (
    <div className='component'>
      <Menu />
      <div>
        <div class="mx-auto p-2">
          <h2>Control de Facturas</h2>
        </div>

      </div>
      <div class="card mt-3">
        <div class="card-body">


          <div class="d-flex justify-content-end mb-2">
            <div class="d-flex justify-content-end mb-2">
              <label className='me-2 mt-2'>Desde: </label>
              <input type='date' className='form-control me-2' style={{ width: "200px" }}
                onChange={fechaStart} id='start' value={fechaInicio} max={fechaFin}
              ></input>
              <label className='me-2 mt-2'>Hasta: </label>
              <input type='date' className='form-control me-2' style={{ width: "200px" }}
                onChange={fechaEnd} value={fechaFin} min={fechaInicio}
              ></input>
            </div>
            <input type='text' placeholder='Buscar...' class='form-control me-2' style={{ width: "300px" }}
              onChange={onChange}
            />
            <CSVLink
              data={facturasFiltradas.map((factura) => {
                // Copiar la factura y reemplazar la columna "Productos" con el formato adecuado
                const facturaConProductosFormateados = {
                  ...factura,
                  productos: formatProductos(factura.productos),
                };
                return facturaConProductosFormateados;
              })}
              excludeColumns={['productos']}
              filename='Facturas.csv'
              className='btn btn-primary me-2'
            >
              Exportar facturas <i class="bi bi-download"></i>
            </CSVLink>

          </div>
          <div class="table-responsive">
            <DataTable
              columns={columnas}
              data={facturasFiltradas}
              title="Lista de factuas"
              pagination
              highlightOnHover
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight="auto"
              noDataComponent="No se encontró ningúna factura"
            />
          </div>

        </div>
      </div>

      {/* modal detalles de factura */}

      < div class="modal fade" id="detalleFactura" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalles del ticket</h1>
            </div>
            <div class="modal-body">

              <h4>Ticket</h4>
              <p>{ticket}</p>

              <h4>Fecha</h4>
              <p>{fecha}</p>

              <h4>Lugar</h4>
              <p>{lugar}</p>

              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>

                <tbody class="table-group-divider">
                  {productosFactura.map((producto) => (
                    <tr>
                      <td >{producto.nombre}</td>
                      <td style={styles.celda}>{producto.cantidad}</td>
                      <td style={styles.celda}>{producto.precio}</td>
                      <td style={styles.celda}>{producto.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='d-flex justify-content-end mb-2'>
                <h3 className='mt-2 d-flex justify-content-end mb-2'>
                  Total:  $
                </h3>
                <h3 className='mt-2 d-flex justify-content-end mb-2'>
                  {productosFactura.reduce((a, c) => a + c.total, 0)}
                </h3>
              </div>


            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>

          </div>
        </div>
      </div >
    </div>
  )
}

const styles = {
  celda: {
    textAlign: 'center'
  }
}
