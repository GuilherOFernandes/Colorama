import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosProtecaoComponent } from './equipamentos-protecao.component';

describe('EquipamentosProtecaoComponent', () => {
  let component: EquipamentosProtecaoComponent;
  let fixture: ComponentFixture<EquipamentosProtecaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipamentosProtecaoComponent]
    });
    fixture = TestBed.createComponent(EquipamentosProtecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
