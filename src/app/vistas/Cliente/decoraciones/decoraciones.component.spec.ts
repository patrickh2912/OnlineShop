import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoracionesComponent } from './decoraciones.component';

describe('DecoracionesComponent', () => {
  let component: DecoracionesComponent;
  let fixture: ComponentFixture<DecoracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
