import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNumerosComponent } from './modal-numeros.component';

describe('ModalNumerosComponent', () => {
  let component: ModalNumerosComponent;
  let fixture: ComponentFixture<ModalNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
