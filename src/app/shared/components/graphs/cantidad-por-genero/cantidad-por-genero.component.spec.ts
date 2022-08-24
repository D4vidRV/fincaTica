import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadPorGeneroComponent } from './cantidad-por-genero.component';

describe('CantidadPorGeneroComponent', () => {
  let component: CantidadPorGeneroComponent;
  let fixture: ComponentFixture<CantidadPorGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadPorGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadPorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
