import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsuariosEditarComponent } from './modal-usuarios-editar.component';

describe('ModalUsuariosEditarComponent', () => {
  let component: ModalUsuariosEditarComponent;
  let fixture: ComponentFixture<ModalUsuariosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUsuariosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsuariosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
