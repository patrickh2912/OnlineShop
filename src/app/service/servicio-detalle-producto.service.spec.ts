import { TestBed } from '@angular/core/testing';

import { ServicioDetalleProductoService } from './servicio-detalle-producto.service';

describe('ServicioDetalleProductoService', () => {
  let service: ServicioDetalleProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDetalleProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
