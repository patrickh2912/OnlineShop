import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPedEspecialComponent } from './visualizar-ped-especial.component';

describe('VisualizarPedEspecialComponent', () => {
  let component: VisualizarPedEspecialComponent;
  let fixture: ComponentFixture<VisualizarPedEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPedEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPedEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
