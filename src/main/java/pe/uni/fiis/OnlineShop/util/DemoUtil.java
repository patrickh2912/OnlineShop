package pe.uni.fiis.OnlineShop.util;

import pe.uni.fiis.OnlineShop.domain.Usuario;
import pe.uni.fiis.OnlineShop.dto.UsuarioRequest;

public class DemoUtil {

    public static Usuario mapToUsuario(UsuarioRequest request){
        Usuario response =new Usuario();
        response.setCuenta(request.getCuenta());
        response.setContrasenia(request.getContrasenia());
        return response;
    }

}
