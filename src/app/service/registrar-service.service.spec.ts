import { TestBed } from '@angular/core/testing';

import { RegistrarServiceService } from './registrar-service.service';

describe('RegistrarServiceService', () => {
  let service: RegistrarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
