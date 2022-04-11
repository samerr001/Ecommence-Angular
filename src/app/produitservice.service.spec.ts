import { TestBed } from '@angular/core/testing';

import { ProduitserviceService } from './produitservice.service';

describe('ProduitserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduitserviceService = TestBed.get(ProduitserviceService);
    expect(service).toBeTruthy();
  });
});
