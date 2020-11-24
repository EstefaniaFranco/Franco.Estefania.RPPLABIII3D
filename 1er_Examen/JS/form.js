import Anuncio_Auto from "./anuncio.js";
import { list } from './script.js';

let frm = document.forms[0];

export function altaAnuncio(id) {
    const anuncio = new Anuncio_Auto(id,
        frm.titulo.value,
        frm.transaccion.value,
        frm.descripcion.value,
        frm.precio.value,
        frm.num_puertas.value,
        frm.num_kms.value,
        frm.num_potencia.value,
        frm.cbxPol.checked,
        frm.cbxCaja.checked,
        frm.cbxCierre.checked
    );
    return anuncio;
}

export default function clearFrm() {
    document.getElementById('btnModificar').disabled = true;
    document.getElementById('btnBaja').disabled = true;
    document.getElementById('btnAceptar').disabled = false;

    frm.titulo.value = '';
    frm.transaccion.value = '';
    frm.descripcion.value = '';
    frm.precio.value = '';
    frm.num_puertas.value = '';
    frm.num_kms.value = '';
    frm.num_potencia.value = '';
    frm.cbxPol.checked = false;
    frm.cbxCaja.checked = false;
    frm.cbxCierre.checked = false;   
}


export function loadFrm(id) {
    document.getElementById('btnBaja').disabled = false;
    document.getElementById('btnModificar').disabled = false;
    document.getElementById('btnAceptar').disabled = true;

    list.forEach(element => {
        if (element.id == id) {    
            frm.titulo.value = element.titulo,
            frm.transaccion.value = element.transaccion,
            frm.descripcion.value = element.descripcion,
            frm.precio.value = element.precio,
            frm.num_puertas.value = element.num_puertas,
            frm.num_kms.value = element.num_KMs,
            frm.num_potencia.value = element.potencia,
            frm.cbxPol.checked = element.polarizado,
            frm.cbxCaja.checked = element.caja_Automatica,
            frm.cbxCierre.checked = element.cierre_Central
        }
    });
}
