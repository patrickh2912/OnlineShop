import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDecoracionesComponent } from './lista-decoraciones.component';

describe('ListaDecoracionesComponent', () => {
  let component: ListaDecoracionesComponent;
  let fixture: ComponentFixture<ListaDecoracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDecoracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDecoracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
