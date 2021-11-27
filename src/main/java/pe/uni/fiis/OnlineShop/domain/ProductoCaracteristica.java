package pe.uni.fiis.OnlineShop.domain;

public class ProductoCaracteristica {
    private int idProducto;
    private String nombre;
    private String tipoCaracteristica;
    private String descripcion;

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipoCaracteristica() {
        return tipoCaracteristica;
    }

    public void setTipoCaracteristica(String tipoCaracteristica) {
        this.tipoCaracteristica = tipoCaracteristica;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
