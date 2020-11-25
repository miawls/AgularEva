import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioClienteComponent } from './fomulario-cliente.component';

describe('FomularioClienteComponent', () => {
  let component: FomularioClienteComponent;
  let fixture: ComponentFixture<FomularioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomularioClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomularioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
