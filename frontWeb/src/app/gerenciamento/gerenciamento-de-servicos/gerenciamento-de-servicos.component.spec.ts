import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoDeServicosComponent } from './gerenciamento-de-servicos.component';

describe('GerenciamentoDeServicosComponent', () => {
  let component: GerenciamentoDeServicosComponent;
  let fixture: ComponentFixture<GerenciamentoDeServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoDeServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoDeServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
