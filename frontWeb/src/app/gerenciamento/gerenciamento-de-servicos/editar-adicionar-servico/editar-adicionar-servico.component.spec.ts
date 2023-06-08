import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAdicionarServicoComponent } from './editar-adicionar-servico.component';

describe('EditarAdicionarServicoComponent', () => {
  let component: EditarAdicionarServicoComponent;
  let fixture: ComponentFixture<EditarAdicionarServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAdicionarServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAdicionarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
