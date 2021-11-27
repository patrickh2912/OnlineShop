package pe.uni.fiis.OnlineShop.Dao;
import org.springframework.stereotype.Repository;
import pe.uni.fiis.OnlineShop.Dao.Datasource.myDataSource;
import pe.uni.fiis.OnlineShop.Dao.Mapper.UsuarioMapper;
import pe.uni.fiis.OnlineShop.domain.*;
import pe.uni.fiis.OnlineShop.dto.ProductoCaracteristicaRequest;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Repository
public class UsuarioDaoImpl extends myDataSource implements UsuarioDao {

    public Usuario loginUsuario(Usuario request) {
        Usuario usuario = null;
        try {
            usuario = this.jdbcTemplate.queryForObject(
                    "select cuenta, contrasenia from cuentausuario where cuenta=? ",
                    new String[]{
                            request.getCuenta(),
                    }, new UsuarioMapper());
        } catch (Exception ex) {
            ex.printStackTrace();
            return usuario;

        }

        return usuario;
    }

    @Override
    public List<Pedido> obtenerPedidos() {
        List<Pedido> list = null;
        try {
            List<Map<String, Object>> filas = this.jdbcTemplate.queryForList(
                    "SELECT idPedido,fechaInicio,tipo,descripcion,montoTotal,estimacionEntrega,estado,idEnvio FROM pedido");
            list = new ArrayList<>();
            for (Map<String, Object> fila : filas) {
                Pedido p = new Pedido();
                p.setIdPedido((Integer) fila.get("idPedido"));
                p.setFechaInicio((Date) fila.get("fechaInicio"));
                p.setDescripcion((String) fila.get("descripcion"));
                p.setMontoTotal((BigDecimal) fila.get("montoTotal"));
                p.setEstimacionEntrega((String) fila.get("estimacionEntrega"));
                p.setEstado((String) fila.get("estado"));
                p.setIdEnvio((Integer) fila.get("idEnvio"));
                list.add(p);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            return list;

        }
        return list;
    }

    @Override
    public List<Caracteristica> obtenerCaracteristicas() {
        List<Caracteristica> list = null;
        try {
            List<Map<String, Object>> filas = this.jdbcTemplate.queryForList(
                    "SELECT idTipoCaracteristicasProducto,descripcion,tipoCaracteristica FROM caracteristicasproductos");
            list = new ArrayList<>();
            for (Map<String, Object> fila : filas) {
                Caracteristica p = new Caracteristica();
                p.setIdTipoCaracteristicasProducto((Integer) fila.get("idTipoCaracteristicasProducto"));
                p.setDescripcion((String) fila.get("descripcion"));
                p.setTipoCaracteristica((String) fila.get("tipoCaracteristica"));
                list.add(p);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            return list;

        }

        return list;
    }

    @Override
    public List<Caracteristica> obtenerTipoCaracteristica() {
        List<Caracteristica> list = null;
        try {
            List<Map<String, Object>> filas = this.jdbcTemplate.queryForList(
                    "SELECT tipoCaracteristica FROM vizzlan.caracteristicasproductos where tipoCaracteristica NOT IN ('---') group by tipoCaracteristica ");
            list = new ArrayList<>();
            for (Map<String, Object> fila : filas) {
                Caracteristica p = new Caracteristica();
                p.setTipoCaracteristica((String) fila.get("tipoCaracteristica"));
                list.add(p);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            return list;

        }

        return list;
    }

    @Override
    public List<Categoria> obtenerCategoria() {
        List<Categoria> list = null;
        try {
            List<Map<String, Object>> filas = this.jdbcTemplate.queryForList(
                    "SELECT idCategoriaProductos,descripcion FROM categoriaproductos where superCategoria=0");
            list = new ArrayList<>();
            for (Map<String, Object> fila : filas) {
                Categoria p = new Categoria();
                p.setIdCategoriaProductos((Integer) fila.get("idCategoriaProductos"));
                p.setDescripcion((String) fila.get("descripcion"));
                list.add(p);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            return list;

        }

        return list;
    }

    @Override
    public List<ProductoCaracteristica> obtenerProductos(ProductoCaracteristicaRequest request) {
        List<ProductoCaracteristica> list = null;
        try {
            List<Map<String, Object>> filas = this.jdbcTemplate.queryForList(

                    "SELECT p.idProducto, p.descripcion as nombre,  cp.tipoCaracteristica,cp.descripcion \n" +
                            "from caracteristicaproductoaplicado cpa \n" +
                            "join producto p on p.idProducto=cpa.idProducto  \n" +
                            "join caracteristicasproductos cp \n" +
                            "on cp.idTipoCaracteristicasProducto=cpa.idTipoCaracteristicasProducto\n" +
                            "where cp.idTipoCaracteristicasProducto = ?", new String[]
                            {String.valueOf(request.getIdTipoCaracteristicasProducto())});


            list = new ArrayList<ProductoCaracteristica>();

            for (Map<String, Object> fila : filas) {
                ProductoCaracteristica p = new ProductoCaracteristica();
                p.setIdProducto((Integer) fila.get("idProducto"));
                p.setNombre((String) fila.get("nombre"));
                p.setTipoCaracteristica((String) fila.get("tipoCaracteristica"));
                p.setDescripcion((String) fila.get("descripcion"));

                list.add(p);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            return list;
        }
        return list;
    }
}
