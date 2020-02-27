import { TestBed } from '@angular/core/testing';

import { PrincipaleService } from './principale.service';

describe('PrincipaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrincipaleService = TestBed.get(PrincipaleService);
    expect(service).toBeTruthy();
  });
});
