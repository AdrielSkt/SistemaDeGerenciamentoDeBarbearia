import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoDeHorariosComponent } from './gerenciamento-de-horarios.component';

describe('GerenciamentoDeHorariosComponent', () => {
  let component: GerenciamentoDeHorariosComponent;
  let fixture: ComponentFixture<GerenciamentoDeHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoDeHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoDeHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
