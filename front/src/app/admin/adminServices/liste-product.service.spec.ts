import { TestBed } from '@angular/core/testing';

import { ListeProductService } from './liste-product.service';

describe('ListeProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeProductService = TestBed.get(ListeProductService);
    expect(service).toBeTruthy();
  });
});
