export class Pedido{
    idPedido:number;
    fechaIncio:Date;
    tipo:String;
    descripcion:String;
    montoTotal:number;
    subtotal:number;
    descuento:number;
    fechaEstEntrega:Date;
    estado:String;
    idCuentasUsuario:number;
    idEnvio:number;
}