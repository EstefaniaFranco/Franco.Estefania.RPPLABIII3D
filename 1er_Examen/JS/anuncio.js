class Anuncio{
    constructor(id, titulo, transaccion, descripcion, precio){
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    } 
}

export default class Anuncio_Auto extends Anuncio{
    constructor (id, titulo, transaccion, descripcion, precio, num_puertas, num_KMs, potencia, polarizado, cajaAutomatica, cierreCentral){
        super(id, titulo, transaccion, descripcion, precio);
        this.num_KMs = num_KMs;
        this.num_puertas = num_puertas;
        this.potencia = potencia;
        this.polarizado = polarizado;
        this.caja_Automatica = cajaAutomatica;
        this.cierre_Central = cierreCentral;
    }  
}