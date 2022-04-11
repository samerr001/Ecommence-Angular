import { TestBed } from '@angular/core/testing';

import { PanierserviceService } from './panierservice.service';

describe('PanierserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanierserviceService = TestBed.get(PanierserviceService);
    expect(service).toBeTruthy();
  });
});
