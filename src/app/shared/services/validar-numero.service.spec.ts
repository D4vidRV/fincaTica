import { TestBed } from '@angular/core/testing';

import { ValidarNumeroService } from './validar-numero.service';

describe('ValidarNumeroService', () => {
  let service: ValidarNumeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarNumeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
