import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnimalesEditarComponent } from './modal-animales-editar.component';

describe('ModalAnimalesEditarComponent', () => {
  let component: ModalAnimalesEditarComponent;
  let fixture: ComponentFixture<ModalAnimalesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnimalesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnimalesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
