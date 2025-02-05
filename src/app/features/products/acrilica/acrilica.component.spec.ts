import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrilicaComponent } from './acrilica.component';

describe('AcrilicaComponent', () => {
  let component: AcrilicaComponent;
  let fixture: ComponentFixture<AcrilicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcrilicaComponent]
    });
    fixture = TestBed.createComponent(AcrilicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
