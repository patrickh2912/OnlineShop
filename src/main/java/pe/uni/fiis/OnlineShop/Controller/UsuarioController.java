package pe.uni.fiis.OnlineShop.Controller;

import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pe.uni.fiis.OnlineShop.domain.*;
import pe.uni.fiis.OnlineShop.dto.PedidoResponse;
import pe.uni.fiis.OnlineShop.dto.ProductoCaracteristicaRequest;
import pe.uni.fiis.OnlineShop.dto.UsuarioRequest;
import pe.uni.fiis.OnlineShop.dto.UsuarioResponse;
import pe.uni.fiis.OnlineShop.service.UsuarioService;
import pe.uni.fiis.OnlineShop.service.UsuarioServiceImpl;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 9600)
@RestController
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping(value = "/usuarios",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public UsuarioResponse loginUsuario(@RequestBody UsuarioRequest request) {
        UsuarioResponse response = this.usuarioService.loginUsuario(request);
        if (response.getUsuario() == null) {
            response.setError(" Usuario no encontrado ");
        }
        return response;

    }

    @GetMapping(value = "/obtenerPedidos")
    public List<Pedido> obtenerPedidos() {
        return this.usuarioService.obtenerPedidos();

    }
    @GetMapping(value = "/obtenerCaracteristicas")
    public List<Caracteristica> obtenerCaracteristicas() {
        return this.usuarioService.obtenerCaracteristicas();

    }
    @GetMapping(value = "/obtenerTipoCaracteristicas")
    public List<Caracteristica> obtenerTipoCaracteristica() {
        return this.usuarioService.obtenerTipoCaracteristica();

    }
    @GetMapping(value = "/obtenerCategoria")
    public List<Categoria> obtenerCategoria() {
        return this.usuarioService.obtenerCategoria();

    }
    @PostMapping (value = "/obtenerProductosCaracteristica")
    public List<ProductoCaracteristica> obtenerProductos(@RequestBody ProductoCaracteristicaRequest request) {
        return this.usuarioService.obtenerProductos(request);

    }
}