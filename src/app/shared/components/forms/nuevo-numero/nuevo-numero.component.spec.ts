import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoNumeroComponent } from './nuevo-numero.component';

describe('NuevoNumeroComponent', () => {
  let component: NuevoNumeroComponent;
  let fixture: ComponentFixture<NuevoNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoNumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
