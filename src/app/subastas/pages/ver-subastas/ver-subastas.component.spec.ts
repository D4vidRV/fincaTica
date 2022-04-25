import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSubastasComponent } from './ver-subastas.component';

describe('VerSubastasComponent', () => {
  let component: VerSubastasComponent;
  let fixture: ComponentFixture<VerSubastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSubastasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSubastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
