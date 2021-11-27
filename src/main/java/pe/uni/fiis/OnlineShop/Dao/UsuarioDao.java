package pe.uni.fiis.OnlineShop.Dao;

import pe.uni.fiis.OnlineShop.domain.*;
import pe.uni.fiis.OnlineShop.dto.ProductoCaracteristicaRequest;

import java.util.List;

public interface UsuarioDao {
    Usuario loginUsuario(Usuario request);
    List<Pedido> obtenerPedidos(); //no se recibe request
    List<Caracteristica> obtenerCaracteristicas();
    List<Caracteristica>obtenerTipoCaracteristica();
    List<Categoria>obtenerCategoria();
    List<ProductoCaracteristica>obtenerProductos(ProductoCaracteristicaRequest request);

}
