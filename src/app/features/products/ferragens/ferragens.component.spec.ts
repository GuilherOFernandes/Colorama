import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerragensComponent } from './ferragens.component';

describe('FerragensComponent', () => {
  let component: FerragensComponent;
  let fixture: ComponentFixture<FerragensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FerragensComponent]
    });
    fixture = TestBed.createComponent(FerragensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
