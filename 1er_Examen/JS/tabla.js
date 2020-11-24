import {loadFrm} from './form.js';
import {list} from './script.js';

export let idClicked;

function createTable(vec) {
    const tabla = document.createElement('table');
    tabla.appendChild(createHeader(vec[0]));
    tabla.appendChild(createBody(vec));
    return tabla;
}

function createHeader(item) {
    const head = document.createElement('thead');
    const fila = document.createElement('tr');

    for (const key in item) {
        let columna = document.createElement('th');
        const texto = document.createTextNode(key);
        columna.appendChild(texto);
        fila.appendChild(columna);
    }
    head.appendChild(fila);
    return head;
}

function createBody(vec) {
    const cuerpo = document.createElement('tbody');

    vec.forEach(p => {
        const row = document.createElement('tr');
        for (const key of Object.keys(p)) {
            let col = document.createElement('td');
            const valor = document.createTextNode(p[key]);
            col.appendChild(valor);
            row.appendChild(col);
        }

        if (p.hasOwnProperty('id')) {
            row.setAttribute('data-id', p['id']);
        }
        addHandler(row);
        cuerpo.appendChild(row);
    });
    return cuerpo;
}

export default function refreshTable() {
    let table = document.getElementById('divTabla');
    while (table.firstChild) {
        table.removeChild(table.lastChild);
    }

    table.appendChild(createSpinner());

    setTimeout(() => {
        while (table.firstChild) {
            table.removeChild(table.lastChild);
        }
        table.appendChild(createTable(list));
    }, 3000);
    return table;
}

function createSpinner(){
    let loading = document.createElement('img');
    loading.setAttribute("src", "./image/spinner.png");
    loading.setAttribute("alt", 'Cargando...');
    return loading;
}


function addHandler(td) {
    if (td) {
        td.addEventListener('click', e=>{
            idClicked = e.target.parentNode.dataset.id;
            loadFrm(idClicked);
        });
    }
}
