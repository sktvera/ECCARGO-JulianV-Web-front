import axios from 'axios';

/* const urlApi =`https://backend-eccargo-julianv-production.up.railway.app` */
const urlApi =`http://localhost:3000`


console.log({urlApi})

// TODAS LAS COTIZACIONES
export function getAllQuotation() {

  return axios.get(`${urlApi}/api/quotation/`);
}
//COTIZACIONES BY ID
export function getByIdQuotation(idQuotation) {
 
  return axios.get(`${urlApi}/api/quotation/${idQuotation}`);
}


//ELIMINAR COTIZACION BY ID
export function deletebyIdQuotation(idQuotation) {
  
  return axios.delete(`${urlApi}/api/quotation/${idQuotation}`);
}
//ACTUALIZAR COTIZACION
export function updateByIdQuotation(idQuotation,updateItem) {

    return axios.patch(`${urlApi}/api/quotation/${idQuotation}`,updateItem);
  }
//CREAR COTIZACION
  export function createQquotation(newQquotation) {

    

    return axios.post(`${urlApi}/api/quotation/`,newQquotation);
  }
