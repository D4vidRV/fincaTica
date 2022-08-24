import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosPorMesComponent } from './insumos-por-mes.component';

describe('InsumosPorMesComponent', () => {
  let component: InsumosPorMesComponent;
  let fixture: ComponentFixture<InsumosPorMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsumosPorMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
