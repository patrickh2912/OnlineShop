package pe.uni.fiis.OnlineShop.service;

import pe.uni.fiis.OnlineShop.domain.Caracteristica;
import pe.uni.fiis.OnlineShop.domain.Categoria;
import pe.uni.fiis.OnlineShop.domain.Pedido;
import pe.uni.fiis.OnlineShop.domain.ProductoCaracteristica;
import pe.uni.fiis.OnlineShop.dto.ProductoCaracteristicaRequest;
import pe.uni.fiis.OnlineShop.dto.UsuarioRequest;
import pe.uni.fiis.OnlineShop.dto.UsuarioResponse;

import java.util.List;

public interface UsuarioService {
    UsuarioResponse loginUsuario(UsuarioRequest request);
    List<Pedido> obtenerPedidos();
    List<Caracteristica> obtenerCaracteristicas();
    List<Caracteristica>obtenerTipoCaracteristica();
    List<Categoria>obtenerCategoria();
    List<ProductoCaracteristica>obtenerProductos(ProductoCaracteristicaRequest request);
}
