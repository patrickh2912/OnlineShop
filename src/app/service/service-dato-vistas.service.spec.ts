import { TestBed } from '@angular/core/testing';

import { ServiceDatoVistasService } from './service-dato-vistas.service';

describe('ServiceDatoVistasService', () => {
  let service: ServiceDatoVistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDatoVistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
