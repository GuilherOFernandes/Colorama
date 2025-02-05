import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolventesComponent } from './solventes.component';

describe('SolventesComponent', () => {
  let component: SolventesComponent;
  let fixture: ComponentFixture<SolventesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolventesComponent]
    });
    fixture = TestBed.createComponent(SolventesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
