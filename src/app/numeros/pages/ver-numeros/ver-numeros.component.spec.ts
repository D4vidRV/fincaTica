import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerNumerosComponent } from './ver-numeros.component';

describe('VerNumerosComponent', () => {
  let component: VerNumerosComponent;
  let fixture: ComponentFixture<VerNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerNumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
