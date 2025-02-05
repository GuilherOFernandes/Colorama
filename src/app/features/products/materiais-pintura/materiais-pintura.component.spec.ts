import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaisPinturaComponent } from './materiais-pintura.component';

describe('MateriaisPinturaComponent', () => {
  let component: MateriaisPinturaComponent;
  let fixture: ComponentFixture<MateriaisPinturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaisPinturaComponent]
    });
    fixture = TestBed.createComponent(MateriaisPinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
