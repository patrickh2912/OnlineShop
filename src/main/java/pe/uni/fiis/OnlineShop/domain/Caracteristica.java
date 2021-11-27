package pe.uni.fiis.OnlineShop.domain;

public class Caracteristica {
    private int idTipoCaracteristicasProducto;
    private String descripcion;
    private String tipoCaracteristica;

    public int getIdTipoCaracteristicasProducto() {
        return idTipoCaracteristicasProducto;
    }

    public void setIdTipoCaracteristicasProducto(int idTipoCaracteristicasProducto) {
        this.idTipoCaracteristicasProducto = idTipoCaracteristicasProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTipoCaracteristica() {
        return tipoCaracteristica;
    }

    public void setTipoCaracteristica(String tipoCaracteristica) {
        this.tipoCaracteristica = tipoCaracteristica;
    }
}
