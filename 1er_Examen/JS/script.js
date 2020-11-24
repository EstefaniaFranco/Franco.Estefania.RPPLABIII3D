import refreshTable, { idClicked } from "./tabla.js";
import clearFrm, { altaAnuncio } from "./form.js";

export let list;
let nextID;
let frm;

window.addEventListener('load', init);

function init() {
    list = getList();
    nextID = getID();

    frm = document.getElementById('form1');
    frm.addEventListener('submit', e => {
        e.preventDefault();
        alta();
    });

    document.getElementById('btnBaja').addEventListener('click', baja);
    document.getElementById('btnModificar').addEventListener('click', modificar);
    document.getElementById('btnCancelar').addEventListener('click', clearFrm);

    refreshTable();
    clearFrm();
}

function getList() {
    return JSON.parse(localStorage.getItem('autos')) || [];
}

function getID() {
    return JSON.parse(localStorage.getItem('nextID')) || 100;
}

function save() {
    localStorage.setItem('autos', JSON.stringify(list));
    localStorage.setItem('nextID', JSON.stringify(nextID));
}

function alta() {
    const nuevoRegistro = altaAnuncio(nextID);
    if (confirm('Esta seguro que desea añadir este registro?')) {
        list.push(nuevoRegistro);
        nextID++;
        save();
        refreshTable();
    }
    clearFrm();
}

function baja() {
    document.getElementById('btnModificar').disabled = true;
    document.getElementById('btnBaja').disabled = true;

    if (confirm('Esta seguro que desea eliminar este registro?')) {
        for (const e of list) {
            if (e['id'] == idClicked) {
                list.splice(list.indexOf(e), 1);
                save();
                refreshTable();
                break;
            }
        }
    }
    clearFrm();
}

function modificar() {
    document.getElementById('btnModificar').disabled = true;
    document.getElementById('btnBaja').disabled = true;
    const nuevoRegistro = altaAnuncio(idClicked);

    if (confirm('Esta seguro que desea modificar este registro?')) {
        for (const e of list) {
            if (e['id'] == idClicked) {
                list[list.indexOf(e)] = nuevoRegistro;
                save();
                refreshTable();
                break;
            }
        }
    }
    clearFrm();
}
