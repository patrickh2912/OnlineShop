import { TestBed } from '@angular/core/testing';

import { ServicePedidosService } from './service-pedidos.service';

describe('ServicePedidosService', () => {
  let service: ServicePedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
