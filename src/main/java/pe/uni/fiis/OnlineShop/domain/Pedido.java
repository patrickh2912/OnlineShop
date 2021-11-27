package pe.uni.fiis.OnlineShop.domain;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Date;

public class Pedido {
    private int idPedido;
    private Date fechaInicio;
    private String tipo;
    private String descripcion;
    private BigDecimal montoTotal;
    private String estimacionEntrega;
    private String estado;
    private int idEnvio;

    public int getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public BigDecimal getMontoTotal() {
        return montoTotal;
    }

    public void setMontoTotal(BigDecimal montoTotal) {
        this.montoTotal = montoTotal;
    }

    public String getEstimacionEntrega() {
        return estimacionEntrega;
    }

    public void setEstimacionEntrega(String estimacionEntrega) {
        this.estimacionEntrega = estimacionEntrega;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getIdEnvio() {
        return idEnvio;
    }

    public void setIdEnvio(int idEnvio) {
        this.idEnvio = idEnvio;
    }
}
