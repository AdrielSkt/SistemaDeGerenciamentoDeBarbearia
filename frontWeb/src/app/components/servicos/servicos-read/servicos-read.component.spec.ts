import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosReadComponent } from './servicos-read.component';

describe('ServicosReadComponent', () => {
  let component: ServicosReadComponent;
  let fixture: ComponentFixture<ServicosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
