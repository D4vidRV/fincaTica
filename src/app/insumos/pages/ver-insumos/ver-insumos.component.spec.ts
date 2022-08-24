import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInsumosComponent } from './ver-insumos.component';

describe('VerInsumosComponent', () => {
  let component: VerInsumosComponent;
  let fixture: ComponentFixture<VerInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInsumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
