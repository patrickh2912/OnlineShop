package pe.uni.fiis.OnlineShop.dto;

import pe.uni.fiis.OnlineShop.domain.Pedido;

import java.util.List;

public class PedidoResponse {
    private List<Pedido> list;
   // private String error;

    public List<Pedido> getList() {
        return list;
    }

    public void setList(List<Pedido> list) {
        this.list = list;
    }

    /*public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }*/
}
