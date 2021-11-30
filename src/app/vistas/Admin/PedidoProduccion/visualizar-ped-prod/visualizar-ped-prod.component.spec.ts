import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPedProdComponent } from './visualizar-ped-prod.component';

describe('VisualizarPedProdComponent', () => {
  let component: VisualizarPedProdComponent;
  let fixture: ComponentFixture<VisualizarPedProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPedProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPedProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
