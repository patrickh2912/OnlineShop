package pe.uni.fiis.OnlineShop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.uni.fiis.OnlineShop.Dao.UsuarioDao;
import pe.uni.fiis.OnlineShop.domain.*;
import pe.uni.fiis.OnlineShop.dto.ProductoCaracteristicaRequest;
import pe.uni.fiis.OnlineShop.dto.UsuarioRequest;
import pe.uni.fiis.OnlineShop.dto.UsuarioResponse;
import pe.uni.fiis.OnlineShop.util.DemoUtil;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService{
    @Autowired
    private UsuarioDao usuarioDao;

    @Override
    public UsuarioResponse loginUsuario(UsuarioRequest request) {
        Usuario usuario =this.usuarioDao.loginUsuario(DemoUtil.mapToUsuario(request));
        UsuarioResponse response=new UsuarioResponse();
        response.setUsuario(usuario);
        return response;

    }

    @Override
    public List<Pedido> obtenerPedidos() {
        return this.usuarioDao.obtenerPedidos();
    }

    @Override
    public List<Caracteristica> obtenerCaracteristicas() {
        return this.usuarioDao.obtenerCaracteristicas();
    }

    @Override
    public List<Caracteristica> obtenerTipoCaracteristica() {
        return this.usuarioDao.obtenerTipoCaracteristica();
    }

    @Override
    public List<Categoria> obtenerCategoria() {
        return this.usuarioDao.obtenerCategoria();
    }

    @Override
    public List<ProductoCaracteristica> obtenerProductos(ProductoCaracteristicaRequest request) {
        return this.usuarioDao.obtenerProductos(request);
    }

}
