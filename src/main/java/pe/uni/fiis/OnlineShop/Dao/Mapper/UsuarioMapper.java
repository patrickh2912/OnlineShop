package pe.uni.fiis.OnlineShop.Dao.Mapper;

import org.springframework.jdbc.core.RowMapper;
import pe.uni.fiis.OnlineShop.domain.Usuario;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UsuarioMapper implements RowMapper<Usuario> {
    @Override
    public Usuario mapRow(ResultSet resultSet, int i) throws SQLException {
        Usuario response=new Usuario();
        response.setCuenta(resultSet.getString("cuenta"));
        response.setContrasenia(resultSet.getString("contrasenia"));
        return response;
    }



}
